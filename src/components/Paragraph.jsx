import React from 'react'
import cn from '../lib/cn'

const Paragraph = ({text,className}) => {
  return (
    <p className={cn('font-poppins font-normal text-para text-xl',className)}>{text}</p>
  )
}

export default Paragraph