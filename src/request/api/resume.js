import myAxios from "../axios";

//面试简历模板下载地址
export function getMobanUrlAPI() {
    return myAxios({
        url: "/guest/resume/getMobanUrl",
        method: 'get',
    })
}

//创业组内容填写
export function resumeEntrepreneurshipAddAPI(data) {
    return myAxios({
        url: "/guest/resume/resumeEntrepreneurshipAdd",
        method: 'post',
        params: data
    })
}

//创新组内容填写
export function resumeInnovateAddAPI(data) {
    return myAxios({
        url: "/guest/resume/resumeInnovateAdd",
        method: 'post',
        params: data
    })
}
//根据学号查询简历内容
export function ResumeQueryByIdAPI(StudentId) {
    return myAxios({
        url: "/guest/resume/ResumeQueryById",
        method: 'get',
        params: { StudentId }
    })
}