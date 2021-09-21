import { Grid } from '@material-ui/core';
import React from 'react';
import HeaderTitleAndDescription from './headerTitleAndDescription';
import CreateQuestionCard from './createQuestionCard';
import { DragDropContext } from 'react-beautiful-dnd';
import DroppableArea from './droppableArea';
import DraggableCard from './draggableCard';
import CardSidebarMenu from './cardSidebarMenu';
import { IStateTree } from '../../../../redux/rootReducer';
import { IAssignmentState } from '../../assignments.reducer';
import { createSelector } from 'reselect';
import { useDispatch, useSelector } from 'react-redux';
import { setCreateTestQuestions, saveAssignment } from '../../assignments.actions';
import { ITextAnswer } from './textAnswer/textAnswer';
import { IMultiChoiceAlts } from './multiChoiceQuestion/multiCoiceQuestion';
import { ISingleChoiceAlts } from './singleChoiceQuestion/singleChoiceQuestion';
import { IUserState, IUser } from '../../../../common/user/user.reducer';

export interface ICreateTestQuestionCards {
  id: string;
  user?: string;
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
);

const getSingleChoiceAlts = createSelector<IStateTree, IAssignmentState, ISingleChoiceAlts[]>(
  (state) => state.assignments,
  (a) => a.singleChoiceAlts
);

const getMultiChoiceAlts = createSelector<IStateTree, IAssignmentState, IMultiChoiceAlts[]>(
  (state) => state.assignments,
  (a) => a.multiChoiceAlts
);

const getTextAnswer = createSelector<IStateTree, IAssignmentState, ITextAnswer[]>(
  (state) => state.assignments,
  (a) => a.textAnswer
);

const getUserData = createSelector<IStateTree, IUserState, IUser>(
  (state) => state.user,
  (a) => a.loggedInUser
);

const CreateAssignment: React.FC = () => {
  const questionCards: ICreateTestQuestionCards[] = useSelector(getCreateQuestions);
  const singleChoiceAlts: ISingleChoiceAlts[] = useSelector(getSingleChoiceAlts);
  const multiChoiceAlts: IMultiChoiceAlts[] = useSelector(getMultiChoiceAlts);
  const textAnswers: ITextAnswer[] = useSelector(getTextAnswer);
  const userData = useSelector(getUserData);

  const dispatch = useDispatch();

  const handleSelect = (id: string) => {
    const qCards = questionCards.map((card) => {
      if (card.id === id) card.isSelected = true;
      else card.isSelected = false;
      return card;
    });
    qCards[0].user = userData.username;
    dispatch(setCreateTestQuestions(qCards));
  };

  const onDragEnd = (result: any) => {
    const { destination, source, draggableId } = result;
    if (!destination) return;
    if (destination.droppableId === source.droppableId && destination.index === source.index) return;
    let newCardsArr = [...questionCards];
    const draggedCard: any = questionCards.find((c) => c.id === draggableId);
    newCardsArr.splice(source.index, 1);
    newCardsArr.splice(destination.index, 0, draggedCard);
    dispatch(setCreateTestQuestions(newCardsArr));
  };

  const handleIsDraggable = (isDisabled: boolean) => {
    questionCards.forEach((qc, i) => {
      if (i > 0) qc.isDragDisabled = isDisabled ? false : true;
    });
    const newQuestionCards = [...questionCards];
    dispatch(setCreateTestQuestions(newQuestionCards));
  };

  const setQuestiontype = (id: string, qType: string) => {
    const newQuestionCards = questionCards.map((qc) => {
      if (qc.id === id) qc.questionType = qType;
      return qc;
    });
    dispatch(setCreateTestQuestions(newQuestionCards));
  };

  const handleSubjectInput = (id: string, input: string[]) => {
    const newQuestionCards = questionCards.map((qc) => {
      if (qc.id === id) {
        qc.subjects = input;
      }
      return qc;
    });
    dispatch(setCreateTestQuestions(newQuestionCards));
  };

  const handleCategoriesInput = (id: string, input: string[]) => {
    const newQuestionCards = questionCards.map((qc) => {
      if (qc.id === id) {
        qc.categories = input;
      }
      return qc;
    });
    dispatch(setCreateTestQuestions(newQuestionCards));
  };

  const handleQuestionInput = (id: string, input: string) => {
    const newQuestionCards = questionCards.map((qc) => {
      if (qc.id === id) {
        qc.question = input;
      }
      return qc;
    });
    dispatch(setCreateTestQuestions(newQuestionCards));
  };

  const handleTitleInput = (id: string, input: string) => {
    const newQuestionCards = questionCards.map((qc) => {
      if (qc.id === id) {
        qc.title = input;
      }
      return qc;
    });
    dispatch(setCreateTestQuestions(newQuestionCards));
  };

  const handleDesciptionInput = (id: string, input: string) => {
    const newQuestionCards = questionCards.map((qc) => {
      if (qc.id === id) {
        qc.description = input;
      }
      return qc;
    });
    dispatch(setCreateTestQuestions(newQuestionCards));
  };

  const handleSave = () => {
    let answerArray: any[] = [];
    answerArray = answerArray.concat(textAnswers, singleChoiceAlts, multiChoiceAlts);

    const cardsToSave = questionCards.map((qc) => {
      qc.answer = answerArray.find((a) => a.id === qc.id);
      return qc;
    });

    dispatch(saveAssignment(cardsToSave));
  };

  const handleClean = () => {
    dispatch(
      setCreateTestQuestions([
        {
          id: '1',
          title: '',
          description: '',
          categories: [],
          subjects: [],
          cardType: 'header',
          isSelected: false,
        },
        {
          id: '2',
          question: '',
          questionType: '',
          cardType: 'question',
          isSelected: true,
          isDragDisabled: true,
        },
      ])
    );
  };

  return (
    <div>
      <Grid container>
        <Grid item sm={3} md={2} lg={2}></Grid>
        <Grid item sm={12} md={8} lg={8}>
          <DragDropContext onDragEnd={onDragEnd}>
            <DroppableArea
              childComp={questionCards.map((card, i, a) => {
                if (card.cardType === 'header') {
                  return (
                    <HeaderTitleAndDescription
                      key={card.id}
                      handleSelect={handleSelect}
                      handleSubjectInput={handleSubjectInput}
                      handleCategoriesInput={handleCategoriesInput}
                      handleTitleInput={handleTitleInput}
                      handleDesciptionInput={handleDesciptionInput}
                      isSelected={card.isSelected}
                      id={card.id}
                      title={card.title}
                      description={card.description}
                      subjects={card.subjects}
                      categories={card.categories}
                    />
                  );
                } else {
                  return (
                    <DraggableCard
                      key={card.id}
                      index={i}
                      id={card.id}
                      isDragDisabled={card.isDragDisabled!}
                      childComp={
                        <CreateQuestionCard
                          key={card.id}
                          handleSelect={handleSelect}
                          setQuestiontype={setQuestiontype}
                          handleQuestionInput={handleQuestionInput}
                          isSelected={card.isSelected}
                          id={card.id}
                          index={i}
                          questionVal={card.question}
                          qType={card.questionType}
                        />
                      }
                    />
                  );
                }
              })}
            />
          </DragDropContext>
        </Grid>
        <Grid item md={2} lg={2}>
          <CardSidebarMenu handleDisable={handleIsDraggable} handleSave={handleSave} handleClean={handleClean} />
        </Grid>
      </Grid>
    </div>
  );
};

export default CreateAssignment;
