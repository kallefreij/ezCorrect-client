export interface IAssignmentMetaData{
    datestamp: string;
    id: string;
    questions: number;
    subject: string;
    title: string;
}

export interface IQuestion{
    id: string;
    question: string;
    answer: string;
    number: number;
    color: string;
}