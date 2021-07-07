import { Obj } from '@noreajs/common'
import {
  AxiosError, AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse, default as axios, default as Axios
} from 'axios'
import IError from '../interfaces/IError'

export type ErrorMessageExtractorFuncType<T = any> = (
  error?: T
) => string | Array<string> | undefined

export declare type BackendCallFuncProps<
  ResponseType = any,
  ErrorDataType = any
> = {
  config: AxiosRequestConfig
  errorConfig?: {
    errorName: string
    errors: IError[]
    udateErrors: (errors: IError[]) => void | Promise<void>
    reloadPageOnRefresh?: boolean
  }
  errorMessageExtractor?: ErrorMessageExtractorFuncType<ErrorDataType>
  beforeStart?: () => Promise<void> | void
  successCallback?: (
    response: AxiosResponse<ResponseType>
  ) => Promise<void> | void | ResponseType | Promise<ResponseType>
  errorCallback?: (
    error: AxiosError<ErrorDataType>,
    errorMessage?: string | Array<string>
  ) => Promise<void> | void | ErrorDataType | Promise<ErrorDataType>
  finishCallback?: () => Promise<void> | void
}

export default class Backend {
  BASE_URL: string = `${process.env.BACKEND_BASE_URL}`
  private static instance: Backend
  private static config: AxiosRequestConfig
  private static errorMessageExtractor?: ErrorMessageExtractorFuncType
  private axiosInstance: AxiosInstance

  private constructor(config?: AxiosRequestConfig) {
    // merge config
    Backend.config = Obj.merge(config ?? {}, Backend.config ?? {})

    // set base url
    this.BASE_URL = `${Backend.config.baseURL}`

    // init instance
    this.axiosInstance = axios.create(Backend.config)
  }

  /**
   * Config backend default config
   * @param options options
   */
  static init(options: {
    config?: AxiosRequestConfig
    errorMessageExtractor?: ErrorMessageExtractorFuncType
  }) {
    Backend.errorMessageExtractor = options.errorMessageExtractor
    Backend.config = options.config ?? Backend.config
  }

  /**
   * Update axios request global headers
   * @param headers new headers
   */
  static updateHeaders(headers: any, merge = true) {
    // expode config
    const { headers: configHeaders, ...rest } = Backend.config

    // update instance
    Backend.instance = new Backend({
      ...rest,
      headers: merge ? Obj.merge(headers ?? {}, configHeaders ?? {}) : headers
    })
  }

  /**
   * Get backend instance
   * @param config axios request config
   */
  static getInstance(config?: AxiosRequestConfig) {
    return Backend.instance ?? new Backend(config)
  }

  /**
   * Get axios instance
   */
  axios() {
    return this.axiosInstance
  }

  /**
   * Make a backend call
   * @param params call options
   */
  async call<ResponseType = any, ErrorDataType = any>(
    params: BackendCallFuncProps<ResponseType, ErrorDataType>
  ) {
    // before start
    if (params.beforeStart) {
      params.beforeStart()
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
          )
        }

        // success callback
        if (params.successCallback) {
          const r = await params.successCallback(response)
          return r ?? response.data
        } else {
          return response.data
        }
      })
      .catch(async (error: AxiosError<ErrorDataType>) => {
        // only uncancelled error are traited
        if (!Axios.isCancel(error)) {
          let errorMessage =
            (error.response?.data as any)?.message ??
            (error.response?.data as any)?.Message

          // use extractor if defined
          if (!errorMessage) {
            // local extractor
            if (params.errorMessageExtractor) {
              errorMessage = params.errorMessageExtractor(error.response?.data)
            }
            // global extractor
            else if (Backend.errorMessageExtractor) {
              errorMessage = Backend.errorMessageExtractor(error.response?.data)
            }
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
              type: 'HTTP',
              httpError: error,
              message: errorMessage,
              refreshCallback: () => {
                this.call(params)
              },
              reloadPage: params.errorConfig.reloadPageOnRefresh
            })
          }

          if (params.errorCallback) {
            const r = await params.errorCallback(error, errorMessage)
            return r === undefined ? error.response?.data : r
          } else {
            return error.response?.data
          }
        } else {
          return error.response?.data
        }
      })
      .finally(() => {
        // finish callback
        if (params.finishCallback) {
          params.finishCallback()
        }
      })
  }
}
