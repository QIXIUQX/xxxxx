import { request } from './request'


// 获取首页数据
export function getHomeData(config) {
    return request({
        url: "/jx3servers",
    })
}