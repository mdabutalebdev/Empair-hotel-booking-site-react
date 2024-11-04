import React from 'react'
import cn from '../lib/cn'

function Flex({children, className}) {
  return (
    <div className={cn("flex", className)}>{children}</div>
  )
}

export default Flex