import { IAssignmentMetaData, IQuestion } from "./assignments.interfaces";
import { ICreateTestQuestionCards } from "./components/create-assignment/createAssignment";
import { IMultiChoiceAlts } from "./components/create-assignment/multiChoiceQuestion/multiCoiceQuestion";
import { ISingleChoiceAlts } from "./components/create-assignment/singleChoiceQuestion/singleChoiceQuestion";
import { ITextAnswer } from "./components/create-assignment/textAnswer/textAnswer";

export const assignmentsActions = {
    fetchAssignmentMetaData: "AssignmentAction/fetchAssignmentMetaData",
    fetchAssignmentMetaDataSuccessful: "AssignmentAction/fetchAssignmentMetaDataSuccessful",
    fetchAssignmentMetaDataFailed: "AssignmentAction/fetchAssignmentMetaDataFailed",
    deleteAssignments: "AssignmentAction/deleteAssignments",
    deleteAssignmentsSuccessful: "AssignmentAction/deleteAssignmentsSuccessful",
    deleteAssignmentsFailed: "AssignmentAction/deleteAssignmentsFailed",
    setSelectedQuestion: "AssignmentAction/setSelectedQuestion",
    setMultiChoiceAlts: 'AssignmentAction/setMultiChoiceAlts',
    setSingleChoiceAlts: 'AssignmentAction/setSingleChoiceAlts',
    setTextAnswer: 'AssignmentAction/setTextAnswer',
    updateQuestion: "AssignmentAction/updateQuestion",
    setCreateTestQuestion: 'Assignment/setCreateQuestions',
    setSaveLoadingStatus: 'Assignment/setSaveLoadingStatus',
}

export interface IAssignmentState {
    fetchingAssignmentMetaData: boolean;
    fetchingAssignmentMetaDataSuccessful: boolean;
    fetchingAssignmentMetaDataFailed: boolean;
    deleteAssignments: boolean;
    deleteAssignmentsSuccessful: boolean;
    deleteAssignmentsFailed: boolean;
    assignmentMetadata: IAssignmentMetaData[];
    questions: IQuestion[];
    selectedQuestion: IQuestion;
    multiChoiceAlts: IMultiChoiceAlts[];
    singleChoiceAlts: ISingleChoiceAlts[];
    textAnswer: ITextAnswer[];
    createTestQuestionCards: ICreateTestQuestionCards[];
    saveLoadingStatus: boolean;
}

const intitialState: IAssignmentState = {
    fetchingAssignmentMetaData: false,
    fetchingAssignmentMetaDataSuccessful: false,
    fetchingAssignmentMetaDataFailed: false,
    deleteAssignments: false,
    deleteAssignmentsSuccessful: false,
    deleteAssignmentsFailed: false,
    assignmentMetadata: [],
    questions: [
        {id: "1", question: "Hur mycket hår har Roger?", answer: "", correctAnswer: "", number: 1, color: "#D0A1A1", status: 4, questionType: "flerval", points: 0, maxPoint: 2},
        {id: "2", question: "Vem vann minigolfen?", answer: "Jag",correctAnswer: "Det var jadi jasidj iasjdi jsaidjasidjjd dijsd isji dijasidjsiajdis  djiwasjd ijasid jaisjd iasjdi jasdijas idjaisj diasjdiajsdij asdji saijd as asd asd qwdgewrg e erger gerg erg qdqwdwq qdw q dwq d wqd qw qw", number: 2, color: "#A1D0A5", status: 4, questionType: "text", points: 0, maxPoint: 4 },
        {id: "3", question: "1 + 1?", answer: "", correctAnswer: "",  number: 3, color: "#D0A1A1" , status: 2 , questionType: "ettval"},
        {id: "4", question: "Vem vill bli miljonär?", answer: "",correctAnswer: "", number: 4, color: "#A1D0A5", status: 4 , questionType: "flerval"},
        {id: "5", question: "Vad heter Karlsson på taket i förnamn?", answer: "HAn uehfu wefhw eufhuwefh uwehf uwehfuh weufhwuehf huwefhuwehf uwehfefe efef", correctAnswer: "", number: 5, color: "#A1D0A5", status: 1 , questionType: "flerval"},
        {id: "6", question: "Vem var Sveriges först president?", answer: "", number: 6, correctAnswer: "", color: "#A1D0A5", status: 1 , questionType: "text"},
        {id: "7", question: "1 * 500?", answer: "", number: 7, correctAnswer: "",color: "#A1D0A5", status: 1, questionType: "flerval" },
        {id: "8", question: "Vad är en bil?", answer: "asd as dsd sd sd wqdwwqd wdqdssdg gsdg asd dwq dqwdwq dqwd qwd qdq wd qwdqwdqwdqwdw dw wd w", number: 8, correctAnswer: "",color: "#D0A1A1", status: 1 , questionType: "text", points: 0, maxPoint: 6},
    ],
    multiChoiceAlts: [],
    singleChoiceAlts: [],
    textAnswer:[],
    selectedQuestion: {id: "1", question: "Hur mycket hår har Roger?", answer: "", correctAnswer: "", number: 1, color: "#D0A1A1", status: 4, questionType: "flerval", points: 0, maxPoint: 2},
    createTestQuestionCards: [
        {id: '1', title: '', description: '', categories: [], subjects: [], cardType: 'header', isSelected: false},
        {id: '2', question: '', questionType: '', cardType: 'question', isSelected: true, isDragDisabled: true, answer: null}
    ],
    saveLoadingStatus: false,
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
                assignmentMetadata: [...state.assignmentMetadata.filter(x => !action.payload.includes(x.id))]
            };
        case assignmentsActions.deleteAssignmentsFailed:
            return{
                ...state,
                deleteAssignments: false,
                deleteAssignmentsSuccessful: false,
                deleteAssignmentsFailed: true
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
        default:
            return state;
    }
}

export default assignmentReducer;