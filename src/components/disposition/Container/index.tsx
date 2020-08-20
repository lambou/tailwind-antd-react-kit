import React from 'react'
import useBreakpoint from 'antd/lib/grid/hooks/useBreakpoint'
import clsx from 'clsx'

export declare type ContainerProps = React.HTMLAttributes<HTMLDivElement> & {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'fluid'
}

const Container: React.FC<ContainerProps> = React.forwardRef<
  HTMLDivElement,
  ContainerProps
>((props, ref) => {
  const { size, style, className, ...restProps } = props

  const paddingInPercent = 0.0625

  const screenSizes = {
    small: 640,
    medium: 768,
    large: 1024,
    extraLarge: 1280
  }

  const bp = useBreakpoint()

  /**
   * Get container size
   */
  function getSize() {
    if (size) {
      return size
    } else {
      return 'xs'
    }
  }

  function getMaxWithValue() {
    if (bp.xl) {
      return `${screenSizes.extraLarge * (1 - paddingInPercent)}px`
    } else if (bp.lg) {
      return `${screenSizes.large * (1 - paddingInPercent)}px`
    } else if (bp.md) {
      return `${screenSizes.medium * (1 - paddingInPercent)}px`
    } else if (bp.sm) {
      return `${screenSizes.small * (1 - paddingInPercent)}px`
    } else {
      return '100%'
    }
  }

  function getMaxWithBySize() {
    const size = getSize()
    switch (size) {
      case 'xs':
        if (!bp.sm) {
          return '100%'
        } else {
          return getMaxWithValue()
        }
      case 'sm':
        if (bp.sm) {
          return getMaxWithValue()
        } else {
          return '100%'
        }
      case 'md':
        if (bp.md) {
          return getMaxWithValue()
        } else {
          return '100%'
        }
      case 'lg':
        if (bp.lg) {
          return getMaxWithValue()
        } else {
          return '100%'
        }
      case 'xl':
        if (bp.xl) {
          return getMaxWithValue()
        } else {
          return '100%'
        }
      case 'fluid':
        return '100%'
    }
  }

  function extendCssStyle(): React.CSSProperties {
    if (style) {
      const { maxWidth, flexGrow, ...rest } = style
      return {
        maxWidth: getMaxWithBySize(),
        flexGrow: 1,
        ...rest
      }
    } else {
      return {
        maxWidth: getMaxWithBySize(),
        flexGrow: 1
      }
    }
  }

  return (
    <div
      ref={ref}
      className={clsx([className, 'm-auto'])}
      style={extendCssStyle()}
      {...restProps}
    >
      {props.children}
    </div>
  )
})

export default Container
