import myAxios from "../axios";

//奖项总数
export function awardCountAPI() {
    return myAxios({
        url: "/guest/award/awardCount",
        method: 'get',
    })
}

//奖项查询
export function awardQueryAPI(offset, page) {
    return myAxios({
        url: "/guest/award/awardQuery",
        method: 'get',
        params: {
            offset,
            page
        }
    })
}