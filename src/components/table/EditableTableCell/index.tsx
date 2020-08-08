import React, { useState } from 'react'
import { Form, Popconfirm } from 'antd'
import PropTypes from 'prop-types'
import CustomSpace from '../../disposition/FlexSpace'
import { EditOutlined } from '@ant-design/icons'
import { Store } from 'antd/lib/form/interface'

export declare type EditableTableCellProps = React.HTMLAttributes<
  HTMLDivElement
> & {
  content: React.ReactNode
  onSubmit?: (values: Store) => void | Promise<void>
}

const EditableTableCell = React.forwardRef<
  HTMLDivElement,
  EditableTableCellProps
>((props, ref) => {
  // explode props
  const { content, onSubmit, children, ...propsRest } = props

  const [editMode, setEditMode] = useState(false)

  return (
    <div ref={ref} {...propsRest}>
      <Popconfirm
        icon={<EditOutlined className='text-lg text-blue-500' />}
        placement='topLeft'
        onCancel={() => {
          setEditMode(false)
        }}
        okButtonProps={{
          className: 'rounded-full'
        }}
        cancelButtonProps={{ className: 'rounded-full' }}
        okText='Save'
        title={
          <Form
            layout='vertical'
            onFinish={(values) => {
              if (onSubmit) onSubmit(values)
            }}
          >
            {children}
          </Form>
        }
        visible={editMode}
      >
        <CustomSpace>
          {content}
          {!editMode && (
            <EditOutlined
              className='cursor-pointer'
              onClick={() => {
                setEditMode(true)
              }}
            />
          )}
        </CustomSpace>
      </Popconfirm>
    </div>
  )
})

EditableTableCell.propTypes = {
  children: PropTypes.element.isRequired
}

export default EditableTableCell
