import axios from "axios"
import { customToast } from "../utils/functions"

const checkExistUser = async (user, password = false) => {
    try {
        const users = await axios.get('/users')
        const result = users.data.find(data => data.email == user.email);
        if (!password) return !!result
        if (!result) return null
        if (user.password == result.password) {
            delete result.password
            return result
        }
        else return false
    } catch (error) {
        return error
    }
}

const signup = async data => {
    try {
        const existUser = await checkExistUser(data)
        if (existUser) return customToast("error", "ایمیل وارد شده، وجود دارد")
        const result = await axios.post('/users', data)
        localStorage.setItem("currentUser", result.data.id)
        setTimeout(() => window.location.replace("/"), 3000);
        return result.data
    } catch (error) {
        return null
    }
}

const login = async data => {
    const existUser = await checkExistUser(data, true)
    if (existUser == null) return customToast("error", "ایمیل وارد شده، وجود ندارد")
    else if (existUser == false) return customToast("error", "ایمیل یا پسورد وارد شده صحیح نیست")
    localStorage.setItem("currentUser", JSON.stringify(existUser))
    setTimeout(() => window.location.replace("/"), 3000);
    return true
}

export {
    signup,
    login
}