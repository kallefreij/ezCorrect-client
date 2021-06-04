import { Checkbox, FormControlLabel, Radio } from '@material-ui/core';
import * as React from 'react';
import { IQuestionProps } from '../../../assignments.interfaces';

const MultiChoiceQuestion:React.FC<IQuestionProps> = (props) => {
    return (
        <div>
            <FormControlLabel
                control={
                <Checkbox
                    checked={false}
                    name="checkedB"
                    color="primary"
                    disabled={true}
                />
                }
                label="Primary"
            />
            <FormControlLabel
                control={
                <Checkbox
                    checked={true}
                    name="checkedB"
                    color="primary"
                    disabled={true}
                />
                }
                label="Primary"
            />
            <FormControlLabel
                control={
                <Checkbox
                    checked={false}
                    name="checkedB"
                    color="primary"
                    disabled={true}
                />
                }
                label="Primary"
            />
            <FormControlLabel
                control={
                <Checkbox
                    checked={false}
                    name="checkedB"
                    color="primary"
                    disabled={true}
                />
                }
                label="Primary"
            />
        </div>
    )
}

export default MultiChoiceQuestion;