import React from 'react'
import cn from '../lib/cn'

function Button({className,text, ...restprops}) {
  return (
    <button className={ cn("bg-white text-primary rounded-3xl px-4 py-2", className)} {...restprops}>{text}</button>
  )
}

export default Button