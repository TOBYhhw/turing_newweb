import myAxios from "../axios";

//查询团队成员信息
export function queryMemberAPI(offset, page) {
    return myAxios({
        url: "/guest/member/queryMember",
        method: 'get',
        params: {
            offset,
            page
        }
    })
}

//查询团队成员信息根据方向
export function queryMemberByDirectionAPI(direction, offset, page) {
    return myAxios({
        url: "/guest/member/queryMemberByDirection",
        method: 'get',
        params: {
            direction,
            offset,
            page
        }
    })
}