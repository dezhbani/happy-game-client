import React, { useState } from 'react';
import { emailValidation } from '../../validations/auth.validation';
import { login } from '../../services/auth.service';
import { Link } from 'react-router-dom';

//Images
import logo from '../../assets/Logo.svg'
import { customToast } from '../../utils/functions';
import SmileIcon from '../../assets/icons/SmileIcon';
import LoadingButton from '../../modules/LoadingButton';
import VisibleIcon from '../../assets/icons/VisibleIcon';

const LoginForm = () => {
    const [data, setData] = useState({
        email: "",
        password: ""
    })
    const [visiblity, setVisiblity] = useState(false)
    const [loading, setLoading] = useState(false)

    const handleChange = e => {
        const { name, value } = e.target;
        setData(prevData => ({
            ...prevData,
            [name]: value,
        }));
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        const result = emailValidation(data.email)
        if (result) {
            const loginResult = await login(data)
            if (loginResult) {
                customToast(null,
                    <div className="flex items-center gap-2">
                        <SmileIcon />
                        <span>خوش اومدی! ورود موفقیت‌آمیز بود</span>
                    </div>
                )
                return setTimeout(() => setLoading(false), 4000);
            } else setLoading(false)
        } else setLoading(false)
    }

    return (
        <form className="w-full m-auto space-y-10 max-w-lg p-8 dir-rtl bg-white dark:bg-dark-gray bg-opacity-85 rounded-2xl shadow-soft dark:shadow-[#ffffff16] dark:shadow-[1px_1px_30px_10px]">
            <div className='w-full justify-center flex flex-col space-y-6'>
                <div className='w-full flex justify-center'>
                    <div className='h-24 w-24 flex items-center justify-center bg-gray/5 shadow-xl rounded-full'>
                        <img className='h-12' src={logo} alt='logo' />
                    </div>
                </div>
                <h2 className="darkAnimation text-2xl font-bold text-center text-slate-700 dark:text-white placeholder:text-white">ورود به حساب کاربری</h2>
            </div>
            <div className='space-y-6 mt-5'>
                <input
                    type="email"
                    name="email"
                    required
                    onChange={handleChange}
                    value={data.email}
                    autoComplete='email'
                    placeholder='ایمیل'
                    disabled={loading}
                    className="darkAnimation transition-colors w-full h-12 text-lg text-slate-700 dark:text-white px-3 py-2 rounded-md focus:border border-violet outline-none disabled:opacity-50 bg-[rgb(244,245,247)] dark:bg-[#35384d] placeholder:float-right"
                />
                <div className='relative'>
                    <input
                        type={visiblity ? "password" : "text"}
                        name="password"
                        required
                        autoComplete='off'
                        onChange={handleChange}
                        value={data.password}
                        placeholder='رمز عبور'
                        disabled={loading}

                        className="darkAnimation transition-colors w-full h-12 text-lg dark:text-slate-700 dark:text-white px-3 py-2 rounded-md focus:border border-violet outline-none disabled:opacity-50 bg-[rgb(244,245,247)] dark:bg-[#35384d] dir-rtl"
                    />
                    <VisibleIcon onClick={() => setVisiblity(!visiblity)} containerClass='absolute top-3 left-2' visiblity={visiblity} />
                </div>
            </div>

            <div className='space-y-4'>
                <LoadingButton
                    type="submit"
                    onClick={handleSubmit}
                    className="darkAnimation w-full h-12 py-2 px-4 bg-gradient-to-r from-[#6c5dd3]/80 dark:from-[#6c5dd3] to-[#c5bdfa] dark:to-[#4C1D95] text-white font-semibold rounded-md focus:outline-none"
                    loading={loading}>
                    ورود
                </LoadingButton>
                <p className='text-[#3882f6] dark:text-[#3A8BED] font-bold text-sm'>
                    <Link to="/signup">
                        ایجاد حساب کاربری!
                    </Link>
                </p>
            </div>
        </form>
    );
};

export default LoginForm;