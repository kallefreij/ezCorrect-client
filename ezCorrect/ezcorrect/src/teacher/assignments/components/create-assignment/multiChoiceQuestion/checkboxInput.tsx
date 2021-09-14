import React, { useState } from 'react';
import { IconButton, Input, InputAdornment } from '@material-ui/core';
import ClearIcon from '@material-ui/icons/Clear';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import { ThemeProvider } from '@material-ui/styles';
import { theme } from '../../../../../common/ezTheme';

export interface IInputProps {
  id: any;
  isCorrect: boolean;
  inputValue: string;
  handleKeyPress: () => void;
  handleInput: (e: any, id: any) => void;
  handleCheckbox: (id: any) => void;
  deleteInput: (id: any) => void;
}

const CheckboxInput: React.FC<IInputProps> = (props) => {
  const [isCorrect, setSelected] = useState(false);

  const changeSelected = () => {
    let bool = isCorrect ? false : true;
    setSelected(bool);
    props.handleCheckbox(props.id);
  };

  const handleKeypress = (event: any) => {
    if (event.key === 'Enter') {
      props.handleKeyPress();
    }
  };

  const handleInput = (e: any, id: any) => {
    props.handleInput(e, id);
  };

  return (
    <ThemeProvider theme={theme}>
      <Input
        style={{ width: '100%' }}
        value={props.inputValue}
        autoFocus
        onKeyPress={(e) => handleKeypress(e)}
        onChange={(e) => handleInput(e, props.id)}
        startAdornment={
          <InputAdornment position="start">
            <IconButton onClick={() => changeSelected()} color="primary">
              {isCorrect ? <CheckBoxIcon /> : <CheckBoxOutlineBlankIcon />}
            </IconButton>
          </InputAdornment>
        }
        endAdornment={
          <InputAdornment position="end">
            <IconButton onClick={() => props.deleteInput(props.id)} color="secondary">
              <ClearIcon />
            </IconButton>
          </InputAdornment>
        }
      />
    </ThemeProvider>
  );
};

export default CheckboxInput;
