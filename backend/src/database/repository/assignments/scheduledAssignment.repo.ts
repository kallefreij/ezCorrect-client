import IAssignment, { AssignmentModel } from "../../model/assignments/assignment.model";
import IAlternatives, { AlternativesModel } from "../../model/assignments/alternatives.model";
import IMultiChoiceAnswer, { MultiChoiceAnswerModel } from "../../model/assignments/multichoiceQuestion.model";
import ISingleChoiceAnswer, { SingleChoiceAnswerModel } from "../../model/assignments/singlechoiceQuestion.model";
import ITextAnswer, { TextAnswerModel } from "../../model/assignments/textQuestion.model";
import IScheduledAssignment, { ScheduledAssignmentModel } from "../../model/assignments/scheduledAssignment.model";

export default class ScheduledAssignmentRepo {
    public static getAllScheduledAssignments(username:string): Promise<IScheduledAssignment[]> {
        return ScheduledAssignmentModel.find({creator: username}).exec();
    }
    public static postScheduledAssignment(scheduledAssignmentModel: IScheduledAssignment): Promise<any> { 
        return scheduledAssignmentModel.save();
    }
    public static deleteScheduledAssignment(ids: string): Promise<any>{
        return ScheduledAssignmentModel.deleteMany({_id: ids}).exec();
    }
}