import React from 'react'
import Menu from './Menu/Menu'
import MiddleSide from './MiddleSide/MiddleSide'

const MainLayout = () => {
    return (
        <div className="flex justify-center bg-main-bg h-full w-full py-[43px]">
            <div className='bg-primary w-[961px] h-[815px] rounded-3xl'>
                <div className='flex'>
                    <Menu />
                    <MiddleSide />
                </div>
            </div>
        </div>
    )
}

export default MainLayout