import React from 'react'

import earnings from "../../assets/middle/earnings.svg"
import visitors from "../../assets/middle/visitors.svg"

const MiddleBottom = () => {
    return (
        <div className='flex pl-[28.5px] mb-3.5'>
            <div className='w-[238px] h-[247px] bg-secondary rounded-lg mr-3.5 py-5 px-3.5'>
                <h2 className='font-inter font-semibold text-[15px] text-white mb-[5px]'>Earnings</h2>
                <h3 className='font-inter font-medium text-[10px] text-[#87888C] mb-2'>Total Expense</h3>
                <h2 className='font-inter font-bold text-xl text-third '>$6078.76</h2>
                <h3 className='font-inter font-medium text-[11px] text-[#87888C]'>Profit is 48% More than last</h3>
                <h3 className='font-inter font-medium text-[11px] text-[#87888C] mb-3.5'>Month</h3>
                <img src={earnings} className='ml-[18px]' />
                <div className='flex'>
                </div>
            </div>
            <div className='w-[506px] h-[247px] bg-secondary rounded-lg py-5 px-3.5'>
                <div className='flex justify-between mr-3.5'>
                    <h2 className='font-inter font-semibold text-[15px] text-white mb-6'>Visitor Insights</h2>
                    <div className='flex items-center w-[85px] h-[22px] bg-primary rounded px-2'>
                        <div className='w-[5px] h-[5px] bg-[#FCB859] rounded-full mr-1'></div>
                        <h3 className='font-inter font-medium text-[9px] text-white'>New Visitors</h3>
                    </div>
                </div>
                <img src={visitors} className='ml-3' />
            </div>
        </div>
    )
}

export default MiddleBottom