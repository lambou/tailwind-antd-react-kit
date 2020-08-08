import React from 'react'
import styled from 'styled-components'
import { Button } from 'antd'
import tw from 'twin.macro'
import { ButtonProps } from 'antd/lib/button'

const SButton = styled(Button)`
  ${tw`inline-flex items-center`}
`

export declare type CButtonProps = ButtonProps & {}

const CButton = React.forwardRef<HTMLElement, CButtonProps>((props, ref) => {
  const { children, ...propsRest } = props
  return (
    <SButton ref={ref} {...propsRest}>
      {children}
    </SButton>
  )
})

export default CButton
