import { makeStyles } from '@material-ui/core';
import React, { useEffect } from 'react';
import { Draggable } from 'react-beautiful-dnd';

interface ParentCompProps {
    childComp?: React.ReactNode;
    index: number;
    id: string;
}
const useStyles = makeStyles({
    main: {
        margin: '0',
    },
})
const DraggableCard: React.FC<ParentCompProps> = (props) => {
    const classes = useStyles();
    const { childComp } = props;

    return (
        <Draggable draggableId={props.id} key={props.id} index={props.index}>
            {(provided) => (
                <div    ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                >
                    {childComp}
                </div>
            )}
        </Draggable>
    );
};

export default DraggableCard;