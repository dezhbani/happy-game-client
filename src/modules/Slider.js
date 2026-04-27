import React, { useEffect, useState } from 'react';
import Card from './Card';
import axios from 'axios';
import 'react-loading-skeleton/dist/skeleton.css';
import Image from './Image';

// Icons
import ArrowRight from '../assets/icons/SmallRight.svg';
import ArrowLeft from '../assets/icons/SmallLeft.svg';

const Slider = ({ data }) => {
    const { images, card } = data
    const baseUrl = axios.defaults.baseURL
    const [active, setActive] = useState(0);
    const [slider, setSlider] = useState({ start: 0, end: 4, max: 4 });
    const [imageLoaded, setImageLoaded] = useState(false);

    const rightButton = () => {
        let nextActive = (active + 1) % images.length;
        setActive(nextActive);

        if (nextActive === 0) {
            setSlider({ start: 0, end: slider.max, max: slider.max });
        } else if (nextActive >= slider.end) {
            const newEnd = Math.min(slider.end + 1, images.length);
            setSlider({ start: slider.start + 1, end: newEnd, max: slider.max });
        }
    };

    const leftButton = () => {
        let nextActive = active - 1 < 0 ? images.length - 1 : active - 1;
        setActive(nextActive);

        if (nextActive === images.length - 1) {
            const newStart = images.length - slider.max < 0 ? 0 : images.length - slider.max;
            setSlider({ start: newStart, end: images.length, max: slider.max });
        } else if (nextActive < slider.start) {
            const newStart = Math.max(0, slider.start - 1);
            const newEnd = slider.start + slider.max;
            setSlider({ start: newStart, end: newEnd - 1, max: slider.max });
        }
    };
    useEffect(() => {
        const interval = setInterval(() => {
            rightButton();
        }, 5000);

        return () => clearInterval(interval);
    }, [active]);
    if (images.length) return (
        <div className='h-full max-w-screen-xl'>
            {
                imageLoaded && (
                    <div className='relative'>
                        <div className='absolute mx-auto z-30 left-10 2xl:left-32 top-[300px] max-xl:hidden'>
                            <Card data={card} />
                        </div>
                    </div>
                )

            }
            <div className='mb-6 relative max-w-full mx-auto h-72 md:h-96 lg:h-[500px] overflow-hidden rounded-[40px]'>
                <div className="absolute top-0 left-0 w-full h-full transition-all duration-500 ease-in-out" style={{ transform: `translateX(-${active * 100}%)` }}>
                    {images.map((slide, index) => (
                        <div key={slide} className="w-full h-full flex items-center justify-center absolute top-0 left-0" style={{ transform: `translateX(${index * 100}%)` }} >
                            <Image onLoadComplete={() => setImageLoaded(true)} src={baseUrl + slide} alt={`slide ${index}`} className="h-full w-full object-cover" />
                        </div>
                    ))}
                </div>
            </div>
            <div className='w-fit my-5 mx-4 max-sm:hidden'>
                <div className="relative h-full w-full">
                    <div className="absolute inset-y-0 flex justify-between w-full items-center">
                        <span className="z-10 rounded-full bg-violet flex items-center w-fit p-2 cursor-pointer" onClick={rightButton}>
                            <img className="h-3.5 w-3.5" src={ArrowRight} alt='ArrowRight' />
                        </span>
                        <span className="z-10 rounded-full bg-violet flex items-center w-fit p-2 cursor-pointer" onClick={leftButton}>
                            <img className="h-3.5 w-3.5" src={ArrowLeft} alt='ArrowLeft' />
                        </span>
                    </div>

                    <div className="flex dir-ltr items-center">
                        {
                            images.slice(slider.start, slider.end).map((slide, index) => (
                                <div key={slide} className={`mx-2 ${active === slider.start + index ? 'bg-dark-gray shadow-[0px_4px_3px_rgba(27, 29, 33, 1)] p-1.5 rounded-lg' : ''}`}>
                                    <Image className="h-14 w-24 rounded-lg" alt={`slide ${index}`} src={baseUrl + slide} />
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Slider;