import React from 'react'
import { Card } from 'antd'
import { CardTabListType } from 'antd/lib/card'
import CustomSpace from '../../disposition/FlexSpace'
import clsx from 'clsx'

export declare type PageHeaderWrapperProps = React.HTMLAttributes<HTMLDivElement> & {
  breadcrumb?: React.ReactNode
  title?: React.ReactNode
  titleExtra?: React.ReactNode
  content?: React.ReactNode
  contentExtra?: React.ReactNode
  tabList?: CardTabListType[]
  onTabChange?: (key: string) => void
  defaultActiveTabKey?: string
}

const PageHeaderWrapper = React.forwardRef<
  HTMLDivElement,
  PageHeaderWrapperProps
>((props, ref) => {
  // explode props
  const {
    breadcrumb,
    title,
    titleExtra,
    content,
    contentExtra,
    tabList,
    onTabChange,
    defaultActiveTabKey,
    children,
    ...propsRest
  } = props

  return (
    <div ref={ref} {...propsRest}>
      <div
        className={clsx(['w-full bg-white'])}
        style={{
          paddingLeft: '24px',
          paddingRight: '24px',
          paddingBottom: !tabList ? '18px' : 0
        }}
      >
        {breadcrumb}

        {(title || titleExtra) && (
          <CustomSpace className='items-start pt-2'>
            <span className='text-xl font-bold'>{title}</span>
            {titleExtra}
          </CustomSpace>
        )}

        {(content || contentExtra) && (
          <CustomSpace className='items-start pt-2'>
            {content}
            {contentExtra}
          </CustomSpace>
        )}
      </div>
      <Card
        tabList={tabList}
        onTabChange={onTabChange}
        defaultActiveTabKey={defaultActiveTabKey}
        className='w-full bg-transparent'
        headStyle={{ background: 'white' }}
        bordered={false}
      >
        {children}
      </Card>
    </div>
  )
})

export default PageHeaderWrapper
