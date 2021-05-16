import { assignmentsActions } from "./assignments.reducer"

export const fetchAssignmentsNow = () => async (dispatch: any) => {
    console.log("dasdadasdasd")
    dispatch({type: assignmentsActions.fetchAssignmentMetaData});
    const axios = require('axios').default;
    const res = await axios.get('http://localhost:4000/api/tasks/metaData');
    console.log(res);
    dispatch({type: assignmentsActions.fetchAssignmentMetaDataSuccessful, payload: res});
}