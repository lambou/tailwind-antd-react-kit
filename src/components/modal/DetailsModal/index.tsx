import { Button, Modal } from 'antd'
import { ModalProps } from 'antd/lib/modal'
import React from 'react'
import styled from 'styled-components'
import CustomSpace from '../../disposition/FlexSpace'
const tw = require('twin.macro')

const SModal = styled(Modal)`
  .ant-modal-content {
    ${tw`rounded-lg!`}
  }

  .ant-modal-content .ant-modal-header {
    ${tw`rounded-t-lg!`}
  }
`

export declare type DetailsModalProps = ModalProps & {
  title?: React.ReactNode
  titleClassName?: string
  titleIcon?: React.ComponentType<any>
  titleIconClassName?: string
}
const DetailsModal: React.FC<DetailsModalProps> = (props) => {
  // explose props
  const {
    title,
    titleClassName,
    titleIcon,
    titleIconClassName,
    okText,
    centered,
    keyboard,
    children,
    footer,
    ...propsRest
  } = props
  return (
    <SModal
      centered={centered ?? true}
      keyboard={keyboard ?? false}
      title={
        <CustomSpace className='items-center'>
          {titleIcon &&
            React.createElement(titleIcon, {
              className: titleIconClassName
            })}
          <span className={titleClassName}>{title}</span>
        </CustomSpace>
      }
      footer={
        footer ?? (
          <div>
            <Button
              onClick={props.onOk}
              className='rounded-full'
              type='primary'
            >
              {okText ?? 'Ok'}
            </Button>
          </div>
        )
      }
      {...propsRest}
    >
      {children}
    </SModal>
  )
}

export default DetailsModal
