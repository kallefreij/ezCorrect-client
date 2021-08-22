import { model, Schema, Document, Types } from 'mongoose';

export const DOCUMENT_NAME = "Question";
export const COLLECTION_NAME = "Question";

export default interface IAlternatives extends Document {
    value: string; 
    isCorrect: boolean;
}

export const alternativeSchema = new Schema({
    value:{
        type:Schema.Types.String,
        required: true,
    },
    isCorrect:{
        type:Schema.Types.Boolean,
        required:true
    }
})


export const AlternativesModel = model<IAlternatives>(DOCUMENT_NAME, alternativeSchema, COLLECTION_NAME);