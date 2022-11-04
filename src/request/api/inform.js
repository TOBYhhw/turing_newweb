import myAxios from "../axios";

//最近通知查询
export function informQueryAPI() {
    return myAxios({
        url: "/guest/inform/informQuery",
        method: 'get'
    })
}
