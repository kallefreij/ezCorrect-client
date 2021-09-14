import { makeStyles } from '@material-ui/core';
import React from 'react';
import { Droppable, DroppableProvided, DroppableStateSnapshot } from 'react-beautiful-dnd';
import { theme } from '../../../../common/ezTheme';

interface ParentCompProps {
  childComp?: any[];
}
const useStyles = makeStyles({
  main: {
    [theme.breakpoints.up('sm')]: {
      width: '100%',
    },
    [theme.breakpoints.up(800)]: {
      width: '800px',
      margin: 'auto',
    },
  },
});

const DroppableArea: React.FC<ParentCompProps> = (props) => {
  const classes = useStyles();
  const { childComp } = props;
  return (
    <Droppable droppableId="list">
      {(provided: DroppableProvided, snapshot: DroppableStateSnapshot) => (
        <div ref={provided.innerRef} {...provided.droppableProps} className={classes.main}>
          {childComp}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
};

export default DroppableArea;
