import React from 'react'
import { AutoComplete, Select } from 'antd'
import styled from 'styled-components'
import { AutoCompleteProps } from 'antd/lib/auto-complete'
import tw from 'twin.macro'

const SAutocomplete = styled(AutoComplete)`
  .ant-select-selector {
    ${tw`border-none`}
  }
`

export type AutoCompleteInputProps = AutoCompleteProps

const AutocompleteInput: React.FC<AutoCompleteInputProps> = React.forwardRef<
  Select,
  AutoCompleteInputProps
>((props: AutoCompleteInputProps, ref) => {
  const { children, ...rest } = props
  return React.createElement(
    SAutocomplete,
    {
      ref: ref,
      ...rest
    },
    children
  )
})

export default AutocompleteInput
