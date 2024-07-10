import React, { PropsWithChildren } from 'react'
import './HorizontalScroll.css'
import classNames from 'classnames'

type Props = {
  className?: string
}

const HorizontalScroll: React.FC<PropsWithChildren<Props>> = ({
  className,
  children,
}) => {
  return (
    <div className={classNames('horizontal-scroll', className)}>
      <div className="container">{children}</div>
    </div>
  )
}

export default HorizontalScroll
