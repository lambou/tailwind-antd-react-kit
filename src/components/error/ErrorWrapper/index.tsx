import React, { useEffect, useState } from 'react'
import { Button } from 'antd'
import {
  WarningOutlined,
  LeftOutlined,
  ReloadOutlined
} from '@ant-design/icons'
import { Link } from 'react-router-dom'
import clsx from 'clsx'
import IError from '../../../interfaces/IError'
import Spin, { SpinProps } from 'antd/lib/spin'

export type ErrorWrapperProps = React.HTMLAttributes<HTMLDivElement> & {
  errors: IError[]
  loading?: boolean
  spinProps?: Omit<SpinProps, 'spinning'>
  mode?: 'replace' | 'overlay'
  overlayClassName?: string
  refreshButtonText?: React.ReactNode
  goToHomePageButtonText?: React.ReactNode
  renderError?: (errors: IError[]) => React.ReactNode
}

const ErrorWrapper = React.forwardRef<HTMLDivElement, ErrorWrapperProps>(
  (props, ref) => {
    // explode props
    const {
      errors,
      renderError,
      className,
      overlayClassName,
      loading,
      spinProps,
      mode,
      refreshButtonText,
      goToHomePageButtonText,
      style,
      ...propsRest
    } = props

    // explode style
    const { backdropFilter, ...styleRest } = style ?? {}

    const [internalErrors, setInternalErrors] = useState(errors)

    function getMessage(error: IError) {
      if (error.message) {
        return error.message
      } else {
        if (error.httpError?.response) {
          return 'The application encountered a problem during processing. Please refresh the page.'
        } else {
          return 'Check your internet connection please.'
        }
      }
    }

    function isInternetAccessProblem(values: IError[]) {
      let found = false
      for (const error of values) {
        if (error.httpError?.response) {
          return false
        } else {
          found = true
          break
        }
      }
      return found
    }

    useEffect(() => {
      setInternalErrors(props.errors)
    }, [props.errors])

    return (
      <Spin spinning={loading} {...spinProps}>
        <div className='relative'>
          {errors.length !== 0 && (
            <div
              ref={ref}
              className={clsx([
                className,
                'flex items-center justify-center w-full h-full p-8',
                mode === 'overlay'
                  ? ['absolute bg-white bg-opacity-75', overlayClassName]
                  : ''
              ])}
              style={{
                backdropFilter: backdropFilter ?? 'blur(2.5px)',
                ...styleRest
              }}
              {...propsRest}
            >
              {renderError ? (
                renderError(internalErrors)
              ) : (
                <div className='flex flex-col items-center justify-center relative'>
                  <WarningOutlined
                    className='text-red-500'
                    style={{ fontSize: '4rem' }}
                  />
                  <div className='text-2xl font-bold text-red-500'>
                    {isInternetAccessProblem(errors)
                      ? 'No internet access'
                      : 'Something went wrong!'}
                  </div>

                  {internalErrors.map((error, index) => {
                    return (
                      <div
                        key={index}
                        id={index.toString()}
                        className='flex items-center flex-col'
                      >
                        <div className='text-lg py-3'>{getMessage(error)}</div>
                        {error.refreshCallback ? (
                          <Button
                            icon={<ReloadOutlined />}
                            onClick={() => {
                              // call refresh callback
                              if (error.reloadPage === true) {
                                window.location.reload()
                              } else {
                                if (error.refreshCallback)
                                  error.refreshCallback()
                              }
                            }}
                            className='rounded-md'
                            type='primary'
                          >
                            {refreshButtonText ?? 'Refresh'}
                          </Button>
                        ) : error.type === 'INTERNAL' ? (
                          <Link to='/'>
                            <Button
                              icon={<LeftOutlined />}
                              onClick={() => {}}
                              className='rounded-md flex items-center justify-center'
                              type='primary'
                            >
                              {goToHomePageButtonText ?? 'Back to home page'}
                            </Button>
                          </Link>
                        ) : (
                          <Button
                            icon={<ReloadOutlined />}
                            onClick={() => {
                              window.location.reload()
                            }}
                            className='rounded-md'
                            type='primary'
                          >
                            {refreshButtonText ?? 'Refresh'}
                          </Button>
                        )}
                      </div>
                    )
                  })}
                </div>
              )}
            </div>
          )}
          {!(errors.length !== 0 && mode === 'replace') &&
            React.createElement(
              'div',
              {
                className: mode === 'overlay' ? 'pointer-events-none' : ''
              },
              props.children
            )}
        </div>
      </Spin>
    )
  }
)

ErrorWrapper.defaultProps = {
  mode: 'replace',
  loading: false
}

export default ErrorWrapper
