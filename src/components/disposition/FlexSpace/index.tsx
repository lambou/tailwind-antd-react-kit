import React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import useBreakpoint from 'antd/lib/grid/hooks/useBreakpoint'

export declare type FlexSpaceProps = React.HTMLAttributes<HTMLDivElement> & {
  inline?: boolean
  size?: 'large' | 'middle' | 'small'
  items?: 'start' | 'end' | 'center' | 'baseline' | 'stretch'
  justify?: 'start' | 'end' | 'center' | 'between' | 'evently' | 'around'
  wrap?: boolean
  direction?: 'horizontal' | 'vertical'
  breakpoint?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'
  itemClass?: string
  breakpointItemClass?: string
  marginY?: boolean
}

const FlexSpace = React.forwardRef<HTMLDivElement, FlexSpaceProps>(
  (props, ref) => {
    // split props
    const {
      items,
      justify,
      inline,
      className,
      children,
      size,
      wrap,
      direction,
      breakpoint,
      itemClass,
      breakpointItemClass,
      marginY,
      ...rest
    } = props

    // breakpoint
    const bp = useBreakpoint()

    const isBreaking = () => {
      switch (breakpoint) {
        case 'xs':
          return !bp.xs
        case 'sm':
          return !bp.sm
        case 'md':
          return !bp.md
        case 'lg':
          return !bp.lg
        case 'xl':
          return !bp.xl
        case 'xxl':
          return !bp.xxl
        default:
          return false
      }
    }

    // get size
    const getSize = () => {
      const current = size || 'small'
      switch (current) {
        case 'small':
          return '8px'
        case 'middle':
          return '12px'
        case 'large':
          return '16px'
      }
    }

    /**
     * Align items vertically
     */
    const isVertical = () => {
      return isBreaking() || (direction && direction === 'vertical')
    }

    /**
     * Align items horizontally
     */
    const isHorizontal = () => {
      return !isBreaking() || direction === 'horizontal'
    }

    const modifyChildren = (
      child: any,
      index: number,
      childrenLengh: number
    ) => {
      if (child) {
        const { style } = child.props ?? {}

        // new style
        const {
          marginRight,
          marginBottom,
          ...newStyleRest
        }: React.CSSProperties = style ?? {}

        let newStyle: React.CSSProperties | undefined = undefined

        // horizontal style
        if (isHorizontal()) {
          newStyle = {
            ...newStyleRest,
            marginRight: getSize()
          }
        }

        // vertical style
        if (isVertical()) {
          newStyle = {
            ...newStyleRest,
            marginBottom: marginY ? getSize() : 0
          }
        }

        return (
          <div
            className={clsx([
              child.props?.className,
              itemClass,
              isBreaking() ? breakpointItemClass : undefined,
              'inline-flex items-center'
            ])}
            key={index}
            style={
              childrenLengh !== 1 && index !== childrenLengh - 1
                ? {
                    ...newStyle
                  }
                : style
            }
          >
            {child}
          </div>
        )
      } else {
        return React.createElement('div', null, null)
      }
    }

    const safeList = (list: any) => {
      if (Array.isArray(list)) {
        const ar = list as any[]
        return ar.filter((item) => !!item)
      } else {
        return [list]
      }
    }

    return React.createElement(
      typeof HTMLDivElement,
      {
        ref: ref,
        className: clsx([
          className,
          inline === true ? 'inline-flex' : 'flex',
          items && `items-${items}`,
          justify && `justify-${justify}`,
          {
            'flex-col': isVertical()
          },
          { 'flex-row': isHorizontal() },
          { 'flex-wrap': wrap ?? true }
        ]),
        ...rest
      },
      React.Children.map(safeList(children), (child, index) =>
        modifyChildren(child, index, safeList(children).length)
      )
    )
  }
)

FlexSpace.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.element])
}

FlexSpace.defaultProps = {
  marginY: false
}

export default FlexSpace
