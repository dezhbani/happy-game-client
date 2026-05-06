import { useContext, useState } from 'react';
import logo from '../../assets/Logo.png'
import { ProfileContext } from '../../contexts/UserContext';
import { DotsThreeVerticalIcon, HeartIcon, Note, ShoppingCartIcon, SignOutIcon, SquaresFourIcon, User } from '@phosphor-icons/react';
import { NavLink, useLocation } from 'react-router-dom';

const Sidebar = () => {
    const { user } = useContext(ProfileContext)
    const location = useLocation();
    const [sidebar, setSidebar] = useState(false)

    const commonClasses = `flex gap-2 items-center w-full py-2 px-3 rounded-lg darkAnimation hover:text-violet`;

    return (
        <>
            <div
                className='darkAnimation lg:hidden text-dark-gray dark:text-white shadow-soft z-20 dark:shadow-[#ffffff10] dark:shadow-[1px_1px_30px_10px] bg-white dark:bg-dark-gray rounded-xl p-2'
                onClick={() => setSidebar(!sidebar)}>
                <DotsThreeVerticalIcon className='w-9 h-9' weight='bold' />
            </div>
            <div className={`max-lg:transition-opacity opacity-0 lg:opacity-100 max-lg:duration-200 max-lg:absolute max-lg:top-12 max-lg:mt-5 lg:sticky lg:top-32 max-lg:w-full lg:w-72 z-10 ${sidebar && "max-lg:block opacity-100"}`}>
                <div className={`darkAnimation md:overflow-y-auto scrollbar-none w-full lg:h-screen lg:min-h-[calc(100vh-172px)] lg:max-h-[calc(100vh-172px)] max-lg:drop-shadow-lg lg:shadow-soft dark:shadow-[#ffffff20] dark:shadow-[1px_1px_30px_10px] bg-white dark:bg-dark-gray rounded-xl p-4  ${!sidebar ? 'max-lg:hidden' : "block"}`}>
                    <div className="text-center pb-8 max-md:hidden">
                        <div className="darkAnimation w-24 h-24 shadow-soft mx-auto rounded-full bg-gray/10 dark:bg-[#33353b] flex items-center justify-center text-3xl font-bold text-violet mb-4">
                            <img className='h-8 opacity-70 z-20' src={logo} alt='logo' />
                        </div>
                        <p className="darkAnimation text-sm font-bold text-dark-gray dark:text-white m-0">Dezhbani </p>
                        <p className="darkAnimation text-xs text-dark-gray dark:text-white mt-1">{user?.email}</p>
                    </div>
                    <ul className="darkAnimation flex flex-col gap-2.5 items-center  lg:px-3 py-1 text-sm font-bold rounded-lg cursor-pointer text-[#475466] dark:text-white">

                        <li className='w-full'>
                            <NavLink
                                to="/dashboard"
                                className={`${commonClasses} ${location.pathname == '/dashboard' ? 'bg-[#c5bdfa]/30 text-violet dark:bg-[#D2CBFF]' : ''}`}
                            >
                                <SquaresFourIcon weight='fill' className='w-[26px] h-[26px]' />
                                <span>داشبورد</span>
                            </NavLink>
                        </li>

                        <li className='w-full'>
                            <NavLink
                                to="/dashboard/orders"
                                className={({ isActive }) => `${commonClasses} ${isActive ? 'bg-[#c5bdfa]/30 text-violet dark:bg-[#D2CBFF]' : ''}`}
                            >
                                <ShoppingCartIcon weight='fill' className='w-[26px] h-[26px]' />
                                <span>سفارشات</span>
                            </NavLink>
                        </li>

                        <li className='w-full'>
                            <NavLink
                                to="/dashboard/profile"
                                className={({ isActive }) => `${commonClasses} ${isActive ? 'bg-[#c5bdfa]/30 text-violet dark:bg-[#D2CBFF]' : ''}`}
                            >
                                <User weight='fill' className='w-[26px] h-[26px]' />
                                <span>پروفایل من</span>
                            </NavLink>
                        </li>

                        <li className='w-full'>
                            <NavLink
                                to="/dashboard/favorites"
                                className={({ isActive }) => `${commonClasses} ${isActive ? 'bg-[#c5bdfa]/30 text-violet dark:bg-[#D2CBFF]' : ''}`}
                            >
                                <HeartIcon weight='fill' className="w-[26px] h-[26px]" />
                                <span>علاقه‌مندی‌ها</span>
                            </NavLink>
                        </li>

                        <li className='w-full'>
                            <NavLink
                                to="/dashboard/content"
                                className={({ isActive }) => `${commonClasses} ${isActive ? 'bg-[#c5bdfa]/30 text-violet dark:bg-[#D2CBFF]' : ''}`}
                            >
                                <Note weight='fill' className='w-[26px] h-[26px]' />
                                <span>محتوای من</span>
                            </NavLink>
                        </li>
                        <li className='darkAnimation flex gap-2 items-center w-full py-2 px-3 rounded-lg hover:text-white hover:bg-red-500 '>
                            <SignOutIcon weight='fill' className='w-6 h-6' />
                            <span>خروج</span>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Sidebar;