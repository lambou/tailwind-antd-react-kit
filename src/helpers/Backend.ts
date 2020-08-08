import axios, {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  AxiosError,
} from "axios";
import Axios from "axios";
import IError from "../interfaces/IError";

export declare type BackendCallFuncProps<
  ResponseType = any,
  ErrorDataType = any
> = {
  config: AxiosRequestConfig;
  errorConfig?: {
    errorName: string;
    errors: IError[];
    udateErrors: (errors: IError[]) => void | Promise<void>;
    reloadPageOnRefresh?: boolean;
  };
  errorMessageExtractor?: (
    error?: ErrorDataType
  ) => string | Array<string> | undefined;
  beforeStart?: () => Promise<void> | void;
  successCallback?: (
    response: AxiosResponse<ResponseType>
  ) => Promise<void> | void | ResponseType | Promise<ResponseType>;
  errorCallback?: (
    error: AxiosError<ErrorDataType>,
    errorMessage?: string | Array<string>
  ) => Promise<void> | void | ErrorDataType | Promise<ErrorDataType>;
  finishCallback?: () => Promise<void> | void;
};

export default class Backend {
  BASE_URL: string = `${process.env.REACT_APP_BACKEND_BASE_URL}`;
  private static instance: Backend;
  private axiosInstance: AxiosInstance;

  private constructor(token?: string) {
    const headers: any = {};

    if (token) {
      headers.Authorization = `Token ${token}`;
    }

    this.axiosInstance = axios.create({
      baseURL: this.BASE_URL,
      headers: headers,
    });
  }

  static updateToken(value?: string) {
    Backend.instance = new Backend(value);
  }

  static getInstance() {
    return Backend.instance ?? new Backend();
  }

  axios() {
    return this.axiosInstance;
  }

  async call<ResponseType = any, ErrorDataType = any>(
    params: BackendCallFuncProps<ResponseType, ErrorDataType>
  ) {
    // before start
    if (params.beforeStart) {
      params.beforeStart();
    }

    // make request
    return await this.axiosInstance
      .request(params.config)
      .then(async (response: AxiosResponse<ResponseType>) => {
        // update errors
        if (params.errorConfig) {
          params.errorConfig.udateErrors(
            params.errorConfig.errors.filter(
              (item) => item.name !== (params.errorConfig?.errorName as any)
            )
          );
        }

        // success callback
        if (params.successCallback) {
          const r = await params.successCallback(response);
          return r ?? response.data;
        } else {
          return response.data;
        }
      })
      .catch(async (error: AxiosError<ErrorDataType>) => {
        // only uncancelled error are traited
        if (!Axios.isCancel(error)) {
          let errorMessage =
            (error.response?.data as any)?.message ??
            (error.response?.data as any)?.Message;

          // use extractor if defined
          if (!errorMessage && params.errorMessageExtractor) {
            errorMessage = params.errorMessageExtractor(error.response?.data);
          }

          if (
            params.errorConfig &&
            !params.errorConfig.errors.find(
              (item) => item.name === (params.errorConfig?.errorName as any)
            )
          ) {
            // push error
            params.errorConfig.errors.push({
              name: params.errorConfig.errorName as any,
              type: "HTTP",
              httpError: error,
              message: errorMessage,
              refreshCallback: () => {
                this.call(params);
              },
              reloadPage: params.errorConfig.reloadPageOnRefresh,
            });
          }

          if (params.errorCallback) {
            const r = await params.errorCallback(error, errorMessage);
            return r === undefined ? error.response?.data : r;
          } else {
            return error.response?.data;
          }
        }else{
          return error.response?.data;
        }
      })
      .finally(() => {
        // finish callback
        if (params.finishCallback) {
          params.finishCallback();
        }
      });
  }
}
