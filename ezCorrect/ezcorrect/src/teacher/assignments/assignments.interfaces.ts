export interface IAssignmentMetaData{
    datestamp: string;
    _id: string;
    questions: number;
    subject: string;
    title: string;
}

export interface IQuestion{
    id: string;
    questionType: string;
    question: string;
    answer: string;
    correctAnswer: string;
    number: number;
    color: string;
    status: number;
    points?: number;
    maxPoint?: number;
}

export interface IQuestionProps{
    question: IQuestion;
}

export interface IScheduledAssignment{
    creator: string,
    title: string,
    assignmentId: string
    assignedTo: string,
    startTime: Date,
    endTime: Date,
}