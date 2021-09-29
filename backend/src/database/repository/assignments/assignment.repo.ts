import IAssignment, { AssignmentModel } from "../../model/assignments/assignment.model";
import IAlternatives, { AlternativesModel } from "../../model/assignments/alternatives.model";
import IMultiChoiceAnswer, { MultiChoiceAnswerModel } from "../../model/assignments/multichoiceQuestion.model";
import ISingleChoiceAnswer, { SingleChoiceAnswerModel } from "../../model/assignments/singlechoiceQuestion.model";
import ITextAnswer, { TextAnswerModel } from "../../model/assignments/textQuestion.model";
import IScheduledAssignment, { ScheduledAssignmentModel } from "../../model/assignments/scheduledAssignment.model";

export default class AssignmentRepo {
    public static getAllAssignments(username:string): Promise<IAssignment[]> {
        return AssignmentModel.find({user: username}).exec();
    }

    public static getAllScheduledAssignments(username:string): Promise<IScheduledAssignment[]> {
        return ScheduledAssignmentModel.find({user: 'kallefreij'}).exec();
    }

    public static getAssignment(id: string): Promise<IAssignment|null> {
        return AssignmentModel.findById(id).exec();
    }

    public static getAllTextAnswers(assignmentId: string): Promise<ITextAnswer[]> {
        return TextAnswerModel.find({assignmentId: assignmentId}).exec();
    }
    
    public static getAllSingleChoiceAnswers(assignmentId: string): Promise<ISingleChoiceAnswer[]> {
        return SingleChoiceAnswerModel.find({assignmentId: assignmentId}).exec();
    }

    public static getAllMultiChoiceAnswers(assignmentId: string): Promise<IMultiChoiceAnswer[]> {
        return MultiChoiceAnswerModel.find({assignmentId: assignmentId}).exec();
    }

    public static postAssignment(assignmentModel: IAssignment): Promise<any> {
        return assignmentModel.save();
    }

    public static postScheduledAssignment(scheduledAssignmentModel: IScheduledAssignment): Promise<any> { 
        return scheduledAssignmentModel.save();
    }
    public static deleteAssignment(ids: string): Promise<any>{
        return AssignmentModel.deleteMany({_id: ids}).exec();
    }
}