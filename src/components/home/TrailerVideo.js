import React, { useContext, useEffect, useState } from 'react';
import VideoPlayer from '../../modules/VideoPlayer';
import { customToast } from '../../utils/functions';
import { ProfileContext } from '../../contexts/UserContext';
import axios from 'axios';

// Icons
import SaveIcon from '../../assets/icons/SaveIcon'
import MoreIcon from '../../assets/icons/MoreIcon'
import LikeIcon from '../../assets/icons/LikeIcon';
import ShareIcon from '../../assets/icons/ShareIcon';

const TrailerVideo = ({ data }) => {
    const { user } = useContext(ProfileContext)
    const [like, setLike] = useState(null)
    const [save, setSave] = useState(null)
    const likeStatus = () => {
        const user = localStorage.getItem('currentUser')
        if (user) {
            const status = JSON.parse(user)
            return !!status?.like
        }
    }

    const changeLikeStatus = () => {
        if (user) {
            const newStatus = !likeStatus()
            user.like = newStatus
            localStorage.setItem('currentUser', JSON.stringify(user))
            setLike(newStatus)
            customToast("success", newStatus ? "لایک شد!" : "لایک حذف شد!")
        }
        else customToast("error", "برای لایک کردن باید وارد حساب کاربری خود شوید")

    }
    const shareContent = () => {
        const originLoacation = window.location.origin
        if (navigator.share) {
            navigator.share({
                title: "I want whare this with you",
                text: "Check out this amazing website!",
                url: `${originLoacation}#trailer`,
            })
                .then(() => console.log("Shared successfully!"))
                .catch((error) => customToast("error", error));
        } else {
            customToast("error", "Web Share API is not supported in your browser.");
        }
    }
    const addToSavedList = () => {
        if (!user) customToast("error", "برای سیو کردن باید وارد حساب کاربری خود شوید")
        else {
            user.saved = !user.saved
            setSave(user.saved)
            localStorage.setItem('currentUser', JSON.stringify(user))
            customToast("success", user.saved ? "به لیست علاقه مندی ها اضافه شد" : "از لیست علاقه مندی ها حذف شد")
        }
    }
    useEffect(() => {
        setLike(likeStatus())

    }, [])
    const baseUrl = axios.defaults.baseURL
    return (
        <div className='my-10' id='trailer'>
            <div className='bg-white darkAnimation dark:bg-dark-gray h-fit  shadow-soft rounded-[32px]'>
                <VideoPlayer video={baseUrl + data.video} posterImage={baseUrl + data.poster} />
                <div className='text-slate-700 darkAnimation dark:text-white'>
                    <div className='p-4 md:p-9 border-b border-b-[#F0F3F61A]'>
                        <h1 className='text-2xl md:text-4xl font-semibold mb-3 md:mb-8'>{data.title}</h1>
                        <p className='text-base md:text-xl md:mb-2 sm:line-clamp-3 min-h-[84px]'>{data.description}</p>
                    </div>
                    <div className='flex justify-between items-center px-4 md:px-9 py-5 font-bold text-lg'>
                        <div className='flex'>
                            <div onClick={addToSavedList} className='flex items-center mx-3 md:mx-6 my-2 md:my-5'>
                                <SaveIcon className={` ${save ? "fill-slate-700 darkAnimation dark:fill-white" : "fill-none"}`} />
                                <span className='mr-2 max-lg:hidden'>افزودن به لیست علاقه مندی ها</span>
                            </div>
                            <div onClick={shareContent} className='flex items-center mx-3 md:mx-6 my-2 md:my-5'>
                                <ShareIcon />
                                <span className='mr-2 max-lg:hidden'>اشتراک گذاری</span>
                            </div>
                            <div onClick={changeLikeStatus} className='flex items-center mx-3 md:mx-6 my-2 md:my-5'>
                                <LikeIcon className={` ${like ? "fill-slate-700 darkAnimation dark:fill-white" : "fill-none"}`} />
                                <span className='mr-2 max-lg:hidden'>پسندیدم</span>
                            </div>
                        </div>
                        <div>
                            <button className='bg-[#e4e4e4] darkAnimation dark:bg-[#E4E4E440] text-slate-700 dark:text-white py-3.5 px-4 rounded-2xl'>
                                <MoreIcon />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TrailerVideo;