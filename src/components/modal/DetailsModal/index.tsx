import React from 'react'
import CustomSpace from '../../disposition/FlexSpace'
import { EyeOutlined } from '@ant-design/icons'
import styled from 'styled-components'
import { ModalProps } from 'antd/lib/modal'
import { Modal, Button } from 'antd'
const tw = require("twin.macro");

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
  titleIcon?: React.ForwardRefExoticComponent<any>
}
const DetailsModal: React.FC<DetailsModalProps> = (props) => {
  // explose props
  const {
    title,
    titleIcon,
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
          {React.createElement(titleIcon ?? EyeOutlined, {
            className: 'text-xl text-blue-500'
          })}
          <span className='font-semibold text-xl'>{title}</span>
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
              Ok
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
