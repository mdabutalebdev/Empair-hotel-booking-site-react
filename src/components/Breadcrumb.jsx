import { Breadcrumbs } from '@material-tailwind/react'
import React from 'react'
import { Link } from 'react-router-dom'
import { FaChevronRight } from "react-icons/fa";

function Breadcrumb({className}) {
  return (
    <Breadcrumbs separator={<FaChevronRight/>} className={`bg-white ${className}`} >
        <Link className='font-poppins font-medium text-[#99A3AD] text-base' >Destination</Link>
        <Link className='font-poppins font-medium text-[#99A3AD] text-base' >Portugal</Link>
        <Link className='font-poppins font-medium text-[#99A3AD] text-base' >Lagos</Link>
    </Breadcrumbs>
  )
}

export default Breadcrumb