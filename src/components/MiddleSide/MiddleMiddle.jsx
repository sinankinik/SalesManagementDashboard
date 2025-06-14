import React from 'react'

import todays1 from '../../assets/middle/todays1.svg'
import todays2 from '../../assets/middle/todays2.svg'
import todays3 from '../../assets/middle/todays3.svg'
import todays4 from '../../assets/middle/todays4.svg'

const MiddleMiddle = () => {
    return (
        <div className='flex pl-[28.5px] mb-3.5'>
            <div className='w-[504px] h-[201px] bg-secondary rounded-lg mr-3.5 py-5 px-3.5'>
                <h2 className='font-inter font-semibold text-[15px] text-white mb-[5px]'>Today’s Sales</h2>
                <h3 className='font-inter font-medium text-[10px] text-[#A0A0A0]'>Sales Summary</h3>
                <div className='flex'>
                    <div className='w-[104px] h-[107px] bg-primary font-inter rounded-[10px] mt-5 mr-5 pt-[11.08px] pb-[9px] px-3'>
                        <img src={todays1} alt="" className='w-[19.95px] h-[23.47px]' />
                        <h2 className='font-semibold text-[15px] text-white mb-1 mt-2'>$5k</h2>
                        <h3 className='font-medium text-[10px] text-white mb-1'>Total Sales</h3>
                        <h4 className='font-medium text-[7px] text-[#FEB95A]'>+10% from yesterday</h4>
                    </div>
                    <div className='w-[104px] h-[107px] bg-primary font-inter rounded-[10px] mt-5 mr-5 pt-[11.08px] pb-[9px] px-3'>
                        <img src={todays2} alt="" className='w-[19.95px] h-[23.47px]' />
                        <h2 className='font-semibold text-[15px] text-white mb-1 mt-2'>500</h2>
                        <h3 className='font-medium text-[10px] text-white mb-1'>Total Order</h3>
                        <h4 className='font-medium text-[7px] text-[#A9DFD8]'>+8% from yesterday</h4>
                    </div>
                    <div className='w-[104px] h-[107px] bg-primary font-inter rounded-[10px] mt-5 mr-5 pt-[11.08px] pb-[9px] px-3'>
                        <img src={todays3} alt="" className='w-[19.95px] h-[23.47px]' />
                        <h2 className='font-semibold text-[15px] text-white mb-1 mt-2'>9</h2>
                        <h3 className='font-medium text-[10px] text-white mb-1'>Product Sold</h3>
                        <h4 className='font-medium text-[7px] text-[#F2C8ED]'>+2% from yesterday</h4>
                    </div>
                    <div className='w-[104px] h-[107px] bg-primary font-inter rounded-[10px] mt-5 pt-[11.08px] pb-[9px] px-3'>
                        <img src={todays4} alt="" className='w-[19.95px] h-[23.47px]' />
                        <h2 className='font-semibold text-[15px] text-white mb-1 mt-2'>12</h2>
                        <h3 className='font-medium text-[10px] text-white mb-1'>New Customer</h3>
                        <h4 className='font-medium text-[7px] text-[#20AEF3]'>+3% from yesterday</h4>
                    </div>
                </div>
            </div>
            <div className='w-[237.95px] h-[201px] bg-secondary rounded-lg'>
                <div className='py-[9px] px-3.5 border-b border-gray-700 h-[161px]'>
                    <h2 className='font-inter font-semibold text-[15px] text-white mb-[5px]'>Level</h2>
                    <div className='flex items-end justify-center mt-[22px] mb-[13px]'>
                        <div className='flex items-end w-[13px] h-[87px] bg-[#2B2B36] rounded-t mr-5'>
                            <div className='w-[13px] h-[44px] bg-[#A9DFD8] rounded-t'></div>
                        </div>
                        <div className='flex items-end w-[13px] h-[107px] bg-[#2B2B36] rounded-t mr-5'>
                            <div className='w-[13px] h-[55px] bg-[#A9DFD8] rounded-t'></div>
                        </div>
                        <div className='flex items-end w-[13px] h-[87px] bg-[#2B2B36] rounded-t mr-5'>
                            <div className='w-[13px] h-[36px] bg-[#A9DFD8] rounded-t'></div>
                        </div>
                        <div className='flex items-end w-[13px] h-[79px] bg-[#2B2B36] rounded-t mr-5'>
                            <div className='w-[13px] h-[22px] bg-[#A9DFD8] rounded-t'></div>
                        </div>
                        <div className='flex items-end w-[13px] h-[61px] bg-[#2B2B36] rounded-t mr-5'>
                            <div className='w-[13px] h-[32px] bg-[#A9DFD8] rounded-t'></div>
                        </div>
                        <div className='flex items-end w-[13px] h-[66px] bg-[#2B2B36] rounded-t'>
                            <div className='w-[13px] h-[44px] bg-[#A9DFD8] rounded-t'></div>
                        </div>
                    </div>
                </div>
                <div className='flex items-center font-inter font-medium text-[10px] text-[#A0A0A0] mt-3'>
                    <div className='flex items-center border-r border-gray-700 pr-[30.9px] '>
                        <div className='w-2 h-2 rounded-full bg-third mr-3 ml-[33.57px]'></div>
                        <h4>Volume</h4>
                    </div>
                    <div className='w-2 h-2 rounded-full bg-primary ml-[28px] mr-3'></div>
                    <h4>Service</h4>
                </div>
            </div>
        </div>
    )
}

export default MiddleMiddle