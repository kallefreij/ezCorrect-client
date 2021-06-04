import { createMuiTheme, Grid } from '@material-ui/core';
import React, { useState } from 'react';
import HeaderTitleAndDescription from './headerTitleAndDescription';
import CreateQuestionCard from './createQuestionCard';
import ToolSidebar from './toolSidebar';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import DroppableArea from './droppableArea';
import DraggableCard from './draggableCard';


const CreateAssignment: React.FC = () => {

    const startCards: any[] = [
        {id: '1', title: '', description: '', categories: '', centralContent: '', cardType: 'header', isSelected: false},
        {id: '2', question: '', type: '', cardType: 'question', isSelected: true},
        {id: '3', question: '', type: '', cardType: 'question', isSelected: false},
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

    return (
        <div>
            <Grid container>
                
                <Grid item sm={3} md={2} lg={2}></Grid>
                <Grid item sm={12} md={8} lg={8}>
                    <DragDropContext onDragEnd={onDragEnd}>
                        <DroppableArea childComp={
                                questionCards.map((card, i, a)=>{
                                    if(card.cardType === 'header'){
                                        return <HeaderTitleAndDescription handleSelect={handleSelect} isSelected={card.isSelected} id={card.id}/>
                                    }
                                    else{
                                        return <DraggableCard index={i} id={card.id} childComp={
                                            <CreateQuestionCard  handleSelect={handleSelect} isSelected={card.isSelected} id={card.id}/>
                                        }/>
                                    }
                                })
                            }
                        />
                    </DragDropContext>
                </Grid>
                <Grid item sm={3} md={2} lg={2}></Grid>
            </Grid>
        </div>
    );
};


export default CreateAssignment;