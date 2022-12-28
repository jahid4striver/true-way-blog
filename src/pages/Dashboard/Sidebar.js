import React, { useState } from 'react';
import { BsArrowLeftShort, BsSearch, BsChevronDown } from "react-icons/bs";
import { MdDashboard } from "react-icons/md";
import { FaBlogger, FaMicroblog, FaHome } from "react-icons/fa";
import { GrBlog } from "react-icons/gr";
import { ImBlog } from "react-icons/im";
import { Link, Outlet } from 'react-router-dom';


const Sidebar = () => {
    const [open, setOpen] = useState(true)
    const [openSubmenuItems, setOpenSubmenuItems] = useState(true)

    const menus = [
        { title: "Add A Blog", tooltip: "Add A Blog", icon: ImBlog, link:"add_a_blog" },
        { title: "All Blogs", tooltip: "All Blogs", icon: FaMicroblog, link:"all_blogs" },
        { title: "Home", tooltip: "Home", icon: FaHome, spacing:true, link:"/" },
    ]


    return (
        <div className="flex duration-500">
            <div className={`bg-dark-purple h-screen p-5 pt-8 ${open ? "w-72" : "w-20"} duration-300 relative`}>
                <BsArrowLeftShort onClick={() => setOpen(!open)} className={`text-3xl bg-white rounded-full absolute -right-3 top-9
       border border-dark-purple cursor-pointer ${!open && "rotate-180"}`}></BsArrowLeftShort>
                <div className='inline-flex'>
                    <MdDashboard className={`text-3xl text-orange-300 rounded cursor-pointer block float-left duration-500 mr-2 ${open && "rotate-[360deg]"}`}>
                    </MdDashboard>
                    <h1 className={`text-orange-300 origin-left font-medium text-2xl duration-300 ${!open && "scale-0"}`}>True Way</h1>
                </div>
                <ul className='pt-2 mt-8'>
                    {menus.map((menu, index) =>
                        <>
                            <li className={`text-orange-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 rounded-md hover:bg-light-white duration-500 ${menu.spacing ? "mt-96" : "mt-2"}`} key={index}>
                                <Link to={menu.link} className='text-2xl block float-left'>
                                    {menu.icon ? <menu.icon /> : <MdDashboard title={menu.tooltip} />}
                                </Link>
                                <Link to={menu.link} className={`text-base font-medium flex-1 ${!open && "hidden"} duration-200`}>{menu.title}</Link>
                                {menu.submenu && open && (
                                    <BsChevronDown className={`${openSubmenuItems && "rotate-180"}`} onClick={() => setOpenSubmenuItems(!openSubmenuItems)}></BsChevronDown>
                                )}
                            </li>
                            {menu.submenu && openSubmenuItems && open && (
                                <ul className='duration-300'>
                                    {
                                        menu.submenuItems.map((submenuItem, index) => (
                                            <li className={`text-orange-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 rounded-md hover:bg-light-white  px-5`} key={index}>
                                                {submenuItem.title}
                                            </li>
                                        ))
                                    }
                                </ul>
                            )}
                        </>
                    )}
                </ul>

            </div>
            <div className='p-7 mx-auto'>
                <Outlet/>
            </div>
        </div>
    );
}


export default Sidebar;