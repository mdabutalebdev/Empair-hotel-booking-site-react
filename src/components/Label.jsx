import React from 'react'

function Label({className, text}) {
  return (
    <h4 className={`text-[#546179] font-poppins font-medium text-base ${className}`}>
        {text}
    </h4>
  )
}

export default Label