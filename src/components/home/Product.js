import React from 'react';   
import axios from 'axios';
import Image from '../../modules/Image';

const Product = ({ product }) => {
    const baseUrl = axios.defaults.baseURL
    const { name, image, price, buyerCount } = product
    
    return (
        <div className='w-72 min-w-72 group rounded-[28px] flex flex-col shadow-soft mx-3 2xl:mx-5 first:mr-0 last:ml-0 my-5 text-slate-700 dark:text-white 2xl:w-96 hover:scale-110 ease-in-out duration-500'>
            <div className='darkAnimation rounded-t-[28px] flex flex-col bg-white dark:bg-dark-gray dark:bg-opacity-60 dark:backdrop-blur-3xl'>
                <Image className='h-52 w-full object-cover rounded-t-[28px]' alt='product-image' src={baseUrl + image} />
                <div className='mx-7 mt-3 font-medium text-xl'>
                    <h2 className='max-w-56 my-5'>{name}</h2>
                    <span className='w-full mt-3 flex font-black justify-center text-orange'>{price}</span>
                </div>
                <div className="relative w-full h-10">
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#ff754c1a] border-b border-[#F0F3F61A]"></div>
                </div>
            </div>

            <div className='darkAnimation relative rounded-b-[28px] flex items-center py-8 bg-white dark:bg-dark-gray '>
                <div className='flex items-center mx-5'>
                    <div className='bg-violet h-2.5 w-2.5 rounded-full'></div>
                    <p className='mx-2 text-sm text-[#808191] font-medium'>{buyerCount} نفر خرید کرده اند.</p>
                </div>
                <button className="group-hover:bg-orange ease-in-out duration-300 group-hover:text-white bg-orange bg-opacity-15 text-orange backdrop-blur-3xl rounded-bl-[30px] rou rounded-r-xl absolute left-0 bottom-0 p-4 h-fit">خرید</button>
            </div>
        </div>
    );
};

export default Product;