import React from 'react';

const SectionTitle = ({title=""}) => {
    return (
        <div className='flex justify-center w-full'>
            <h1 className='border-b border-slate-700 dark:border-white pb-5 w-fit text-slate-700 dark:text-white text-xl lg:text-3xl font-bold my-4 md:my-10'>{title}</h1>
        </div>
    );
};

export default SectionTitle;