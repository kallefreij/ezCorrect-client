import * as React from 'react';
import { IQuestionProps } from '../../../assignments.interfaces';

const TextQuestion:React.FC<IQuestionProps> = (props) => {
    return (
        <div>
            <p>{props.question.answer}</p>
        </div>
    )
}

export default TextQuestion;