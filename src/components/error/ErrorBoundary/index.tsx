import React from 'react'
import clsx from 'clsx'
import { FrownOutlined, ArrowLeftOutlined } from '@ant-design/icons'
import { CButton } from '../../button'
import { FlexSpace, FlexSpaceProps } from '../../disposition'
import { ButtonProps } from 'antd/lib/button'

export declare type ErrorBoundaryProps = Omit<FlexSpaceProps, 'title'> & {
  icon?: React.ExoticComponent<any>
  iconClassName?: string
  title?: React.ReactNode
  htmlTitle?: string
  titleClassName?: string
  description?: React.ReactNode
  descriptionClassName?: string
  button?: React.ReactNode
  buttonProps?: ButtonProps
  buttonText?: React.ReactNode
  ignoreButton?: boolean
  mode?: 'replace' | 'overlay'
  bgOpacity?: number | string
  renderContent?: (error: any, info: any) => React.ReactNode
}

declare type ErrorBoundaryState = {
  hasError: boolean
  error?: any
  info?: any
}

export default class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  static defaultProps = {
    ignoreButton: false,
    mode: 'replace'
  }

  constructor(props: ErrorBoundaryProps) {
    super(props)
    this.state = {
      // checks if an error has occured in its children.
      hasError: false
    }
  }
  componentDidCatch(err: any, info: any) {
    // set the the hasError state to true so on the next render it will display the `<div>Error occured.</div>` in the DOM.
    this.setState({ hasError: true, error: err, info: info })
  }
  render() {
    // explode props
    const {
      renderContent,
      icon,
      title,
      htmlTitle,
      description,
      buttonProps,
      buttonText,
      button,
      ignoreButton,
      iconClassName,
      titleClassName,
      descriptionClassName,
      mode,
      style,
      items,
      justify,
      className: parentClassName,
      bgOpacity,
      ...propsRest
    } = this.props

    // button props explode
    const { type, className, ...buttonPropsRest } = buttonProps ?? {}

    // export error component props
    const { backdropFilter, ...styleRest } = style ?? {}

    return (
      <React.Fragment>
        {this.state.hasError ? (
          renderContent ? (
            renderContent(this.state.error, this.state.info)
          ) : (
            <FlexSpace
              title={htmlTitle}
              items={items ?? 'center'}
              justify={justify ?? 'center'}
              className={clsx([
                parentClassName,
                'w-screen h-screen',
                { 'absolute z-10 bg-white': mode === 'overlay' }
              ])}
              {...propsRest}
              style={
                {
                  backdropFilter:
                    backdropFilter ?? mode === 'overlay'
                      ? 'blur(2.5px)'
                      : undefined,
                  '--bg-opacity': bgOpacity ?? 0.83,
                  ...styleRest
                } as any
              }
            >
              <FlexSpace direction='vertical' items='center' justify='center'>
                {React.createElement(icon ?? FrownOutlined, {
                  className: clsx(['text-5xl', iconClassName])
                })}
                <span className={clsx([titleClassName, 'font-bold text-lg'])}>
                  {title ??
                    'Sorry! Something went wrong while displaying this view'}
                </span>
                <span
                  className={clsx([
                    descriptionClassName,
                    'text-base font-thin'
                  ])}
                >
                  {description ??
                    'Brace yourself till our technical team take care of the problem. You may also refresh this page or try again later please.'}
                </span>
                {!ignoreButton && (
                  <div className='pt-4'>
                    {button ?? (
                      <CButton
                        type={type ?? 'primary'}
                        className={clsx(['rounded-full capitalize', className])}
                        {...buttonPropsRest}
                      >
                        {buttonText ?? (
                          <FlexSpace items='center'>
                            <ArrowLeftOutlined /> <span>Go to home page</span>
                          </FlexSpace>
                        )}
                      </CButton>
                    )}
                  </div>
                )}
              </FlexSpace>
            </FlexSpace>
          )
        ) : undefined}
        {((this.state.hasError && mode === 'overlay') ||
          !this.state.hasError) &&
          this.props.children}
      </React.Fragment>
    )
  }
}
