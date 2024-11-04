import React from 'react'
import tick from "../../assets/icons/Tick.svg"
import cross from "../../assets/icons/Cross.svg"
import Image from '../Image'
import Paragraph from '../Paragraph'

function InclusionsList({className}) {
    
    const data =[
        {
            icon: tick,
            list: 'All breakfasts, 4 packed lunches, and 6 dinners' 
        },
        {
            icon: tick,
            list: 'All Fees and Taxes' 
        },
        {
            icon: tick,
            list: 'All necessary documents and paperwork (TIMS cards and permit)' 
        },
        {
            icon: tick,
            list: 'Highly experienced Government Registered guide' 
        },
        {
            icon: tick,
            list: 'First aid box' 
        },
        {
            icon: tick,
            list: 'Farewell dinner' 
        },
        {
            icon: cross,
            list: 'Alcoholic Beverages' 
        },
        {
            icon: cross,
            list: 'Portugal visa fee' 
        },
        {
            icon: cross,
            list: 'Personal expenses (Phone calls, bar bills, battery recharge, laundry)' 
        },
        {
            icon: cross,
            list: 'Tipping and donations' 
        }
    ]
  return (
    <div className={`${className}`}>
        {
            data.map(({icon,list})=>(
                <div className='flex gap-3 my-4'>
                    <Image src={icon}/>
                    <Paragraph text={list} className={`text-primary text-base`}/>
                </div>
            ))
        }
    </div>
  )
}

export default InclusionsList