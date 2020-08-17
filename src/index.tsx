import React from 'react'
import styles from './styles.module.css'
import clsx from 'clsx'

declare type Props = React.HTMLAttributes<HTMLDivElement> & {
  text: string
}

export const ExampleComponent: React.FC<Props> = React.forwardRef<
  HTMLDivElement,
  Props
>((props, ref) => {
  const { text, className, ...rest } = props
  return (
    <div ref={ref} className={clsx([className, styles.test])} {...rest}>
      Example Component: {text}
    </div>
  )
})

export * from './components'
export * from './helpers'
export * from './interfaces'
