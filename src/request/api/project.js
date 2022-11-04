import myAxios from "../axios";

//团队项目查询
export function queryProjectAPI(offset, page) {
    return myAxios({
        url: "/guest/project/queryProject",
        method: 'get',
        params: {
            offset,
            page
        }
    })
}

//通过id查询团队项目详细信息
export function queryProjectByIdAPI(id) {
    return myAxios({
        url: "/guest/project/queryProjectById",
        method: 'get',
        params: {
            id
        }
    })
}