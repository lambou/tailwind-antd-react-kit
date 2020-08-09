import React from 'react'
import { AutoComplete } from 'antd'
import styled from 'styled-components'
import tw from 'twin.macro'
import { AutoCompleteProps } from 'antd/lib/auto-complete'

const SAutocomplete = styled(AutoComplete)`
  .ant-select-selector {
    ${tw`border-none`}
  }
`

export type AutoCompleteInputProps = AutoCompleteProps;

const AutocompleteInput = (props: AutoCompleteInputProps) => {
  const { children, ...rest } = props
  return React.createElement(SAutocomplete, rest, children)
}

export default AutocompleteInput
