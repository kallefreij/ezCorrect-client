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

const blueOptions: ThemeOptions = {
    palette: {
      primary: {
        main: '#1976d2',
      },
      secondary: {
        main: '#e57373',
      }
    },
}

export const blueTheme = createMuiTheme(blueOptions);
export const theme = createMuiTheme(options);

