import myAxios from "../axios";

//团队简介查询全部
export function introductionQueryAllAPI() {
    return myAxios({
        url: "/guest/introduction/introductionQueryAll",
        method: 'get'
    })
}

//最新的团队简介
export function introductionQueryLastingOneAPI(liveId) {
    return myAxios({
        url: "/guest/introduction/introductionQueryLastingOne",
        method: 'get'
    })
}