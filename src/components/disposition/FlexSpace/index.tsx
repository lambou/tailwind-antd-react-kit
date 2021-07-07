import React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import useBreakpoint from 'antd/lib/grid/hooks/useBreakpoint'
import ReactIs from 'react-is'

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
          return bp.xs === true
        case 'sm':
          return bp.sm === false
        case 'md':
          return bp.md === false
        case 'lg':
          return bp.lg === false
        case 'xl':
          return bp.xl === false
        case 'xxl':
          return bp.xxl === false
        default:
          return undefined
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
      return isBreaking() === true || (!!direction && direction === 'vertical')
    }

    const modifyChildren = (
      child: any,
      index: number,
      childrenLengh: number
    ) => {
      /**
       * Check if we can apply margin
       */
      const canApplyMargin = () => {
        return childrenLengh !== 1 && index !== childrenLengh - 1
      }

      if (child) {
        /**
         * Update styles
         */
        const { style, className, ...propsRest } = child.props ?? {}

        // new style
        const {
          marginRight,
          marginBottom,
          ...newStyleRest
        }: React.CSSProperties = style ?? {}

        let newStyle: React.CSSProperties = {
          ...newStyleRest
        }

        // horizontal style
        if (!isVertical() && canApplyMargin()) {
          newStyle = {
            ...newStyle,
            marginRight: getSize()
          }
        }

        // vertical style
        if (isVertical() && canApplyMargin()) {
          newStyle = {
            ...newStyle,
            marginBottom: marginY ? getSize() : undefined
          }
        }

        /**
         * Check if it is a react element
         */
        if (ReactIs.isElement(child)) {
          return ReactIs.isFragment(child)
            ? child
            : React.cloneElement(child, {
                className: clsx([
                  className,
                  itemClass,
                  isBreaking() && index > 0 && index < childrenLengh - 1
                    ? breakpointItemClass
                    : undefined
                ]),
                style: newStyle,
                ...propsRest
              })
        } else {
          return <React.Fragment>{child}</React.Fragment>
        }
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
      'div',
      {
        ref: ref,
        className: clsx([
          className,
          inline === true ? 'inline-flex' : 'flex',
          items && `items-${items}`,
          justify && `justify-${justify}`,
          isVertical() ? 'flex-col' : 'flex-row',
          { 'flex-wrap': wrap }
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
  marginY: false,
  wrap: false
}

export default FlexSpace
