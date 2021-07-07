import { notification, Spin } from "antd";
import Select, { OptionProps, SelectProps, SelectValue } from "antd/lib/select";
import Axios from "axios";
import React, { ReactNode, useEffect, useState } from "react";
import Backend from "../../helpers/Backend";

export declare type SearchUrlFunc = (term?: string) => string;

export declare type RemoteSelectProps<
  ResponseItemType = any
> = SelectProps<SelectValue> & {
  renderOption: (
    item: ResponseItemType
  ) => {
    optionProps: OptionProps;
  };
  renderSearchUrl?: SearchUrlFunc;
  dataExtractor?: (response: any) => Array<ResponseItemType>;
  defaultOptions?: ResponseItemType[];
  searchingContent?: ReactNode;
  errorMessage?: ReactNode;
};

const RemoteSelect = React.forwardRef<any, RemoteSelectProps>((props, ref) => {
  // explode props
  const {
    renderOption,
    renderSearchUrl,
    dataExtractor,
    errorMessage,
    defaultOptions,
    onChange,
    onSearch,
    filterOption,
    notFoundContent,
    searchingContent,
    value,
    ...propsRest
  } = props;

  const [inputValue, setInputValue] = useState(value);
  const [data, setData] = useState<any[]>(defaultOptions ?? []);
  const [fetching, setFetching] = useState(false);
  const [fetchOptionsCT, setFetchOptionsCT] = useState(
    Axios.CancelToken.source()
  );
  const [searchUrl, setSearchUrl] = useState<undefined | SearchUrlFunc>(
    renderSearchUrl
  );

  let lastFetchId = 0;

  const fetchOptions = (value: string) => {
    // cancel previous request
    fetchOptionsCT.cancel();

    lastFetchId += 1;
    const fetchId = lastFetchId;
    let newToken = Axios.CancelToken.source();
    setFetchOptionsCT(newToken);

    Backend.getInstance().call({
      config: {
        url: searchUrl
          ? searchUrl(value)
          : "https://randomuser.me/api/?results=5",
        cancelToken: newToken.token,
      },
      beforeStart: () => {
        setFetching(true);
        setData([]);
      },
      successCallback: (response) => {
        if (fetchId !== lastFetchId) {
          // for fetch callback order
          return;
        }
        setData(dataExtractor ? dataExtractor(response.data) : response.data);
      },
      errorCallback: (_error, message) => {
        notification.error({
          message: message ?? errorMessage ?? "Failed to fetch options",
        });
      },
      finishCallback: () => {
        setFetching(false);
      },
    });
  };

  const handleChange = (value: any) => {
    setInputValue(value);
    setData([]);
    setFetching(false);
  };

  useEffect(() => {
    setSearchUrl(props.renderSearchUrl);
    // eslint-disable-next-line
  }, [props.renderSearchUrl]);

  useEffect(() => {
    return () => {
      fetchOptionsCT.cancel();
    };

    // eslint-disable-next-line
  }, []);

  return React.createElement(
    Select,
    {
      ref: ref,
      value: inputValue,
      notFoundContent: fetching
        ? searchingContent ?? <Spin size="small" />
        : notFoundContent,
      filterOption: filterOption ?? false,
      onSearch: (value: string) => {
        fetchOptions(value);

        // original onSearch
        if (onSearch) onSearch(value);
      },
      onChange: (value: SelectValue, option: any) => {
        handleChange(value);

        // original onChange
        if (onChange) onChange(value, option);
      },
      ...propsRest,
    },
    data.map((d) => {
      const opts = renderOption(d);
      return <Select.Option {...opts.optionProps} />;
    })
  );
});

export default RemoteSelect;
