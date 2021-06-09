import { createMuiTheme, Grid } from '@material-ui/core';
import React, { useState } from 'react';
import HeaderTitleAndDescription from './headerTitleAndDescription';
import CreateQuestionCard from './createQuestionCard';
import ToolSidebar from './toolSidebar';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import DroppableArea from './droppableArea';
import DraggableCard from './draggableCard';
import DragAndDropButton from './dragAndDropButton';


const CreateAssignment: React.FC = () => {

    const startCards: any[] = [
        {id: '1', title: '', description: '', categories: '', centralContent: '', cardType: 'header', isSelected: false},
        {id: '2', question: '', questionType: '', cardType: 'question', isSelected: true, isDragDisabled: false},
        {id: '3', question: '', questionType: '', cardType: 'question', isSelected: false,  isDragDisabled: false},
        // {id: '4', question: '', questionType: '', cardType: 'question', isSelected: false,  isDragDisabled: false},
        // {id: '5', question: '', questionType: '', cardType: 'question', isSelected: false,  isDragDisabled: false},
        // {id: '6', question: '', questionType: '', cardType: 'question', isSelected: false,  isDragDisabled: false},
        // {id: '7', question: '', questionType: '', cardType: 'question', isSelected: false,  isDragDisabled: false},
        // {id: '8', question: '', questionType: '', cardType: 'question', isSelected: false,  isDragDisabled: false},
        // {id: '9', question: '', questionType: '', cardType: 'question', isSelected: false,  isDragDisabled: false},
        // {id: '10', question: '', questionType: '', cardType: 'question', isSelected: false,  isDragDisabled: false},
    ]

    const [questionCards, setCards] = useState(startCards); 

    const handleSelect = (id: string) => {
        const qCards = questionCards.map((card)=>{
            if(card.id === id)
                card.isSelected = true;
            else 
                card.isSelected = false;
            return card;
        });
        setCards(qCards);
    }

    const onDragEnd = (result: any) => {
        const {destination, source, draggableId} = result;
        if (!destination)
            return;
        if(destination.droppableId === source.droppableId && destination.index === source.index)
            return;
        let newCardsArr = [...questionCards];
        newCardsArr.splice(source.index, 1);
        newCardsArr.splice(destination.index, 0, questionCards.find(c => c.id === draggableId));
        setCards(newCardsArr);
    }

    const handleIsDraggable = (isDisabled: boolean) => {
        questionCards.forEach((qc, i) =>{
            if(i>0)
                qc.isDragDisabled = isDisabled ? false : true;
        })
        const newQuestionCards = [...questionCards];
        console.log(newQuestionCards)
        setCards(newQuestionCards);
    }

    const setQuestiontype = (id: string, qType: string) => {
        const newQuestionCards = questionCards.map((qc)=> {
            if(qc.id === id)
                qc.questionType = qType;
            return qc;
        })
        setCards(newQuestionCards);
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
                                        return <HeaderTitleAndDescription handleSelect={handleSelect} isSelected={card.isSelected} id={card.id}/>
                                    }
                                    else{
                                        return <DraggableCard index={i} id={card.id} isDragDisabled={card.isDragDisabled} childComp={
                                            <CreateQuestionCard handleSelect={handleSelect} setQuestiontype={setQuestiontype} isSelected={card.isSelected} id={card.id} qType={card.questionType} />
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