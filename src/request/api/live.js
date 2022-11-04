import myAxios from "../axios";

//团队活动内容查询
export function liveQueryAPI(offset, page) {
    return myAxios({
        url: "/guest/live/liveQuery",
        method: 'get',
        params: {
            offset,
            page
        }
    })
}

//团队活动内容根据ID获取
export function liveQueryByIdAPI(liveId) {
    return myAxios({
        url: "/guest/live/liveQueryById",
        method: 'get',
        params: { liveId }
    })
}

