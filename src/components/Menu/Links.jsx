import React from 'react'
import dashboardIcon from '../../assets/menu/dashboard.svg';
import profileIcon from '../../assets/menu/profile.svg';
import leaderBoardIcon from '../../assets/menu/leader-board.svg';
import orderIcon from '../../assets/menu/order.svg';
import productIcon from '../../assets/menu/product.svg';
import salesReportIcon from '../../assets/menu/sales-report.svg';
import messageIcon from '../../assets/menu/message.svg';
import settingsIcon from '../../assets/menu/settings.svg';
import favouriteIcon from '../../assets/menu/favourite.svg';
import historyIcon from '../../assets/menu/history.svg';
import signOutIcon from '../../assets/menu/signout.svg';

const Links = () => {

    const links = [
        {
            name: "Dashboard",
            image: dashboardIcon,
        },
        {
            name: "Profile",
            image: profileIcon,
        },
        {
            name: "Leaderboard",
            image: leaderBoardIcon,
        },
        {
            name: "Order",
            image: orderIcon,
        },
        {
            name: "Product",
            image: productIcon,
        },
        {
            name: "Sales Report",
            image: salesReportIcon,
        },
        {
            name: "Message",
            image: messageIcon,
        },
        {
            name: "Settings",
            image: settingsIcon,
        },
        {
            name: "Favourite",
            image: favouriteIcon,
        },
        {
            name: "History",
            image: historyIcon,
        },
        {
            name: "Sign Out",
            image: signOutIcon,
        },
    ];

    return (

        <div className='px-4'>
            {links.map((link) => (
                <div className=''>
                    <div className='flex items-center w-[116px] h-9 hover:bg-third hover:text-[#171821] rounded-md font-inter font-semibold text-xs text-[#87888C] mb-[18px]'>
                        <img src={link.image} className='h-3 w-3 mx-2.5 text-[#87888C]' alt="" />
                        <h2>{link.name}</h2>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Links