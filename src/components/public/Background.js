import React from 'react';
import Footer from '../home/Footer';

const Background = ({ children, footer=true }) => {
    return (
        <>
            <div className="min-h-screen h-full flex flex-col bg-cover z-0 bg-center bg-no-repeat dark:bg-[url('/src/assets/background.jpg')] relative dir-rtl">
                <div className="absolute z-10 inset-0 bg-[#f3f4f6] dark:bg-dark-gray backdrop-blur-[114px] opacity-30 dark:opacity-80 darkAnimation"></div>
                <div className="relative z-20 flex flex-col w-full flex-grow max-w-screen px-6 md:px-24 py-5  items-center">
                    {children}
                </div>
            </div>
            {
                footer && <Footer />
            }
        </>
    );
};

export default Background;