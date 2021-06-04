import { createMuiTheme, ThemeOptions } from '@material-ui/core/styles';

const options: ThemeOptions = {
    palette: {
      primary: {
        main: '#A1D0A5',
      },
      secondary: {
        main: '#D0A1A1',
      }
    },
};


export const theme = createMuiTheme(options);

