import myAxios from "../axios";

//领导视察ID查询
export function LeaderInspectionIncidentQueryAPI(incidentId) {
    return myAxios({
        url: "/guest/leaderInspectionIncident/LeaderInspectionIncidentQuery",
        method: 'get',
        params: { incidentId }
    })
}

//领导视察全查询
export function LeaderInspectionIncidentQueryAllAPI() {
    return myAxios({
        url: "/guest/leaderInspectionIncident/LeaderInspectionIncidentQueryAll",
        method: 'get',

    })
}