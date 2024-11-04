import React from 'react'
import Sorting from '../Sorting'


function SearchCount({className}) {
  return (
    <div className={`w-full bg-white my-10 border rounded-3xl ps-8 py-8 pe-14 flex justify-between items-center ${className}`}>
        <h4 className='font-poppins font-medium text-[18px] text-[#212529]'>Showing 1 - 10 of 2037 results for “cultural”</h4>
        <div className='font-poppins text-[18px] text-[#546179] flex gap-10'>
            Sort by:
            <Sorting/>
        </div>
    </div>
  )
}

export default SearchCount