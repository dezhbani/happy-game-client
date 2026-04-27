import React, { useState, useRef, useEffect } from 'react';
import logo from '../assets/Logo.png'

// Icons
import PlayIcon from '../assets/icons/Play.svg'
import OrangePlayIcon from '../assets/icons/OrangePlay.svg'
import PauseIcon from '../assets/icons/Pause.svg'
import SoundIcon from '../assets/icons/Sound.svg'
import Logo from '../assets/Logo.svg'
import FullScreen from '../assets/icons/FullScreen.svg'

const VideoPlayer = ({ video, posterImage }) => {
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isFull, setIsFull] = useState(false);
    const [poster, setPoster] = useState(false);
    const [volume, setVolume] = useState(0.5);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const togglePlay = () => {
        setPoster(true)
        const video = videoRef.current;
        if (video) {
            if (video.paused || video.ended) {
                video.play();
                setIsPlaying(true);
            } else {
                video.pause();
                setIsPlaying(false);
            }
        }
        setVolume(video.volume)
    };

    const handleVolumeChange = (e) => {
        const video = videoRef.current;
        if (video) {
            const newVolume = parseFloat(e.target.value);
            video.volume = newVolume;
            setVolume(newVolume);
        }
    };

    const handleTimeUpdate = () => {
        const video = videoRef.current;
        if (video) {
            setCurrentTime(video.currentTime);
            setDuration(video.duration);
        }
    };
    const handleProgressChange = (e) => {
        const video = videoRef.current;
        if (video) {
            const newTime = parseFloat(e.target.value);
            video.currentTime = newTime;
        }
    };
    useEffect(() => {
        const handleFullscreenChange = () => {
            setIsFull(!!document.fullscreenElement);
        };

        document.addEventListener('fullscreenchange', handleFullscreenChange);
        return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
    }, []);
    const playerWrapperRef = useRef(null);

    // تابع تغییر وضعیت تمام صفحه
    const toggleFullScreen = () => {
        if (!document.fullscreenElement) {
            playerWrapperRef.current.requestFullscreen().catch(err => {
                console.error(`Error attempting to enable full-screen mode: ${err.message}`);
            });
        } else {
            document.exitFullscreen();
        }
    };
    return (
        <div
            ref={playerWrapperRef}
            className={[
                'relative mx-auto bg-gray-800 shadow-md overflow-hidden group',
                // اگر فول‌اسکرین بود: کاملاً صفحه را پر کند، اگر نه: ابعاد عادی
                isFull
                    ? 'fixed inset-0 z-[9999] rounded-none w-screen h-screen'
                    : 'rounded-[32px] lg:h-[500px] h-fit w-full'
            ].join(' ')}

        >
            <video
                ref={videoRef}
                src={video}
                poster={posterImage}
                className="w-full h-full object-contain bg-black"
                controlsList='nodownload noremoteplayback'
                // type="video/mp4"
                onTimeUpdate={handleTimeUpdate}
                onEnded={() => setIsPlaying(false)}
                onClick={togglePlay}>
            </video>
            <img src={logo} alt='logo' className='h-10 opacity-30 absolute top-5 right-5' />
            <button className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 bg-black backdrop-blur-2xl bg-opacity-30 rounded-2xl p-3 lm:p-5 md:p-8 ${isPlaying && 'invisible'} transition ease-in-out duration-300`} onClick={togglePlay}>
                <img className='max-lm:h-6 fill-orange' alt="icon" src={OrangePlayIcon} />
            </button>
            <div className="absolute dir-ltr pb-3 px-10 group-hover:visible invisible bottom-0 left-0 w-full bg-gray-700 p-2 flex items-center justify-between">
                <button onClick={togglePlay} className="bg-[#1B1D21] bg-opacity-70 text-white font-bold p-1.5 rounded">
                    <img className='h-3.5 w-3.5' src={isPlaying ? PauseIcon : PlayIcon} alt='play/pause' />
                </button>
                <div className="ml-4 bg-[#1B1D21] bg-opacity-70 text-white font-bold p-1.5 rounded">
                    <img className='h-3.5' alt="icon" src={SoundIcon} />
                </div>
                <div className='relative bg-opacity-30 max-w-16 flex-grow ml-2 mr-4 h-1.5 bg-white rounded-lg '>
                    <input
                        type="range"
                        min={0}
                        max={1}
                        step={0.01}
                        value={volume}
                        onChange={handleVolumeChange}
                        className="progress-bar ease-in-out absolute ml-0 w-16 bg-white h-1.5 bg-opacity-0 z-50 flex-grow  appearance-none cursor-pointer" />
                    <span style={{ width: `${volume * 100}%` }} className='absolute ml-0 flex-grow h-1.5 bg-white rounded-lg'>
                        <span className='absolute ml-[100%] flex-grow bg-white h-2.5 w-2.5 rounded-full -translate-x-1/2 -translate-y-1/4'></span>
                    </span>
                </div>
                <div className='relative bg-opacity-30 flex-grow ml-4 mr-4 h-1.5 bg-white rounded-lg '>
                    <input
                        type="range"
                        min={0}
                        max={duration || 100}
                        value={currentTime}
                        onChange={handleProgressChange}
                        className="progress-bar ease-in-out absolute ml-0 w-full bg-white h-1.5 bg-opacity-0 z-50 flex-grow  appearance-none cursor-pointer" />
                    <span style={{ width: `${(currentTime * 100) / duration}%` }} className='absolute ml-0 flex-grow h-1.5 bg-white rounded-lg'>
                        <img className='absolute ml-[100%] flex-grow min-w-[30px] w-[30px] object-contain -translate-x-1/2 -translate-y-1/4' alt="icon" src={Logo} />
                    </span>
                </div>
                <button onClick={toggleFullScreen} className="bg-[#1B1D21] bg-opacity-70 text-white font-bold p-1.5 rounded">
                    <img className='h-4 w-4' src={FullScreen} alt="icon" />
                </button>
            </div>
        </div>
    );
};

export default VideoPlayer;