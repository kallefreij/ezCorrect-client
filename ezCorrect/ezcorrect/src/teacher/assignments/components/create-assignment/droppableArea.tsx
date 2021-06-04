import React from 'react';
import { Droppable, DroppableProvided, DroppableStateSnapshot } from 'react-beautiful-dnd';

interface ParentCompProps {
    childComp?: any[];
}


const DroppableArea: React.FC<ParentCompProps> = (props) => {
    const { childComp } = props;
    return (
        <Droppable droppableId="list" >
            {(provided: DroppableProvided, snapshot: DroppableStateSnapshot)=>(
                <div ref={provided.innerRef} {...provided.droppableProps} >
                    {childComp}
                    {provided.placeholder}
                </div>
            )}
        </Droppable>
    );
};

export default DroppableArea;