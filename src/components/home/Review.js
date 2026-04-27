import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Icons
import PlayIcon from '../../assets/icons/Play.svg'
import axios from 'axios';
import Image from '../../modules/Image';

const Review = ({ data, selectTrailer }) => {
    const baseUrl = axios.defaults.baseURL
    const [imageLoaded, setImageLoaded] = useState(false);

    return (
        <div className='w-1/3 min-w-[80%] sm:min-w-96 h-[550px] max-sm:mx-3 mx-5 first:mr-0 last:ml-0 group'>
            <div className='relative h-full w-full'>
                {
                    imageLoaded && (
                        <>
                            <div className='absolute transition-all ease-in-out duration-500 bottom-10 group-hover:-translate-y-2/3 text-white flex flex-col items-center h-fit w-full z-50'>
                                <h1 className='w-full flex justify-center h-fit font-bold text-[26px]'>{data.title}</h1>
                                <p className='w-full flex justify-center h-fit text-xl my-5'>{data.name}</p>
                                <button onClick={() => selectTrailer(data.id)}>
                                        <img className='p-4 bg-white backdrop-blur bg-opacity-10 transition-colors ease-in-out duration-500 group-hover:bg-orange rounded-full group-hover:rounded-3xl' src={PlayIcon} alt='play-icon' />
                                </button>
                            </div>
                            <div className="absolute inset-0 rounded-[28px]  group-hover:backdrop-blur-sm h-full object-cover bg-gradient-to-t from-black via-transparent to-[rgba(0,0,0,0)]"></div>
                        </>
                    )
                }
                <Image
                    src={baseUrl + data.image} 
                    className="h-full w-full object-center object-cover rounded-[28px]"
                    onLoadComplete={() => setImageLoaded(true)}
                />
            </div>
        </div>
    );
};

export default Review;