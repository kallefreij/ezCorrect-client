import { model, Schema, Document, Types } from 'mongoose';

export const DOCUMENT_NAME = "TextAnswer";
export const COLLECTION_NAME = "textAnswer";

export default interface ITextAnswer extends Document {
    assignmentId: string,
    answer: string,
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
    answer:{
        type:Schema.Types.String,
        required:true,
    },

})

export const TextAnswerModel = model<ITextAnswer>(DOCUMENT_NAME, schema, COLLECTION_NAME);