import React from 'react';
import axios from 'axios';
import Image from '../../modules/Image';

const Article = ({ data }) => {
    const baseUrl = axios.defaults.baseURL
    return (
        <div className='flex h-[420px] max-lg:mx-3 max-lg:first:mr-0 max-lg:flex-col min-w-72 rounded-[28px] group darkAnimation shadow-soft bg-white hover:bg-[rgba(31,33,40,0.01)] dark:hover:bg-[#36345a] dark:bg-dark-gray text-lg my-5 p-3 lg:first:mt-0 last:mb-0 lg:h-1/3'>
            <div className='lg:w-1/2'>
                <Image alt='article-image' className='rounded-[28px] h-44 lg:h-56 object-cover object-top w-full' src={baseUrl + data.image} />
            </div>
            <div className='flex justify-between h-full flex-col lg:w-1/2 max-lg:mt-3 max-lg:mx-3 lg:mr-7'>
                <div className='flex scrollbar-none overflow-x-auto'>
                    {
                        data.tags.map((tag, index) => <div key={index} className='min-w-fit bg-violet text-violet text-sm dark:group-hover:bg-[#D2CBFF] dark:group-hover:text-white dark:group-hover:bg-opacity-10 px-2 py-0.5 w-fit h-fit bg-opacity-10 rounded-[10px] mx-1' >{tag}</div>)
                    }
                </div>
                <h1 className='text-slate-700 dark:text-white my-3 font-bold leading-10 line-clamp-2'>{data.title}</h1>
                <div className="flex-grow"></div>
                <div className='flex items-center'>
                    <div className='bg-orange group-hover:bg-violet h-2.5 w-2.5 rounded-full'></div>
                    <p className='mx-2 text-sm text-[#808191] font-medium overflow-hidden text-ellipsis whitespace-nowrap'>{data.readCount} نفر این مقاله را خوانده اند.</p>
                </div>
                <button className='darkAnimation bg-gray/5 text-slate-700 dark:bg-[#E4E4E41A] dark:text-white group-hover:bg-violet group-hover:text-white lg:w-fit px-9 py-4 rounded-xl text-xs mt-2'>مشاهده مقاله</button>
            </div>
        </div>
    );
};

export default Article;