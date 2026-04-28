import React from 'react';
import { textMaxLength } from '../../utils/functions';
import axios from 'axios';
import Image from '../../modules/Image';

const Trailer = ({ data }) => {
    const baseUrl = axios.defaults.baseURL

    return (
        <div className='bg-white dark:bg-dark-gray shadow-soft bg-opacity-100 z-50 mx-3 min-w-72 w-full last:ml-0 first:mr-0  rounded-3xl  text-slate-700 dark:text-white'>
            <div className='h-40 relative'>
                <span className='absolute top-4 right-4  bg-white dark:bg-[#1B1D21] bg-opacity-70 pt-0.5 px-2 text-[10px] z-40 rounded-md'>08:56</span>
                <Image className='h-full w-full object-cover rounded-t-3xl' alt="trailer-image" src={baseUrl + data.image} />
                <div className='relative dir-ltr bg-white dark:bg-[#1B1D21] h-1 min-w-full'>
                    <span className='absolute bg-orange h-1 z-20' style={{ width: '50%' }}></span>
                </div>
            </div>
            <div className='mx-5 py-5'>
                <h1 className='font-bold text-base h-14'>{textMaxLength(data.title, 65)}</h1>
                <div className='flex text-xs font-medium my-3'>
                    <div className='flex items-center'>
                        <div className='bg-[#0049C6] h-2.5 w-2.5 rounded-full'></div>
                        <p className='mx-2 text-sm text-[#808191] font-medium'>{data.viewCount} بازدید</p>
                    </div>
                    <div className='flex items-center'>
                        <div className='bg-[#78c970] h-2.5 w-2.5 rounded-full'></div>
                        <p className='mx-2 text-sm text-[#808191] font-medium'>{data.publishTime}</p>
                    </div>
                </div>
                <div className='flex mt-5'>
                    <Image alt='icon'className='h-6 w-6 rounded-full object-cover object-center' src={baseUrl + data.author.profileImage} />
                    <p className='mx-2 text-sm font-bold'>منتشر کننده: {data.author.name}</p>
                </div>
            </div>
        </div>
    );
};

export default Trailer;