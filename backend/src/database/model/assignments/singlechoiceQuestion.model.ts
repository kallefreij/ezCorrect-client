import { model, Schema, Document, Types } from 'mongoose';
import { alternativeSchema } from './alternatives.model';

export const DOCUMENT_NAME = "SingleChoiceAnswer";
export const COLLECTION_NAME = "SingleChoiceAnswer";

export default interface ISingleChoiceAnswer extends Document {
    assignmentId: string,
    alternatives: string[],
    correctAnswer: string,
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
    alternatives: {
        type: [ alternativeSchema ],
        required: true,
    },
    correctAnswer:{
        type: alternativeSchema,
        required:true,
    },
})

export const SingleChoiceAnswerModel = model<ISingleChoiceAnswer>(DOCUMENT_NAME, schema, COLLECTION_NAME);