import React from 'react';
import { IconButton, Input, InputAdornment, Radio } from '@material-ui/core';
import ClearIcon from '@material-ui/icons/Clear';
import { ThemeProvider } from '@material-ui/styles';
import { theme } from '../../../../../common/ezTheme';

export interface IInputProps {
  buttonId: any;
  altsId: any;
  selectVal: number;
  index: any;
  inputValue: string;
  handleKeyPress: () => void;
  handleInput: (id: any, e: any) => void;
  deleteInput: (id: any) => void;
  handleRadioButton: (newSelectVal: number) => void;
}

const RadioButtonInput: React.FC<IInputProps> = (props) => {
  const handleKeypress = (event: any) => {
    if (event.key === 'Enter') {
      props.handleKeyPress();
    }
  };

  const handleChange = () => {
    const i = props.index;
    props.handleRadioButton(i);
  };

  return (
    <div>
      {
        <ThemeProvider theme={theme}>
          <Input
            style={{ width: '100%' }}
            value={props.inputValue}
            autoFocus
            onKeyPress={(e) => handleKeypress(e)}
            onChange={(e) => props.handleInput(e, props.buttonId)}
            startAdornment={
              <InputAdornment position="start">
                <Radio
                  checked={props.selectVal === props.index}
                  color="primary"
                  onChange={handleChange}
                  value={props.index}
                  inputProps={{ 'aria-label': 'A' }}
                />
              </InputAdornment>
            }
            endAdornment={
              <InputAdornment position="end">
                <IconButton onClick={() => props.deleteInput(props.buttonId)} color="secondary">
                  <ClearIcon />
                </IconButton>
              </InputAdornment>
            }
          />
        </ThemeProvider>
      }
    </div>
  );
};

export default RadioButtonInput;
