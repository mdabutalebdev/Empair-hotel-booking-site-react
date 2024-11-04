import React from 'react'

const Heading = ({text,className}) => {
  return (
    <h2 className={`font-poppins text-primary font-bold text-[40px] ${className}`}>{text}</h2>
  )
}

export default Heading