import React from 'react'
import { FlexSpace, FlexSpaceProps } from '../../disposition'
import { Avatar } from 'antd'
import { PictureOutlined, UserOutlined } from '@ant-design/icons'
import clsx from 'clsx'
import { AvatarProps } from 'antd/lib/avatar'

export declare type PersonProps = FlexSpaceProps & {
  pictureSrc?: string
  name: React.ReactNode
  description?: React.ReactNode
  enterprise?: boolean
  avatarProps?: AvatarProps
  contentProps?: Omit<FlexSpaceProps, 'direction'>
  suffix?: React.ReactNode
}

const Person: React.FC<PersonProps> = React.forwardRef<
  HTMLDivElement,
  PersonProps
>((props, ref) => {
  // deconstruct props
  const {
    className,
    pictureSrc,
    name,
    description,
    enterprise,
    avatarProps,
    contentProps,
    suffix,
    ...propsRest
  } = props

  // deconstruct avatarProps
  const {
    className: avatarClassName,
    icon,
    size,
    shape,
    src,
    ...avatarPropsRest
  } = avatarProps ?? {}

  // deconstruct contentProps
  const { className: contentClassName, ...contentPropsRest } =
    contentProps ?? {}

  return (
    <FlexSpace ref={ref} className={clsx([className])} {...propsRest}>
      <Avatar
        className={clsx(['flex items-center justify-center', avatarClassName])}
        src={src ?? pictureSrc}
        size={size ?? 'large'}
        shape={shape ?? enterprise ? 'square' : 'circle'}
        icon={icon ?? (enterprise ? <PictureOutlined /> : <UserOutlined />)}
        {...avatarPropsRest}
      />
      <FlexSpace
        direction='vertical'
        className={clsx(['leading-tight flex-auto', contentClassName])}
        {...contentPropsRest}
      >
        <span className='font-bold truncate'>{name}</span>
        {!!description && <span className='break-all'>{description}</span>}
      </FlexSpace>
      {suffix}
    </FlexSpace>
  )
})

Person.defaultProps = {
  enterprise: false
}

export default Person
