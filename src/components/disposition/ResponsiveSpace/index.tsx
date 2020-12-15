import React from 'react'
import styled from 'styled-components'
import { Space } from 'antd'
import { SpaceProps } from 'antd/lib/space'
import useBreakpoint from 'antd/lib/grid/hooks/useBreakpoint'
const SSpace = styled(Space)``

type BreackpointType = 'sm' | 'md' | 'lg' | 'xl'

export type ResponsiveSpaceProps = SpaceProps & {
  breackpoint?: BreackpointType
}

const ResponsiveSpace: React.FC<ResponsiveSpaceProps> = (props) => {
  const { children, direction, breackpoint, ...rest } = props

  const bp = useBreakpoint()

  function getBreackpoint() {
    switch (breackpoint) {
      case 'sm':
        return bp.sm
      case 'md':
        return bp.md
      case 'lg':
        return bp.lg
      case 'xl':
        return bp.xl
      case undefined:
        return false
    }
  }

  return (
    <SSpace
      direction={direction || getBreackpoint() ? 'vertical' : 'horizontal'}
      {...rest}
    >
      {children}
    </SSpace>
  )
}

export default ResponsiveSpace
