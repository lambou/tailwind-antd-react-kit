import { Card } from 'antd'
import { CardTabListType } from 'antd/lib/card'
import clsx from 'clsx'
import React, { useEffect, useState } from 'react'
import { FlexSpace } from '../../disposition'

export declare type PageHeaderWrapperProps = React.HTMLAttributes<HTMLDivElement> & {
  breadcrumb?: React.ReactNode
  title?: React.ReactNode
  titleExtra?: React.ReactNode
  content?: React.ReactNode
  contentExtra?: React.ReactNode
  tabList?: CardTabListType[]
  onTabChange?: (key: string) => void
  activeTabKey?: string
  defaultActiveTabKey?: string
}

const PageHeaderWrapper: React.FC<PageHeaderWrapperProps> = React.forwardRef<
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
    activeTabKey,
    defaultActiveTabKey,
    children,
    ...propsRest
  } = props

  const [activeKey, setActiveKey] = useState<string | undefined>(activeTabKey)

  /**
   * Active tab key change
   */
  useEffect(() => {
    setActiveKey(() => activeTabKey)
    // eslint-disable-next-line
  }, [activeTabKey])

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
          <FlexSpace className='items-start pt-2'>
            <span className='text-xl font-bold'>{title}</span>
            {titleExtra}
          </FlexSpace>
        )}

        {(content || contentExtra) && (
          <FlexSpace className='items-start pt-2'>
            {content}
            {contentExtra}
          </FlexSpace>
        )}
      </div>
      <Card
        tabList={tabList}
        onTabChange={onTabChange}
        activeTabKey={activeKey}
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
