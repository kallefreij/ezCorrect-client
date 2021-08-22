import { AssignmentModel } from "../database/model/assignments/assignment.model";
import { AlternativesModel } from "../database/model/assignments/alternatives.model";
import { MultiChoiceAnswerModel } from "../database/model/assignments/multichoiceQuestion.model";
import { SingleChoiceAnswerModel } from "../database/model/assignments/singlechoiceQuestion.model";
import { TextAnswerModel } from "../database/model/assignments/textQuestion.model";

export class AssignmentUtil {
  
    constructor(){
        
    }

    static createModels(body : any): any{
        
        let assignmentModel = new AssignmentModel();

        body.assignment.forEach((element: any) => {
            const model = AssignmentUtil.getModel(element);
            assignmentModel.questions.push(model);
        });

        return assignmentModel;
    }
    
    static getModel(element: any): any {
        if(element.cardType == 'header'){
            const assignmentModel = new AssignmentModel({
                title: element.title,
                description: element.description,
                subjects: element.subjects,
                categories: element.categories
            })
            return assignmentModel;
        }
        else {
            let model = null;
            switch(element.questionType) { 
                case 'textAnswer': { 
                    model = AssignmentUtil.createTextAnswerQuestion(element); 
                    break;
                } 
                case 'multiChoiceAnswer': { 
                    model = AssignmentUtil.createMultiChoiceQuestion(element); 
                    break;
                } 
                case 'singleChoceAnswer': { 
                    model = AssignmentUtil.createSingleChoiceQuestion(element); 
                    break; 
                } 
                default: { 
                   // Handle errors with wrong questiontypes.  
                   break; 
                } 
            } 
            return model;
        }
    }

    static createSingleChoiceQuestion(element: any){
        const alternatives = element.answer.alts.map((a:any) => {
            return AssignmentUtil.createAlternative(a);
        })
        const correctAnswer = AssignmentUtil.createAlternative(element.answer.alts.find((a:any) => a.isCorrect === true));

        const singleChoiceAnswerModel = new SingleChoiceAnswerModel({
            assignemntId: 'x',
            teacher: element.teacher,
            questionType: element.questionType,
            question: element.question,
            alternatives: alternatives,
            correctAnswer: correctAnswer,
            maxPoints: element.maxPoints
        })

        return singleChoiceAnswerModel;
    }

    static createMultiChoiceQuestion(element: any){
        const alternatives:any[] = [];
        const correctAnswers:any[] = [];
        
        element.answer.alts.forEach((a:any) => {
            alternatives.push(AssignmentUtil.createAlternative(a)); 
        });
        element.answer.alts.forEach((a:any) => {
            if(a.isCorrect)
                correctAnswers.push(AssignmentUtil.createAlternative(a));
        });

        const multiChoiceAnswerModel = new MultiChoiceAnswerModel({
            assignemntId: 'x',
            teacher: element.teacher,
            questionType: element.questionType,
            question: element.question,
            alternatives: alternatives,
            correctAnswers: correctAnswers,
            maxPoints: element.maxPoints
        }) 

        return multiChoiceAnswerModel;
    }
    
    static createTextAnswerQuestion(element: any){

        const textAnswerModel = new TextAnswerModel({
            assignemntId: 'x',
            teacher: element.teacher,
            questionType: element.questionType,
            question: element.question,
            answer: element.answer,
            maxPoints: element.maxPoints
        }) 

        return textAnswerModel;
    }

    static createAlternative(element: any){
        const alternative = new AlternativesModel({
            value: element.value,
            isCorrect: element.isCorrect
        })
        return alternative;
    }

}

