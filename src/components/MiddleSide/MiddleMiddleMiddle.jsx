import React from 'react'

import fulfilment from "../../assets/middle/fulfilment.svg"

const MiddleMiddleMiddle = () => {
    return (
        <div className='flex pl-[28.5px] mb-3.5'>
            <div className='w-[504px] h-[228px] bg-secondary rounded-lg mr-3.5 py-5'>
                <h2 className='font-inter font-semibold text-[15px] text-white mb-[5px] ml-3.5'>Top Products</h2>
                <div className='flex border-b border-gray-700 font-inter text-[#87888C] font-medium text-[10px] mt-5'>
                    <h2 className='ml-3.5 mr-[53px]'>#</h2>
                    <h2 className='mr-[122px] '>Name</h2>
                    <h2 className='mr-[137px] '>Popularity</h2>
                    <h2 className=''>Sales</h2>
                </div>
                <div className='flex items-center border-b border-gray-700 font-inter text-[#87888C] font-medium text-[10px] py-2'>
                    <h2 className='ml-3.5 mr-[48px] text-white text-[13px]'>01</h2>
                    <h2 className='mr-[53px] text-white'>Home Decore Range</h2>
                    <div className='w-[164px] h-[3px] bg-[#2B2B36] rounded-sm mr-5'>
                        <div className='w-[128px] h-[3px] bg-[#FCB859] rounded-sm'></div>
                    </div>
                    <div className='flex justify-center items-center w-[38px] h-[22px] bg-[#2B2B36] rounded-sm mr-5 border border-[#FCB859]'>
                        <h2 className='text-[#FCB859]'>46%</h2>
                    </div>
                </div>
                <div className='flex items-center  border-b border-gray-700 font-inter text-[#87888C] font-medium text-[10px]  py-2'>
                    <h2 className='ml-3.5 mr-[48px] text-white text-[13px]'>02</h2>
                    <h2 className='mr-[42px] text-white'>Disney Princess Dress</h2>
                    <div className='w-[164px] h-[3px] bg-[#2B2B36] rounded-sm mr-5'>
                        <div className='w-[102px] h-[3px] bg-[#A9DFD8] rounded-sm'></div>
                    </div>
                    <div className='flex justify-center items-center w-[38px] h-[22px] bg-[#2B2B36] rounded-sm mr-5 border border-[#A9DFD8]'>
                        <h2 className='text-[#A9DFD8]'>17%</h2>
                    </div>
                </div>
                <div className='flex items-center  border-b border-gray-700 font-inter text-[#87888C] font-medium text-[10px]  py-2'>
                    <h2 className='ml-3.5 mr-[48px] text-white text-[13px]'>03</h2>
                    <h2 className='mr-[52px] text-white'>Bathroom Essentials</h2>
                    <div className='w-[164px] h-[3px] bg-[#2B2B36] rounded-sm mr-5'>
                        <div className='w-[82px] h-[3px] bg-[#28AEF3] rounded-sm'></div>
                    </div>
                    <div className='flex justify-center items-center w-[38px] h-[22px] bg-[#2B2B36] rounded-sm mr-5 border border-[#28AEF3]'>
                        <h2 className='text-[#28AEF3]'>19%</h2>
                    </div>
                </div>
                <div className='flex items-center font-inter text-[#87888C] font-medium text-[10px]  py-2'>
                    <h2 className='ml-3.5 mr-[48px] text-white text-[13px] '>04</h2>
                    <h2 className='mr-[60px] text-white'>Apple Smartwatch</h2>
                    <div className='w-[164px] h-[3px] bg-[#2B2B36] rounded-sm mr-5'>
                        <div className='w-[50px] h-[3px] bg-[#F2C8ED] rounded-sm'></div>
                    </div>
                    <div className='flex justify-center items-center w-[38px] h-[22px] bg-[#2B2B36] rounded-sm mr-5 border border-[#F2C8ED]'>
                        <h2 className='text-[#F2C8ED]'>29%</h2>
                    </div>
                </div>
            </div>
            <div className='w-[240.95px] h-[228px] bg-secondary rounded-lg '>
                <div className='w-[240.95px] mr-3.5 py-4 border-b border-gray-700'>
                    <h2 className='font-inter font-semibold text-[15px] text-white mb-[5px] ml-3.5'>Customer Fulfilment</h2>
                    <img src={fulfilment} className='ml-3 mb-1' alt="" />
                </div>
                <div className='flex items-center  font-inter font-medium text-[10px] text-[#A0A0A0] mt-3'>
                    <div className='flex-none border-r border-gray-700'>
                        <div className='flex items-center w-[120px]'>
                            <div className='w-2 h-2 rounded-full bg-third mr-3 ml-6'></div>
                            <h4>Last Month</h4>
                        </div>
                        <h5 className='ml-12'>$4,087</h5>
                    </div>
                    <div className='flex-none'>
                        <div className='flex items-center w-[120px]'>
                            <div className='w-2 h-2 rounded-full bg-primary mr-3 ml-6'></div>
                            <h4>This Month</h4>
                        </div>
                        <h5 className='ml-12'>$5,506</h5>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MiddleMiddleMiddle