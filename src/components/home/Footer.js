import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Icons
import Twitter from '../../assets/icons/Twitter.svg'
import Instagram from '../../assets/icons/Instagram.svg'
import Whatsapp from '../../assets/icons/Whatsapp.svg'
import Linkedin from '../../assets/icons/Linkedin.svg'
import ArrowLeft from '../../assets/icons/ArrowLeft.svg'
import Message from '../../assets/icons/Message.svg'

// Images
import image1 from '../../assets/footer/metal_gear_solid.jpg'
import image2 from '../../assets/footer/marathon-announce-press-kit-large-02-1684967832285 1.jpg'
import image3 from '../../assets/footer/img.jpg'
import Enamd from '../../assets/footer/logo 1.png'
import Kasbokar from '../../assets/footer/kasbokar 1.png'
import Samandehi from '../../assets/footer/rezi 1.png'
import { customToast } from '../../utils/functions';
import { emailValidation } from '../../validations/auth.validation';
import Image from '../../modules/Image';

const Footer = () => {
    const [email, setEmail] = useState("")
    const savedEmail = () => {
        const result = emailValidation(email)
        if (result) return customToast("success", "ایمیل شما برای اطلاع از اخبار ثبت شد")
    }

    const handleChange = event => setEmail(event.target.value)

    return (
        <div className='w-full text-slate-800 dark:text-white font-normal dir-rtl'>
            <div className='darkAnimation bg-white dark:bg-[#33353b] px-6 md:px-24'>
                <div className='flex lg:justify-between justify-center max-lg:flex-col max-lg:flex-wrap w-full max-w-screen-xl m-auto'>
                    <div className='flex max-lg:justify-between w-full'>
                        <div className='ml-auto sm:px-5 my-6 lg:my-16 max-w-80'>
                            <h6 className='text-base sm:text-lg md:text-xl font-bold'>داغترین مطالب هفته</h6>
                            <ul className="flex flex-col mt-6 lg:mt-14 gap-4 text-sm md:text-md">
                                {
                                    [
                                        { img: image1, text: 'این هفته چه بازی های معرفی می شوند.' },
                                        { img: image2, text: 'جدیدترین تریلر بازی های جدید' },
                                        { img: image3, text: 'این هفته چه بازی های معرفی می شوند.' }
                                    ].map((item, idx) => (
                                        <li key={idx} className="flex">
                                            <Link className="flex" to="#">
                                                <Image className="w-24 h-[4.25rem] rounded-xl" src={item.img} alt="image" />
                                                <p className="w-40 mr-2 font-light">{item.text}</p>
                                            </Link>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                        <div className='mx-auto px-5 min-w-fit max-sm:hidden my-6 lg:my-16'>
                            <h6 className='text-md sm:text-lg md:text-xl font-bold'>پربازدیدترین صفحات</h6>
                            <ul className="flex flex-col mt-6 lg:mt-14 gap-4 lg:gap-5 text-sm md:text-base">
                                {['مقالات', 'فروشگاه', 'درباره ما', 'تماس با ما', 'جدیدترین بازی ها'].map((title, i) => (
                                <li key={i}>
                                    <Link to="#">{title}</Link>
                                </li>
                            ))}
                            </ul>
                        </div>
                    </div>
                    <div className='lg:mr-10 my-6 lg:my-16 flex flex-col justify-around mx-auto w-full max-[1124px]:lg:max-w-[340px] max-w-[410px]'>
                        <h6 className='text-xl font-bold'>عضویت در خبرنامه</h6>
                        <div className='flex flex-col mt-6 lg:mt-14 gap-4 text-base'>
                            <div className='flex items-center w-full '>
                                <span className='relative w-full'>
                                    <img className='absolute right-3 top-1' src={Message} alt='Message' />
                                    <input className='darkAnimation bg-gray/15 dark:bg-gray outline-none w-full h-[50px] pl-2 dir-ltr placeholder:float-right pr-16 rounded-2xl placeholder:text-slate-700 dark:placeholder:text-white placeholder:font-normal' value={email} onChange={handleChange} type='email' placeholder='ایمیل خود را وارد کنید' />
                                </span>
                                <button onClick={savedEmail} className='bg-violet p-3 mx-2 rounded-2xl'>
                                    <img className='h-6' src={ArrowLeft} alt='ArrowLeft' />
                                </button>
                            </div>
                            <div className='bg-white py-5 w-full flex justify-between rounded-xl'>
                                {[Enamd, Kasbokar, Samandehi].map((logo, idx) => (
                                    <img key={idx} className="h-24 sm:h-32" src={logo} alt={`logo-${idx}`} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-orange h-14 px-5 md:px-24'>
                <div className='flex text-white text-xs justify-between md:text-base items-center h-full max-w-screen-xl m-auto'>
                    <p> &copy; کپی مطالب تنها با مجوز مکتوب مجاز است.</p>
                    <div className='flex'>
                        {[Twitter, Instagram, Whatsapp, Linkedin].map((icon, idx) => (
                            <img
                                key={idx}
                                className={`h-5 sm:h-7 px-2 first:pr-0 last:pl-0`}
                                src={icon}
                                alt={`icon-${idx}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;








// const Footerd = () => {
//     const [email, setEmail] = useState('');

//     const savedEmail = () => {
//         const result = emailValidation(email);
//         if (result) customToast('success', 'ایمیل شما برای اطلاع از اخبار ثبت شد');
//     };

//     return (
//         <div className="w-full text-white font-normal dir-rtl">
//             <div className="bg-[#33353b] px-6 md:px-24">
//                 <div className="flex flex-col lg:flex-row lg:justify-between max-w-screen-xl m-auto">
//                     {/* Hot News */}
//                     <div className="mx-auto px-5 my-6 lg:my-16 max-w-80">
//                         <h6 className="text-lg md:text-xl font-bold">داغترین مطالب هفته</h6>
//                         <ul className="flex flex-col mt-6 lg:mt-14 gap-4 text-sm md:text-base">
//                             {
//                                 [
//                                     { img: image1, text: 'این هفته چه بازی های معرفی می شوند.' },
//                                     { img: image2, text: 'جدیدترین تریلر بازی های جدید' },
//                                     { img: image3, text: 'این هفته چه بازی های معرفی می شوند.' }
//                                 ].map((item, idx) => (
//                                     <li key={idx} className="flex">
//                                         <Link className="flex" to="#">
//                                             <img className="w-24 h-[4.25rem] rounded-xl" src={item.img} alt="image" />
//                                             <p className="w-48 mr-2 font-light">{item.text}</p>
//                                         </Link>
//                                     </li>
//                                 ))
//                             }
//                         </ul>
//                     </div>

//                     {/* Popular Pages */}
//                     <div className="mx-auto px-5 w-44 my-6 lg:my-16">
//                         <h6 className="text-lg md:text-xl font-bold">پربازدیدترین صفحات</h6>
//                         <ul className="flex flex-col mt-6 lg:mt-14 gap-4 lg:gap-5 text-sm md:text-base">
//                             {['مقالات', 'فروشگاه', 'درباره ما', 'تماس با ما', 'جدیدترین بازی ها'].map((title, i) => (
//                                 <li key={i}>
//                                     <Link to="#">{title}</Link>
//                                 </li>
//                             ))}
//                         </ul>
//                     </div>

//                     {/* Newsletter */}
//                     <div className="lg:mr-10 my-6 lg:my-16 flex flex-col justify-around mx-auto w-full max-w-[410px]">
//                         <h6 className="text-xl font-bold">عضویت در خبرنامه</h6>
//                         <div className="flex flex-col mt-6 lg:mt-14 gap-4 text-base">
//                             <div className="flex items-center w-full">
//                                 <span className="relative w-full">
//                                     <img className="absolute right-3 top-1" src={Message} alt="Message" />
//                                     <input
//                                         className="bg-gray outline-none w-full h-[50px] pl-2 dir-ltr placeholder:float-right pr-16 rounded-2xl placeholder:text-white placeholder:font-normal"
//                                         value={email}
//                                         onChange={(e) => setEmail(e.target.value)}
//                                         type="email"
//                                         placeholder="ایمیل خود را وارد کنید"
//                                     />
//                                 </span>
//                                 <button onClick={savedEmail} className="bg-violet p-3 mx-2 rounded-2xl">
//                                     <img className="h-6" src={ArrowLeft} alt="ArrowLeft" />
//                                 </button>
//                             </div>
//                             <div className="bg-white py-5 w-full flex justify-between rounded-xl">
//                                 {[Enamd, Kasbokar, Samandehi].map((logo, idx) => (
//                                     <img key={idx} className="h-24 sm:h-32" src={logo} alt={`logo-${idx}`} />
//                                 ))}
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             {/* Footer Bottom */}
//             <div className="bg-orange h-14 px-5 md:px-24">
//                 <div className="flex text-xs md:text-base justify-between items-center h-full max-w-screen-xl m-auto">
//                     <p className=' !text-white'>&copy; کپی مطالب تنها با مجوز مکتوب مجاز است.</p>
//                     <div className="flex">
//                         {[Twitter, Instagram, Whatsapp, Linkedin].map((icon, idx) => (
//                             <img
//                                 key={idx}
//                                 className={`h-5 sm:h-7 px-2 first:pr-0 last:pl-0 ${idx === 0 ? '' : idx === 3 ? '' : 'px-2'}`}
//                                 src={icon}
//                                 alt={`icon-${idx}`}
//                             />
//                         ))}
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Footer;
