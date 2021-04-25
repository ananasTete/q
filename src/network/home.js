// home页面所有的网络请求

import {request} from './request';

export function getHomeMultidata() {
    return request({
        url: '/home/multidata',
    })
}

export function getHomeGoods(type, page) {          //请求data数据时，指定了类型和页数，这样只请求某个类型的一页数据
    return request({
        url: '/home/data',
        params: {
            type,
            page,
        }

    })
}
