import { ThemeProvider, Input, InputAdornment, Radio, Checkbox, FormControlLabel } from '@material-ui/core';
import * as React from 'react';
import { theme } from '../../../../../common/ezTheme';
import { IQuestionProps } from '../../../assignments.interfaces';

const SingleChoiceQuestion:React.FC<IQuestionProps> = (props) => {
    return (
        <div>
            {/* <ThemeProvider theme={theme}>
                <Input  style={{width: '100%'}}
                    startAdornment={
                        <InputAdornment position="start">
                                <Radio color="primary"/>
                        </InputAdornment>
                    }
                />
            </ThemeProvider> */}
            <FormControlLabel
                control={
                <Radio
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
                <Radio
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
                <Radio
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
                <Radio
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

export default SingleChoiceQuestion;