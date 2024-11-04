import React from 'react'
import cn from "../lib/cn.js"

function Subheading({className,text}) {
  return (
    <h3 className={cn('font-poppins text-primary text-2xl',className)}>{text}</h3>
  )
}

export default Subheading