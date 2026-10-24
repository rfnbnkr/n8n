import React from 'react'
import Button from './Button.jsx'

export function ButtonGroup({
  children,
  orientation = 'horizontal',
  className,
  ...props
}) {
  const orientationClasses = {
    horizontal: 'flex flex-col sm:flex-row gap-2',
    vertical: 'flex flex-col gap-2',
  }

  return (
    <div
      className={`rounded-md border ${orientationClasses[orientation]} ${className ?? ''}`}
      {...props}
    >
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, {
            className: child.props.className ? `${child.props.className} border-r-0 border-b-0` : 'border-r-0 border-b-0',
          })
        }
        return child
      })}
    </div>
  )
}

export default ButtonGroup