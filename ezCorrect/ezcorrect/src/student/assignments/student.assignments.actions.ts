import { studentAssignmentsActions } from "./student.assignments.reducer";

const axios = require('axios').default;

export const fetchStudentAssignmentsMetaData = (user:string) => async (dispatch: any) => {
    dispatch({type: studentAssignmentsActions.fetchAssignmentMetaData});    
    const res = await axios.get('http://localhost:4000/api/scheduledAssignments/studentAssignmentsMetaData/' + user);
    if(res.status === 200){
        console.log(res.data)
        dispatch({type: studentAssignmentsActions.fetchAssignmentMetaDataSuccessful, payload: res.data.assignments});
    }  
    else {
        dispatch({type: studentAssignmentsActions.fetchAssignmentMetaDataFailed});
    }       
}
