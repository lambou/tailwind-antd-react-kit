import Card, { CardProps } from 'antd/lib/card'
import React from 'react'
import FlexSpace from '../../disposition/FlexSpace'

export declare type CCardProps = CardProps & {
  titleIcon?: React.ReactNode,
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
          <FlexSpace items="center" justify="start">
            {titleIcon}
            <span className='flex-auto'>{title}</span>
            {titleSuffix}
          </FlexSpace>
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
