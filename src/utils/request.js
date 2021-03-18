import axios from 'axios'

// create an axios instance
const service = axios.create({
    timeout: 30000
})

// request interceptor
service.interceptors.request.use(config => {
    const params = config.data || {}
    let paramsStr = ''
    for (const i in params) {
        paramsStr += i + '=' + encodeURIComponent(trim(params[i])) + '&'
    }
    config.data = paramsStr.substring(0, paramsStr.length - 1)
    return config
}, error => {
    // Do something with request error
    console.log(error)
    Promise.reject(error)
})

// respone interceptor
service.interceptors.response.use(response => {
    const res = response.data
    return res
}, error => {
    console.error(error)
    return Promise.reject(error)
})

export default service
