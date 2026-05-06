import { toast } from "react-toastify";

const textMaxLength = (text = "", max = 110) => {
    if (text.length > max) return text.slice(0, max - 5) + " ..."
    else return text
}

const customToast = (type, message) => {
    const options = {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: false,
        closeButton: false,
        className: "darkAnimation font-iranSans dir-rtl shadow-[#F0F3F61A] shadow-md min-w-max w-fit min-h-max h-fit flex justify-center dark:bg-dark-gray text-dark-gray dark:text-white rounded-full text-sm md:text-base mt-5 px-5 py-3"
    }
    type ? toast[type](message, options) : toast(message, options)
};

export {
    textMaxLength,
    customToast
}