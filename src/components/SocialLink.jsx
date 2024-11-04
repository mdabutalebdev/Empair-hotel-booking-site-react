import React from 'react'
import { Link } from 'react-router-dom'

function SocialLink({classname}) {
  return (
    <div className={`${classname}`}>
        <div className="flex gap-2 font-poppins text-2xl ">
           <Link className='font-poppins text-2xl '>Linkedin</Link>
           /
           <Link className='font-poppins text-2xl '>Facebook</Link> 
           /
           <Link className='font-poppins text-2xl '>Instagram</Link> 
        </div>

    </div>
  )
}

export default SocialLink