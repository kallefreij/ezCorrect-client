import { model, Schema, Document, Types, Date } from 'mongoose';

export const DOCUMENT_NAME = "ScheduledAssignment";
export const COLLECTION_NAME = "ScheduledAssignment";

export default interface IScheduledAssignment extends Document {
    user: string,
    title: string,
    assignmentId: string,
    assignedTo: string,
    startTime: Date,
    endTime: Date,
    dateCreated: Date,
    studentUser: string
}


const schema = new Schema({
    creator:{
        type:Schema.Types.String,
        required:true,
    },
    title:{
        type:Schema.Types.String,
        required:true,
    },
    assignedTo:{
        type:Schema.Types.String,
    },
    assignmentId:{
        type:Schema.Types.String,
        required:true,
    },
    startTime: {
        type:Schema.Types.Date,
        required: true
    },
    endTime: {
        type:Schema.Types.Date,
        required: true
    },
    dateCreated: {
        type:Schema.Types.Date,
        default: Date.now,
        // required: true
    },
    studentUser:{
        type:Schema.Types.String,
        required:true,
    },
})

export const ScheduledAssignmentModel = model<IScheduledAssignment>(DOCUMENT_NAME, schema, COLLECTION_NAME);