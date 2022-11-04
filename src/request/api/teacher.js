import myAxios from "../axios";

//团队教师查询
export function queryTeacherAPI() {
    return myAxios({
        url: "/guest/teacher/queryTeacher",
        method: 'get',

    })
}