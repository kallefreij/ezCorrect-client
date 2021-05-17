import { assignmentsActions } from "./assignments.reducer"

export const fetchAssignmentsNow = () => async (dispatch: any) => {
    dispatch({type: assignmentsActions.fetchAssignmentMetaData});
    const axios = require('axios').default;
    const res = await axios.get('http://localhost:4000/api/tasks/metaData');
    if(res.status == 200) dispatch({type: assignmentsActions.fetchAssignmentMetaDataSuccessful, payload: res.data.tasks});
    else dispatch({type: assignmentsActions.fetchAssignmentMetaDataFailed});
}