import React from 'react'

const SectionHead1 = ({children, className}) => {
  return (
      <h2 className={`text-3xl ${className}`}>
        {children}
      </h2>
  )
}

export default SectionHead1