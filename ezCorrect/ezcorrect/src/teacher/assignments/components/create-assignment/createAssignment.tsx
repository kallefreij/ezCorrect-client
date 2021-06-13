import { createMuiTheme, Grid } from '@material-ui/core';
import React, { useState } from 'react';
import HeaderTitleAndDescription from './headerTitleAndDescription';
import CreateQuestionCard from './createQuestionCard';
import ToolSidebar from './toolSidebar';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import DroppableArea from './droppableArea';
import DraggableCard from './draggableCard';
import DragAndDropButton from './dragAndDropButton';
import { IStateTree } from '../../../../redux/rootReducer';
import { IAssignmentState } from '../../assignments.reducer';
import { createSelector } from 'reselect';
import { useDispatch, useSelector } from 'react-redux';
import { setCreateTestQuestions } from '../../assignments.actions';

export interface ICreateTestQuestionCards {
    id: string; 
    title?: string;
    description?: string;
    question?: string;
    categories?: string[];
    questionType?: string;
    subjects?: string[];
    cardType: string;
    isSelected: boolean;
    isDragDisabled?: boolean;
    answer?: any;
}

const getCreateQuestions = createSelector<IStateTree, IAssignmentState, ICreateTestQuestionCards[]>(
    (state) => state.assignments,
    (a) => a.createTestQuestionCards
)

const CreateAssignment: React.FC = () => {

    const questionCards: ICreateTestQuestionCards[] = useSelector(getCreateQuestions);
    const dispatch = useDispatch();

    const handleSelect = (id: string) => {
        const qCards = questionCards.map((card)=>{
            if(card.id === id)
                card.isSelected = true;
            else 
                card.isSelected = false;
            return card;
        });
        dispatch(setCreateTestQuestions(qCards));
    }

    const onDragEnd = (result: any) => {
        const {destination, source, draggableId} = result;
        if (!destination)
            return;
        if(destination.droppableId === source.droppableId && destination.index === source.index)
            return;
        let newCardsArr = [...questionCards];
        const draggedCard: any = questionCards.find(c => c.id === draggableId);
        newCardsArr.splice(source.index, 1);
        newCardsArr.splice(destination.index, 0, draggedCard);
        dispatch(setCreateTestQuestions(newCardsArr));
    }

    const handleIsDraggable = (isDisabled: boolean) => {
        questionCards.forEach((qc, i) =>{
            if(i>0)
                qc.isDragDisabled = isDisabled ? false : true;
        })
        const newQuestionCards = [...questionCards];
        console.log(newQuestionCards)
        dispatch(setCreateTestQuestions(newQuestionCards));
    }

    const setQuestiontype = (id: string, qType: string) => {
        const newQuestionCards = questionCards.map((qc)=> {
            if(qc.id === id)
                qc.questionType = qType;
            return qc;
        })
        dispatch(setCreateTestQuestions(newQuestionCards));
    }

    const handleQuestionInput = (id: string, input: string) => {
        const newQuestionCards = questionCards.map(qc => {
            if(qc.id === id){
                qc.question = input;
            }
            return qc;
        })
        dispatch(setCreateTestQuestions(newQuestionCards));
    }

    const handleTitleInput = (id: string, input: string) => {
        const newQuestionCards = questionCards.map(qc => {
            if(qc.id === id){
                qc.title = input;
            }
            return qc;
        })
        dispatch(setCreateTestQuestions(newQuestionCards));
    }

    const handleDesciptionInput = (id: string, input: string) => {
        const newQuestionCards = questionCards.map(qc => {
            if(qc.id === id){
                qc.description = input;
            }
            return qc;
        })
        dispatch(setCreateTestQuestions(newQuestionCards));
    }

    return (
        <div>
            <Grid container>
                <Grid item sm={3} md={2} lg={2} >
                </Grid>
                <Grid item sm={12} md={8} lg={8}>
                    <DragDropContext onDragEnd={onDragEnd}>
                        <DroppableArea childComp={
                                questionCards.map((card, i, a)=>{
                                    if(card.cardType === 'header'){
                                        return <HeaderTitleAndDescription 
                                                    handleSelect={handleSelect}
                                                    handleTitleInput={handleTitleInput} 
                                                    handleDesciptionInput={handleDesciptionInput} 
                                                    isSelected={card.isSelected} 
                                                    id={card.id}
                                                    title={card.title}
                                                    description={card.description}/>
                                    }
                                    else{
                                        return <DraggableCard index={i} id={card.id} isDragDisabled={card.isDragDisabled!} childComp={
                                            <CreateQuestionCard 
                                                handleSelect={handleSelect} 
                                                setQuestiontype={setQuestiontype} 
                                                handleQuestionInput={handleQuestionInput}
                                                isSelected={card.isSelected} 
                                                id={card.id}
                                                questionVal={card.question} 
                                                qType={card.questionType} />
                                        }/>
                                    }
                                })
                            }
                        />
                    </DragDropContext>
                </Grid>
                <Grid item sm={3} md={2} lg={2}>   
                    <DragAndDropButton handleDisable={handleIsDraggable}/>
                </Grid>
            </Grid>
        </div>
    );
};


export default CreateAssignment;