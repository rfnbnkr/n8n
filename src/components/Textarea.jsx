import React from 'react'

export function Textarea({
  value,
  onChange,
  variant = 'primary',
  disabled = false,
  placeholder = '',
  rows = 4,
  className,
  ...props
}) {
  const variantStyles = {
    primary:
      'border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500',
    secondary:
      'border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-gray-500 focus:border-gray-500',
    danger:
      'border border-red-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-red-500 focus:border-red-500',
    ghost:
      'border-transparent rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500',
  }

  return (
    <textarea
      className={
        `w-full ${variantStyles[variant]} disabled:opacity-50 disabled:cursor-not-allowed ${className ?? ''}`
      }
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      rows={rows}
      disabled={disabled}
      {...props}
    />
  )
}

export default Textarea