import React from 'react'
import { Table } from 'antd'
import { TableProps } from 'antd/lib/table'
import styled from 'styled-components'
import tw from 'twin.macro'
import clsx from 'clsx'

const STable = styled(Table)`
  .ant-table-thead > tr > th {
    ${tw`bg-transparent border-gray-100 border-b-4`}
  }
`

export declare type CTableProps = TableProps<any> & {}

const CTable: React.FC<CTableProps> = (props) => {
  const { children, pagination, className, ...propsRest } = props
  return (
    <STable
      className={clsx([className, 'mb-6'])}
      pagination={{ ...pagination, hideOnSinglePage: true }}
      {...propsRest}
    >
      {children}
    </STable>
  )
}

export default CTable
