import { AutoComplete } from "antd";
import { AutoCompleteProps } from "antd/lib/auto-complete";
import React from "react";
import styled from "styled-components";
const tw = require("twin.macro");

const SAutocomplete = styled(AutoComplete)`
  .ant-select-selector {
    ${tw`border-none`}
  }
`;

export type AutoCompleteInputProps = AutoCompleteProps;

const AutocompleteInput: React.FC<AutoCompleteInputProps> = React.forwardRef<
  any,
  AutoCompleteInputProps
>((props: AutoCompleteInputProps, ref) => {
  const { children, ...rest } = props;
  return React.createElement(
    SAutocomplete,
    {
      ref: ref,
      ...rest,
    },
    children
  );
});

export default AutocompleteInput;
