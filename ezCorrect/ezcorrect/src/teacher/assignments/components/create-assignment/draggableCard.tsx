import React from 'react';
import { Draggable } from 'react-beautiful-dnd';

interface ParentCompProps {
    childComp?: React.ReactNode;
    isDragDisabled: boolean;
    index: number;
    id: string;
}

function getStyle(style: any, snapshot: any) {
    if (!snapshot.isDropAnimating) {
        return style;
    }
    return {
        ...style,
        transition: `all 0.5s ease`,
    };
}

const DraggableCard: React.FC<ParentCompProps> = (props) => {
    const { childComp } = props;

    return (
        <Draggable draggableId={props.id} key={props.id} index={props.index} isDragDisabled={props.isDragDisabled}>
            {(provided, snapshot) => (
                <div    ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        style={getStyle(provided.draggableProps.style, snapshot)}
                >
                    {childComp}
                </div>
            )}
        </Draggable>
    );
};

export default DraggableCard;