import { model, Schema, Document, Types } from 'mongoose';
import { alternativeSchema } from './alternatives.model';

export const DOCUMENT_NAME = "MultiChoiceAnswer";
export const COLLECTION_NAME = "MultiChoiceAnswer";

export default interface IMultiChoiceAnswer extends Document {
    questionId: string,
    alternatives: string[],
    correctAnswers: string[],
    teacher: string,
    questionType: string, 
    maxPoints: number
}

const schema = new Schema({
    assignmentId:{
        type:Schema.Types.String,
        required: true, 
        trim:true,
    },
    question:{
        type:Schema.Types.String,
        required:true,
    },
    teacher:{
        type:Schema.Types.String,
        required:false,
    },
    questionType:{
        type:Schema.Types.String,
        required: true,
    },
    maxPoints:{
        type:Schema.Types.Number,
        required:false,
        default: 1
    },
    alternatives:{
        type: [ alternativeSchema ],
        required: true,
    },
    correctAnswers:{
        type: [ alternativeSchema ],
        required: true,
    },
})

export const MultiChoiceAnswerModel = model<IMultiChoiceAnswer>(DOCUMENT_NAME, schema, COLLECTION_NAME);