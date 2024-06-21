import Axios from 'axios'

const getCsrfToken = async () => {
    try {
        await Axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/sanctum/csrf-cookie`, { withCredentials: true})
    } catch (error) {
        console.error('CSRF token fetch failed', error)
    }
}

const http = Axios.create({
    baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
    headers: {
        'X-Requested-With': 'XMLHttpRequest',
    },
    withCredentials: true,
    withXSRFToken: true,
})

// request interceptor
http.interceptors.request.use(
    async (config) => {
        await getCsrfToken()
        return config
    },
    (error) => {
        return Promise.reject(error)
    }
)

export default http
