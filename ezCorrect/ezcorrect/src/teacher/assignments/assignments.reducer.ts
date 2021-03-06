import { IAssignmentMetaData, IQuestion, IScheduledAssignment } from "./assignments.interfaces";
import { ICreateTestQuestionCards } from "./components/create-assignment/createAssignment";
import { IMultiChoiceAlts } from "./components/create-assignment/multiChoiceQuestion/multiCoiceQuestion";
import { ISingleChoiceAlts } from "./components/create-assignment/singleChoiceQuestion/singleChoiceQuestion";
import { ITextAnswer } from "./components/create-assignment/textAnswer/textAnswer";

export const assignmentsActions = {
    fetchAssignmentMetaData: "AssignmentAction/fetchAssignmentMetaData",
    fetchAssignmentMetaDataSuccessful: "AssignmentAction/fetchAssignmentMetaDataSuccessful",
    fetchAssignmentMetaDataFailed: "AssignmentAction/fetchAssignmentMetaDataFailed",
    fetchScheduledAssignment: "AssignmentAction/fetchScheduledAssignment",
    fetchScheduledAssignmentSuccessful: "AssignmentAction/fetchScheduledAssignmentSuccessful",
    fetchScheduledAssignmentFailed: "AssignmentAction/fetchScheduledAssignmentFailed",
    deleteAssignments: "AssignmentAction/deleteAssignments",
    deleteAssignmentsSuccessful: "AssignmentAction/deleteAssignmentsSuccessful",
    deleteAssignmentsFailed: "AssignmentAction/deleteAssignmentsFailed",
    deleteScheduledAssignments: "AssignmentAction/deleteScheduledAssignments",
    deleteScheduledAssignmentsSuccessful: "AssignmentAction/deleteScheduledAssignmentsSuccessful",
    deleteScheduledAssignmentsFailed: "AssignmentAction/deleteScheduledAssignmentsFailed",
    setSelectedQuestion: "AssignmentAction/setSelectedQuestion",
    setMultiChoiceAlts: 'AssignmentAction/setMultiChoiceAlts',
    setSingleChoiceAlts: 'AssignmentAction/setSingleChoiceAlts',
    setTextAnswer: 'AssignmentAction/setTextAnswer',
    updateQuestion: "AssignmentAction/updateQuestion",
    setCreateTestQuestion: 'Assignment/setCreateQuestions',
    setSaveLoadingStatus: 'Assignment/setSaveLoadingStatus',
    setSelectedAssignment: 'Assignment/setSelectedAssignment',
    fetchAssignment: 'Assignment/fetchAssignment',
    fetchAssignmentFailed: 'Assignment/fetchAssignmentFailed',
    fetchAssignmentSuccessful: 'Assignment/fetchAssignmentSuccessful',
    editAssignment: 'Assignment/editAssignment'
}

export interface IAssignmentState {
    fetchingAssignmentMetaData: boolean;
    fetchingAssignmentMetaDataSuccessful: boolean;
    fetchingAssignmentMetaDataFailed: boolean;
    fetchingScheduledAssignment: boolean;
    fetchingScheduledAssignmentSuccessful: boolean;
    fetchingScheduledAssignmentFailed: boolean;
    fetchAssignment: boolean,
    fetchAssignmentFailed: boolean,
    fetchAssignmentSuccessful: boolean;
    deleteAssignments: boolean;
    deleteAssignmentsSuccessful: boolean;
    deleteAssignmentsFailed: boolean;
    deleteScheduledAssignments: boolean;
    deleteScheduledAssignmentsSuccessful: boolean;
    deleteScheduledAssignmentsFailed: boolean;
    assignmentMetadata: any[];
    questions: IQuestion[];
    selectedQuestion: IQuestion;
    multiChoiceAlts: IMultiChoiceAlts[];
    singleChoiceAlts: ISingleChoiceAlts[];
    textAnswer: ITextAnswer[];
    createTestQuestionCards: ICreateTestQuestionCards[];
    saveLoadingStatus: boolean;
    selectedAssignment: IAssignmentMetaData;
    scheduledAssignments: IScheduledAssignment[];
    //selectedAssignment: any;
}

const intitialState: IAssignmentState = {
    fetchingAssignmentMetaData: false,
    fetchingAssignmentMetaDataSuccessful: false,
    fetchingAssignmentMetaDataFailed: false,
    fetchingScheduledAssignment: false,
    fetchingScheduledAssignmentSuccessful: false,
    fetchingScheduledAssignmentFailed: false,
    fetchAssignment: false,
    fetchAssignmentFailed: false,
    fetchAssignmentSuccessful: false,
    deleteAssignments: false,
    deleteAssignmentsSuccessful: false,
    deleteAssignmentsFailed: false,
    deleteScheduledAssignments: false,
    deleteScheduledAssignmentsSuccessful: false,
    deleteScheduledAssignmentsFailed: false,
    assignmentMetadata: [],
    questions: [
        {id: "1", question: "Hur mycket h??r har Roger?", answer: "", correctAnswer: "", number: 1, color: "#D0A1A1", status: 4, questionType: "flerval", points: 0, maxPoint: 2},
        {id: "2", question: "Vem vann minigolfen?", answer: "Jag",correctAnswer: "Det var jadi jasidj iasjdi jsaidjasidjjd dijsd isji dijasidjsiajdis  djiwasjd ijasid jaisjd iasjdi jasdijas idjaisj diasjdiajsdij asdji saijd as asd asd qwdgewrg e erger gerg erg qdqwdwq qdw q dwq d wqd qw qw", number: 2, color: "#A1D0A5", status: 4, questionType: "text", points: 0, maxPoint: 4 },
        {id: "3", question: "1 + 1?", answer: "", correctAnswer: "",  number: 3, color: "#D0A1A1" , status: 2 , questionType: "ettval"},
        {id: "4", question: "Vem vill bli miljon??r?", answer: "",correctAnswer: "", number: 4, color: "#A1D0A5", status: 4 , questionType: "flerval"},
        {id: "5", question: "Vad heter Karlsson p?? taket i f??rnamn?", answer: "HAn uehfu wefhw eufhuwefh uwehf uwehfuh weufhwuehf huwefhuwehf uwehfefe efef", correctAnswer: "", number: 5, color: "#A1D0A5", status: 1 , questionType: "flerval"},
        {id: "6", question: "Vem var Sveriges f??rst president?", answer: "", number: 6, correctAnswer: "", color: "#A1D0A5", status: 1 , questionType: "text"},
        {id: "7", question: "1 * 500?", answer: "", number: 7, correctAnswer: "",color: "#A1D0A5", status: 1, questionType: "flerval" },
        {id: "8", question: "Vad ??r en bil?", answer: "asd as dsd sd sd wqdwwqd wdqdssdg gsdg asd dwq dqwdwq dqwd qwd qdq wd qwdqwdqwdqwdw dw wd w", number: 8, correctAnswer: "",color: "#D0A1A1", status: 1 , questionType: "text", points: 0, maxPoint: 6},
    ],
    multiChoiceAlts: [],
    singleChoiceAlts: [],
    textAnswer:[],
    selectedQuestion: {id: "1", question: "Hur mycket h??r har Roger?", answer: "", correctAnswer: "", number: 1, color: "#D0A1A1", status: 4, questionType: "flerval", points: 0, maxPoint: 2},
    createTestQuestionCards: [
        {id: '1', title: '', description: '', categories: [], subjects: [], cardType: 'header', isSelected: false},
        {id: '2', question: '', questionType: '', cardType: 'question', isSelected: true, isDragDisabled: true, answer: null}
    ],
    saveLoadingStatus: false,
    selectedAssignment: {_id: "0", datestamp: "0", title: "", questions: 0, subject: ""},
    scheduledAssignments: []
}

const assignmentReducer = (state = intitialState, action: any) => {
    switch(action.type){
        case assignmentsActions.fetchAssignmentMetaData:
            return{
                ...state,
                fetchingAssignmentMetaData: true,
                fetchingAssignmentMetaDataSuccessful: false,
                fetchingAssignmentMetaDataFailed: false,
            };
        case assignmentsActions.fetchAssignmentMetaDataSuccessful:
            return{
                ...state,
                fetchingAssignmentMetaData: false,
                fetchingAssignmentMetaDataSuccessful: true,
                fetchingAssignmentMetaDataFailed: false,
                assignmentMetadata: action.payload,
            };
        case assignmentsActions.fetchAssignmentMetaDataFailed:
            return{
                ...state,
                fetchingAssignmentMetaData: false,
                fetchingAssignmentMetaDataSuccessful: false,
                fetchingAssignmentMetaDataFailed: true,
            };
        case assignmentsActions.fetchAssignment:
            return{
                ...state,
                fetchAssignment: true,
                fetchAssignmentFailed: false,
                fetchAssignmentSuccessful: false,
            };
        case assignmentsActions.fetchAssignmentFailed:
            return{
                ...state,
                fetchAssignment: false,
                fetchAssignmentFailed: true,
                fetchAssignmentSuccessful: false,
            };
        case assignmentsActions.fetchAssignmentSuccessful:
            return{
                ...state,
                fetchAssignment: false,
                fetchAssignmentFailed: false,
                fetchAssignmentSuccessful: true,
            };
        case assignmentsActions.deleteAssignments:
            return{
                ...state,
                deleteAssignments: true,
                deleteAssignmentsSuccessful: false,
                deleteAssignmentsFailed: false
            };
        case assignmentsActions.deleteAssignmentsSuccessful:
            return{
                ...state,
                deleteAssignments: false,
                deleteAssignmentsSuccessful: true,
                deleteAssignmentsFailed: false,
                assignmentMetadata: [...state.assignmentMetadata.filter(x => !action.payload.includes(x._id))]
            };
        case assignmentsActions.deleteAssignmentsFailed:
            return{
                ...state,
                deleteAssignments: false,
                deleteAssignmentsSuccessful: false,
                deleteAssignmentsFailed: true
            };
        case assignmentsActions.deleteScheduledAssignments:
            return{
                ...state,
                deleteScheduledAssignments: true,
                deleteScheduledAssignmentsSuccessful: false,
                deleteScheduledAssignmentsFailed: false
            };
        case assignmentsActions.deleteScheduledAssignmentsSuccessful:
            return{
                ...state,
                deleteScheduledAssignments: false,
                deleteScheduledAssignmentsSuccessful: true,
                deleteScheduledAssignmentsFailed: false,
                scheduledAssignments: [...state.scheduledAssignments.filter(x => !action.payload.includes(x._id))]
            };
        case assignmentsActions.deleteScheduledAssignmentsFailed:
            return{
                ...state,
                deleteScheduledAssignments: false,
                deleteScheduledAssignmentsSuccessful: false,
                deleteScheduledAssignmentsFailed: true
            };
        case assignmentsActions.setSelectedQuestion:
            return{
                ...state,
                selectedQuestion: action.payload
            }
        case assignmentsActions.setMultiChoiceAlts:
            return{
                ...state,
                multiChoiceAlts: action.payload
            }
        case assignmentsActions.setSingleChoiceAlts:
            return{
                ...state,
                singleChoiceAlts: action.payload
            }
        case assignmentsActions.setTextAnswer:
            return{
                ...state,
                textAnswer: action.payload
            }
        case assignmentsActions.updateQuestion:
            return{
                ...state,
                selectedQuestion: action.payload.q,
                questions: action.payload.qs
            }
        case assignmentsActions.setCreateTestQuestion:
            return{
                ...state,
                createTestQuestionCards: action.payload,
            }
        case assignmentsActions.setSaveLoadingStatus: 
            return{
                ...state,
                saveLoadingStatus: action.payload,
            }
        case assignmentsActions.setSelectedAssignment:
            return{
                ...state,
                selectedAssignment: [...state.assignmentMetadata.filter(x => action.payload === x._id)][0]
            }
        case assignmentsActions.editAssignment:
            return{
                ...state,
                createTestQuestionCards: action.payload
            }
        case assignmentsActions.fetchScheduledAssignment:
            return{
                ...state,
                fetchingScheduledAssignment: true,
                fetchingScheduledAssignmentSuccessful: false,
                fetchingScheduledAssignmentFailed: false,
        }
        case assignmentsActions.fetchScheduledAssignmentSuccessful:
            return{
                ...state,
                fetchingScheduledAssignment: false,
                fetchingScheduledAssignmentSuccessful: true,
                fetchingScheduledAssignmentFailed: false,
                scheduledAssignments: action.payload,
            }
        case assignmentsActions.fetchScheduledAssignmentFailed:
            return{
                ...state,
                fetchingScheduledAssignment: true,
                fetchingScheduledAssignmentSuccessful: false,
                fetchingScheduledAssignmentFailed: true,
            }
        default:
            return state;
    }
}

export default assignmentReducer;