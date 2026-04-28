import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import UserIcon from '../../assets/icons/UserIcon';
import { ProfileContext } from '../../contexts/UserContext';

//Styles
import './Navbar.css';

//Icons
import Logo from "../../assets/Logo.svg"
import HomeIcon from '../../assets/icons/HomeIcon';
import DarkIcon from '../../assets/icons/DarkIcon';
import LightIcon from '../../assets/icons/LightIcon';
import ShopIcon from '../../assets/icons/ShopIcon';
import ContactUsIcon from '../../assets/icons/ContactUsIcon';
import AboutIcon from '../../assets/icons/AboutIcon';
import BlogIcon from '../../assets/icons/BlogIcon';
import WarningIcon from '../../assets/icons/WarningIcon';
import useDarkMode from '../../hooks/useDarkMode';
import SearchIcon from '../../assets/icons/SearchIcon';

const Hamburger = ({ status, onChange }) => {
    document.body.style.overflow = status ? 'hidden' : '';

    return (
        <button className='lg:hidden !text-dark-gray'>
            <input type="checkbox" id="checkbox" checked={status} onChange={onChange} />
            <label htmlFor="checkbox" className="toggle">
                <div className="bars darkAnimation dark:!bg-white" id="bar1"></div>
                <div className="bars darkAnimation dark:!bg-white" id="bar2"></div>
                <div className="bars darkAnimation dark:!bg-white" id="bar3"></div>
            </label>
        </button>
    )
}

const Navbar = ({ logoVisiblity = true }) => {
    const { user, refreshUserData } = useContext(ProfileContext)
    const [menu, setMenu] = useState(false)
    const [showTooltip, setShowTooltip] = useState(false);
    const [darkMode, toggleDarkMode] = useDarkMode();

    useEffect(() => {
        const shouldShow = localStorage.getItem('showTooltipOnHome');
        let timeout;

        if (shouldShow === 'true') {
            setShowTooltip(true);
            timeout = setTimeout(() => {
                localStorage.removeItem('showTooltipOnHome');
                setShowTooltip(false)
            }, 5000);
        }

        return () => {
            if (timeout) clearTimeout(timeout);
        };
    }, []);
    const toggleMenu = () => {
        setMenu((prevMenu) => !prevMenu);
    };

    const handleDarkMode = () => {
        const dark = toggleDarkMode()
    }

    const handleExitAccount = () => {
        localStorage.removeItem("currentUser")
        refreshUserData()
    }
    return (
        <>
            {
                <div className={`darkAnimation fixed font-bolder lg:hidden inset-0 z-50 bg-white/40 dark:bg-[#1C1C1C]/50 backdrop-blur-sm transition-opacity duration-300 ${menu ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                    <div className={`darkAnimation flex-col bg-white dark:bg-dark-gray rounded-l-3xl p-8 pt-12 h-dvh w-72 transition-transform duration-300 transform ${menu ? 'translate-x-0' : 'translate-x-full'} relative overflow-y-auto scrollbar-none`}>
                        <div className="absolute top-5 left-6">
                            <Hamburger status={menu} onChange={toggleMenu} />
                        </div>
                        <div className='flex items-center gap-4'>
                            <SearchIcon className='darkAnimation h-9 md:hidden fill-slate-700 dark:fill-white' alt='search' />
                            {
                                darkMode ?
                                    <LightIcon className="darkAnimation dark:text-white text-dark-gray h-9 md:hidden"  alt='light' onClick={() => handleDarkMode()} /> :
                                    <DarkIcon className='darkAnimation fill-slate-700 dark:fill-white w-5 md:hidden rotate-[360deg]' alt='dark' onClick={() => handleDarkMode()} />
                            }
                        </div>
                        <div className="flex flex-col">
                            <div className="my-12 flex justify-center">
                                <Link className="w-fit h-[45px] flex flex-col items-center justify-center" to="/">
                                    <img
                                        alt="website logo"
                                        fetchpriority="high"
                                        decoding="async"
                                        data-nimg="1"
                                        className=" m-auto transition-all w-28" src={Logo}
                                    />
                                </Link>
                            </div>
                            <ul className="darkAnimation flex flex-col gap-5 text-slate-700 dark:text-white ">
                                <li>
                                    <Link className="font-medium transition-all w-full flex items-center gap-5" to="/">
                                        <HomeIcon className="darkAnimation fill-none stroke-dark-gray dark:stroke-white" />
                                        <p className="text-sm py-2">خانه</p>
                                    </Link>
                                </li>
                                <li>
                                    <Link className="font-medium transition-all w-full flex items-center gap-5" to="/tariffs">
                                        <ShopIcon className="darkAnimation fill-dark-gray dark:fill-white stroke-dark-gray dark:stroke-white" />
                                        <p className="text-sm py-2">فروشگاه</p>
                                    </Link>
                                </li>
                                <li>
                                    <Link className="font-medium transition-all w-full flex items-center gap-5" to="/contact-us">
                                        <ContactUsIcon className="darkAnimation fill-dark-gray dark:fill-white stroke-dark-gray dark:stroke-white" />
                                        <p className="text-sm py-2">تماس با ما</p>
                                    </Link>
                                </li>
                                <li>
                                    <Link className="font-medium transition-all w-full flex items-center gap-5" to="/certificates">
                                        <AboutIcon className="darkAnimation fill-dark-gray dark:fill-white stroke-dark-gray dark:stroke-white" />
                                        <p className="text-sm py-2">درباره ما</p>
                                    </Link>
                                </li>
                                <li>
                                    <Link className="font-medium transition-all w-full flex items-center gap-5" to="/">
                                        <BlogIcon className="darkAnimation fill-none stroke-dark-gray dark:stroke-white" />
                                        <p className="text-sm py-2">وبلاگ</p>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            }


            <nav className="max-w-screen-xl mb-10 justify-between flex dir-rtl w-full text-base">
                <Hamburger status={menu} className='lg:hidden' onChange={toggleMenu} />
                <div className="flex items-center max-lg:justify-center">
                    <img alt='icon' className={`md:w-14 h-9 w-full lg:ml-5 ${!logoVisiblity && 'hidden'}`} src={Logo} />
                    <div className="flex justify-between items-center max-lg:hidden text-slate-700 dark:text-white lg:w-96">
                        <Link to="/">خانه</Link>
                        <Link>فروشگاه</Link>
                        <Link>تماس با ما</Link>
                        <Link>درباره ما</Link>
                        <Link>وبلاگ</Link>
                    </div>
                </div>
                <div className='flex gap-4'>
                    <SearchIcon className='darkAnimation h-9 max-md:hidden fill-slate-700 dark:fill-white' alt='search' />
                    {
                        darkMode ?
                            <LightIcon className="darkAnimation rotate-180 dark:rotate-0 dark:text-white text-dark-gray h-9 max-md:hidden"  alt='light' onClick={() => handleDarkMode()} /> :
                            <DarkIcon className='darkAnimation rotate-[360deg]  dark:rotate-0 h-9 max-md:hidden fill-slate-700 dark:fill-white' alt='dark' onClick={() => handleDarkMode()} />
                    }
                    {
                        !user ?
                            <Link to='/signup'>
                                <button className="px-6 sm:px-9 py-2 max-sm:text-sm rounded-lg w-max bg-violet text-white">ثبت نام</button>
                            </Link>
                            :
                            <div onDoubleClick={handleExitAccount} className='darkAnimation relative flex h-9 w-9 flex-none items-center justify-center rounded-full bg-slate-700/15 shadow-soft dark:bg-white/10'>
                                {/* {(
                                    <div className={`${showTooltip ? 'opacity-100': 'opacity-0'} absolute z-20 left-full top-1 mx-2 mb-2 transition duration-200 transform translate-y-0`}>
                                        <div className="flex bg-slate-800 w-max max-w-xs text-white rounded-lg p-2 items-center dir-rtl">
                                            <WarningIcon />
                                            <p className="text-xs mx-2 mb-1">دوبار کلیک کنید تا از اکانت خارج شوید!</p>
                                        </div>
                                    </div>
                                )} */}

                                <UserIcon
                                    className='darkAnimation stroke-slate-700 dark:stroke-white fill-none'
                                    onMouseEnter={() => setShowTooltip(true)}
                                    onMouseLeave={() => setShowTooltip(false)}
                                />
                            </div>
                    }
                </div>
            </nav>
        </>
    );
};

export default Navbar;