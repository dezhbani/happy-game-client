import React, { useState } from 'react';
import { emailValidation, passwordValidation } from '../../validations/auth.validation';
import { signup } from '../../services/auth.service';
import { Link } from 'react-router-dom';
import { customToast } from '../../utils/functions';

//Images
import logo from '../../assets/Logo.svg'
import SmileIcon from '../../assets/icons/SmileIcon';
import LoadingButton from '../../modules/LoadingButton';
import useDarkMode from '../../hooks/useDarkMode';
import VisibleIcon from '../../assets/icons/VisibleIcon';

const SignupForm = () => {
    const [data, setData] = useState({
        email: "",
        password: "",
        repeatPassword: ""
    })
    const [visiblity, setVisiblity] = useState({
        password: false,
        repeatPassword: false
    })
    const [loading, setLoading] = useState(false)

    const handleChange = e => {
        const { name, value } = e.target;
        setData(prevData => ({
            ...prevData,
            [name]: value,
        }));
    }

    const verifyData = () => {
        const emailResult = emailValidation(data.email)
        if (emailResult) {
            const passwordResult = passwordValidation(data.password)
            if (passwordResult && !data.repeatPassword) return customToast("error", "تکرار رمز عبور نمیتواند خالی باشد")
            else if (data.password !== data.repeatPassword) return customToast("error", "رمز عبور و تکرار رمز عبور باید یکسان باشد")
            else return true
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        const result = verifyData()
        if (result) {
            const signupResult = await signup(data)
            if (signupResult) {
                customToast(null,
                    <div className="flex items-center gap-2">
                        <SmileIcon />
                        <span>خوش اومدی! ثبت نام موفقیت‌آمیز بود</span>
                    </div>
                )
                return setTimeout(() => setLoading(false), 4000);
            } else setLoading(false)
        } else setLoading(false)
    }
    const handleVisiblity = (name) => () => {
        setVisiblity((prev) => ({
            ...prev,
            [name]: !prev[name]
        }));

    }

    return (
        <form autoComplete='none' className="darkAnimation w-full m-auto space-y-10 max-w-lg p-8 dir-rtl bg-white dark:bg-dark-gray bg-opacity-85 rounded-2xl shadow-soft dark:shadow-[#ffffff16] dark:shadow-[1px_1px_30px_10px] ">
            <div className='w-full justify-center flex flex-col space-y-6'>
                <div className='w-full flex justify-center'>
                    <div className='h-24 w-24 flex items-center justify-center bg-gray/5 shadow-xl rounded-full'>
                        <img className='h-12' src={logo} alt='logo' />
                    </div>
                </div>
                <h2 className="darkAnimation text-2xl font-bold text-center text-slate-700 dark:text-white placeholder:text-white">ایجاد حساب کاربری</h2>
            </div>
            <div className='space-y-6 mt-5 dir-ltr'>
                <input
                    type="email"
                    name="email"
                    required
                    autoComplete='email'
                    onChange={handleChange}
                    value={data.email}
                    placeholder='ایمیل'
                    disabled={loading}
                    className="darkAnimation transition-colors w-full h-12 text-lg text-slate-700 dark:text-white px-3 py-2 rounded-md focus:border border-violet outline-none disabled:opacity-50 bg-[rgb(244,245,247)] dark:bg-[#35384d] dir-rtl"
                />
                <div className='relative'>
                    <input
                        type={visiblity.password ? "password" : "text"}
                        name="password"
                        required
                        autoComplete='off'
                        onChange={handleChange}
                        value={data.password}
                        placeholder='رمز عبور'
                        disabled={loading}

                        className="darkAnimation transition-colors w-full h-12 text-lg dark:text-slate-700 dark:text-white px-3 py-2 rounded-md focus:border border-violet outline-none disabled:opacity-50 bg-[rgb(244,245,247)] dark:bg-[#35384d] dir-rtl"
                    />
                    <VisibleIcon onClick={handleVisiblity("password")} containerClass='absolute top-3 left-2' visiblity={visiblity.password} />
                </div>
                <div className='relative'>
                    <input
                        type={visiblity.repeatPassword ? "password" : "text"}
                        name="repeatPassword"
                        required
                        autoComplete='off'
                        onChange={handleChange}
                        value={data.repeatPassword}
                        placeholder='تکرار رمز عبور'
                        disabled={loading}
                        className="darkAnimation transition-colors w-full h-12 text-lg text-slate-700 dark:text-white px-3 py-2 rounded-md focus:border border-violet outline-none disabled:opacity-50 bg-[rgb(244,245,247)] dark:bg-[#35384d] dir-rtl"
                    />
                    <VisibleIcon onClick={handleVisiblity("repeatPassword")} containerClass='absolute top-3 left-2' visiblity={visiblity.repeatPassword} />
                </div>
            </div>

            <div className='space-y-4'>
                <LoadingButton
                    type="submit"
                    onClick={handleSubmit}
                    className="darkAnimation w-full h-12 py-2 px-4 bg-gradient-to-r from-[#6c5dd3]/80 dark:from-[#6c5dd3] to-[#c5bdfa] dark:to-[#4C1D95] text-white font-semibold rounded-md focus:outline-none"
                    loading={loading}>
                    ثبت نام
                </LoadingButton>
                <p className='text-[#3882f6] dark:text-[#3A8BED] font-bold text-sm'>
                    <Link to="/login">
                        حساب کاربری دارید؟
                    </Link>
                </p>
            </div>
        </form>
    );
};

export default SignupForm;