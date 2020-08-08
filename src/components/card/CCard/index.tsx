import React from 'react'
import Card, { CardProps } from 'antd/lib/card'
import CustomSpace from '../../disposition/FlexSpace'

export declare type CCardProps = CardProps & {
  titleIcon?: React.ForwardRefExoticComponent<any>
  titleSuffix?: React.ReactNode
}

const CCard: React.FC<CCardProps> = (props) => {
  // explode props
  const {
    title,
    titleIcon,
    titleSuffix,
    bordered,
    bodyStyle,
    children,
    headStyle,
    ...propsRest
  } = props

  const defaultBodyStyle = bodyStyle ?? {}
  const { padding, ...bodyStyleRest } = defaultBodyStyle

  const defaultHeadStyle = headStyle ?? {}
  const { border, ...headStyleRest } = defaultHeadStyle

  return (
    <Card
      title={
        (titleIcon || title || titleSuffix) && (
          <CustomSpace className='items-center justify-start'>
            {titleIcon &&
              React.createElement(titleIcon, {
                className: 'text-blue-500'
              })}
            <span className='flex-auto'>{title}</span>
            {titleSuffix}
          </CustomSpace>
        )
      }
      bordered={bordered ?? true}
      bodyStyle={{ ...bodyStyleRest, padding: padding ?? 0 }}
      headStyle={{ ...headStyleRest, border: border ?? 'none' }}
      {...propsRest}
    >
      {children}
    </Card>
  )
}

export default CCard
