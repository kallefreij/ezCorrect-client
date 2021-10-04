import { model, Schema, Document, Types, Date } from 'mongoose';

export const DOCUMENT_NAME = "Assignment";
export const COLLECTION_NAME = "Assignment";

export default interface IAssignment extends Document {
    user: string,
    title: string,
    description: string, 
    subjects: string[],
    categories: string[],
    questions: any[],
    dateCreated: Date,
}


const schema = new Schema({
    user:{
        type:Schema.Types.String,
        required:true,
    },
    title:{
        type:Schema.Types.String,
        required:true,
        trim:true,
        maxLength:100
    },
    description:{
        type:Schema.Types.String,
        required:true,
        trim:true,
    },
    subjects:{
        type:Schema.Types.Array,
        required:true,
    },
    categories:{
        type:Schema.Types.Array,
        required:true
    },
    questions: {
        type:Schema.Types.Array,
        required: true
    },
    dateCreated: {
        type:Schema.Types.Date,
        default: Date.now,
        required: true
    }
})

export const AssignmentModel = model<IAssignment>(DOCUMENT_NAME, schema, COLLECTION_NAME);