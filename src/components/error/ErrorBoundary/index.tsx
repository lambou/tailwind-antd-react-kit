import React from 'react'
import clsx from 'clsx'
import { FrownOutlined, BackwardOutlined } from '@ant-design/icons'
import { CButton } from '../../button'
import { FlexSpace } from '../../disposition'
import { ButtonProps } from 'antd/lib/button'

export declare type ErrorBoundaryProps = {
  icon?: React.ExoticComponent<any>
  iconClassName?: string
  title?: React.ReactNode
  titleClassName?: string
  description?: React.ReactNode
  descriptionClassName?: string
  button?: React.ReactNode
  buttonProps?: ButtonProps
  buttonText?: React.ReactNode
  ignoreButton?: boolean
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
    ignoreButton: false
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
      description,
      buttonProps,
      buttonText,
      button,
      ignoreButton,
      iconClassName,
      titleClassName,
      descriptionClassName
    } = this.props
    const { type, className, ...buttonPropsRest } = buttonProps ?? {}

    if (this.state.hasError) {
      // if the hasError state boolean is true, it returns this to tell the user an error has occurred
      return renderContent ? (
        renderContent(this.state.error, this.state.info)
      ) : (
        <FlexSpace
          items='center'
          justify='center'
          className={clsx(['w-screen h-screen'])}
        >
          <FlexSpace direction='vertical' items='center' justify='center'>
            {React.createElement(icon ?? FrownOutlined, {
              className: clsx(['text-2xl', iconClassName])
            })}
            <span className={clsx([titleClassName, 'font-extrabold text-lg'])}>
              {title ??
                'Sorry! Something went wrong while displaying this view'}
            </span>
            <span
              className={clsx([descriptionClassName, 'text-base font-thin'])}
            >
              {description ??
                'Brace yourself till our technical team take care of the problem. You may also refresh this page or try again later please.'}
            </span>
            {!ignoreButton && (
              <div className='pt-4'>
                {button ?? (
                  <CButton
                    type={type ?? 'primary'}
                    className={clsx(['rounded-full', className])}
                    {...buttonPropsRest}
                  >
                    {buttonText ?? (
                      <FlexSpace items='center'>
                        <BackwardOutlined /> <span>Go to home page</span>
                      </FlexSpace>
                    )}
                  </CButton>
                )}
              </div>
            )}
          </FlexSpace>
        </FlexSpace>
      )
    } else {
      // if there is no error the children components are returned so there are rendered.
      return this.props.children
    }
  }
}
