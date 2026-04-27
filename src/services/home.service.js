import axios from "axios"

const getSlider = async () => {
    try {
        const result = await axios.get('/sliders')
        return result.data
    } catch (error) {
        return null
    }
}
const getProducts = async () => {
    try {
        const result = await axios.get('/products')
        return result.data
    } catch (error) {
        return null
    }
}
const getArticles = async () => {
    try {
        const result = await axios.get('/articles')
        return result.data
    } catch (error) {
        return null
    }
}
const getReviews = async () => {
    try {
        const result = await axios.get('/reviews')
        return result.data
    } catch (error) {
        return null
    }
}
const getTrailers = async () => {
    try {
        const result = await axios.get('/trailers')
        return result.data
    } catch (error) {
        return null
    }
}
const getTrailerVideo = async id => {
    try {
        const result = await axios.get(`/trailerVideo${id ? `/${id}` : ''}`)
        return result.data
    } catch (error) {
        return null
    }
}

export {
    getSlider,
    getProducts,
    getArticles,
    getReviews,
    getTrailers,
    getTrailerVideo
}