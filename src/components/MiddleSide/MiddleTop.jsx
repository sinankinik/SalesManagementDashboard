import React from 'react'

import searchIcon from '../../assets/middle/search.png'
import profilePicture from '../../assets/middle/pp.png'
import arrow from '../../assets/middle/arrow.svg'
import alert from '../../assets/middle/alert.svg'

const MiddleTop = () => {
    return (
        <div className='flex'>
            <div className='flex w-[504px] h-[44px] mt-[17px] ml-[27px] mr-3.5 mb-[23px]'>
                <input type="text" className='w-[504px] h-11 rounded-lg bg-secondary font-inter text-xs font-medium pl-9' placeholder='Search here...' style={{
                    backgroundImage: `url(${searchIcon})`,
                    backgroundPosition: '17px center',
                    backgroundRepeat: 'no-repeat',
                }} />
            </div>
            <div className='flex items-center justify-end w-[237.95px] h-[44px] mt-[17px] mb-[23px] mr-[200px]'>
                <img src={alert} alt="" className='w-[14.89px] h-[16.79px] mr-4' />
                <img src={profilePicture} alt="" className='w-[29px] h-[29px] mr-4' />
                <img src={arrow} alt="" className='w-1.5 h-3' />

            </div>
        </div>
    )
}

export default MiddleTop