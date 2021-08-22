import { model, Schema, Document, Types } from 'mongoose';

export const DOCUMENT_NAME = "Assignment";
export const COLLECTION_NAME = "Assignemnt";

export default interface IAssignment extends Document {
    title: string,
    description: string, 
    subjects: string[],
    categories: string[],
    questions: any[],
}

const schema = new Schema({
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
    }
})

export const AssignmentModel = model<IAssignment>(DOCUMENT_NAME, schema, COLLECTION_NAME);