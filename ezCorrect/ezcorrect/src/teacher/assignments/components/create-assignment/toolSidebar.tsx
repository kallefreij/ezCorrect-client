import { Button, Card, CardActions, CardContent, Grid, IconButton, makeStyles } from '@material-ui/core';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import InputIcon from '@material-ui/icons/Input';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import TitleIcon from '@material-ui/icons/Title';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import { theme } from '../../../../common/ezTheme';
import DeleteIcon from '@material-ui/icons/Delete';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import { ICreateTestQuestionCards } from './createAssignment';
import { useDispatch, useSelector } from 'react-redux';
import { createSelector } from 'reselect';
import { IStateTree } from '../../../../redux/rootReducer';
import { IAssignmentState } from '../../assignments.reducer';
import { setCreateTestQuestions } from '../../assignments.actions';

const useStyles = makeStyles({
    root: {
        height: '55px',
        borderStyle: 'solid',
        borderColor:  '#A1D0A5',
        boxSizing: 'border-box',
        margin: 'auto',
        marginTop: '5px',
        borderTopLeftRadius: '0px',
        borderTopRightRadius: '0px',
        borderBottomLeftRadius: '10px',
        borderBottomRightRadius: '10px',
        [theme.breakpoints.up('sm')]: {
            height: '55px',
            width: '100%',
            borderStyle: 'solid',
            borderColor:  '#A1D0A5',
            boxSizing: 'border-box',
            margin: 'auto',
            marginTop: '5px',
            borderTopLeftRadius: '0px',
            borderTopRightRadius: '0px',
            borderBottomLeftRadius: '10px',
            borderBottomRightRadius: '10px',
        },
        [theme.breakpoints.up(800)]: {
            height: '55px',
            width: '800px',
            borderStyle: 'solid',
            borderColor:  '#A1D0A5',
            boxSizing: 'border-box',
            margin: 'auto',
            marginTop: '5px',
            borderTopLeftRadius: '0px',
            borderTopRightRadius: '0px',
            borderBottomLeftRadius: '10px',
            borderBottomRightRadius: '10px',
        },
    },
    cardActions: {
    },
    iconButton: {
        
    },
    icon: {
        fontSize: 'xx-large',
    }
})

export interface IInputProps {
    cardId: string;
}

const getCreateQuestions = createSelector<IStateTree, IAssignmentState, ICreateTestQuestionCards[]>(
    (state) => state.assignments,
    (a) => a.createTestQuestionCards
)

const ToolSidebar: React.FC<IInputProps> = (props) => {

    const classes = useStyles();
    const questionCards: ICreateTestQuestionCards[] = useSelector(getCreateQuestions);
    const dispatch = useDispatch();

    const getNewId = () => {
        let highestNumber = 0;
        questionCards.forEach((item) => {
            if(parseInt(item.id) > highestNumber){
                highestNumber = parseInt(item.id);
            }
        }) 
        highestNumber++;
        return highestNumber.toString();
    }
    
    const addQuestionCard = () => {
        const newQuestionCars = [...questionCards];
        const index = questionCards.findIndex(q => q.id === props.cardId);
        newQuestionCars.splice(index, 0, {id: getNewId(), question: '', questionType: '', cardType: 'question', isSelected: false, isDragDisabled: false});
        dispatch(setCreateTestQuestions(newQuestionCars));
    }
    const deleteQuestionCard = () => {
        const newQuestionCars = [...questionCards];
        const index = questionCards.findIndex(q => q.id === props.cardId);
        newQuestionCars.splice(index, 1);
        dispatch(setCreateTestQuestions(newQuestionCars));
    }
    
    return (
        <ThemeProvider theme={theme}>
            <Card className={classes.root}>
                <CardActions>
                    <Grid container justify="space-evenly">
                        <Grid item>
                            <Button className={classes.iconButton} onClick={addQuestionCard}>
                                <AddCircleOutlineIcon/>
                            </Button>
                        </Grid>
                        <Grid item>
                            <Button className={classes.iconButton}>
                                <InputIcon/>
                            </Button>
                        </Grid>
                        <Grid item>
                            <Button className={classes.iconButton}>
                                <VideoLibraryIcon/>
                            </Button>
                        </Grid>
                        <Grid item>
                            <Button className={classes.iconButton}>
                                <TitleIcon/>
                            </Button>
                        </Grid>
                        <Grid item>
                            <Button className={classes.iconButton} onClick={deleteQuestionCard}>
                                <DeleteIcon/>
                            </Button>
                        </Grid>
                    </Grid>
                </CardActions>
            </Card>
        </ThemeProvider>
    );
};

export default ToolSidebar;