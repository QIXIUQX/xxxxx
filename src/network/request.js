import axios from "axios"

export function request(config) {

    const instance = axios.create({
        baseURL: "https://spider.jx3box.com",
        timeout: 5000,

    })
    // 请求拦截
    instance.interceptors.request.use(config => {
        // 请求成功拦截
        return config
    }, err => {
        // 请求失败拦截
        return err
    })
    // 响应拦截
    instance.interceptors.response.use(res => {
        // 响应成功拦截
        return res
    }, err => {
        // 响应失败拦截
        return err
    })




    return instance(config)
}