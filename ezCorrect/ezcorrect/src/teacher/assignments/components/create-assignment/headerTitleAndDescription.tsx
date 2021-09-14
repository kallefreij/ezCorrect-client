import { Grid, Hidden, InputLabel, MenuItem, Select } from '@material-ui/core';
import { Card, CardActions, CardContent, FormControl, makeStyles, TextField } from '@material-ui/core';
import React, { useState } from 'react';
import CardToolbar from './cardToolbar';
import { ThemeProvider } from '@material-ui/styles';
import { theme } from '../../../../common/ezTheme';

export interface IInputProps {
  id: string;
  title?: string;
  description?: string;
  subjects?: string[];
  categories?: string[];
  isSelected: boolean;
  handleSelect: (id: any) => void;
  handleSubjectInput: (id: string, input: string[]) => void;
  handleCategoriesInput: (id: string, input: string[]) => void;
  handleDesciptionInput: (id: string, input: string) => void;
  handleTitleInput: (id: string, input: string) => void;
}

const useStyles = makeStyles({
  main: {
    marginTop: '100px',
  },
  root: {
    boxSizing: 'border-box',
    [theme.breakpoints.up('sm')]: {
      width: '100%',
      boxSizing: 'border-box',
      margin: 'auto',
    },
    [theme.breakpoints.up(800)]: {
      width: '800px',
      boxSizing: 'border-box',
      margin: 'auto',
    },
  },
  rootSelect: {
    borderLeft: 'solid',
    borderColor: '#A1D0A5',
    boxSizing: 'border-box',
    [theme.breakpoints.up('sm')]: {
      width: '100%',
      borderLeft: 'solid',
      borderColor: '#A1D0A5',
      boxSizing: 'border-box',
      margin: 'auto',
    },
    [theme.breakpoints.up(800)]: {
      width: '800px',
      borderLeft: 'solid',
      borderColor: '#A1D0A5',
      boxSizing: 'border-box',
      margin: 'auto',
    },
  },
  form: {},
  titleField: {
    fontSize: 50,
    width: '100%',
  },
  descriptionField: {
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '100%',
    },
  },
  formControl: {
    width: '95%',
    marginLeft: '5%',
    marginTop: '5px',
    [theme.breakpoints.up('sm')]: {
      marginLeft: '20%',
      width: '80%',
    },
  },
  resize: {
    fontSize: 40,
  },
});

const HeaderTitleAndDescription: React.FC<IInputProps> = (props) => {
  const tmp_subjects = [
    'Svenska',
    'Engelska',
    'Mattematik',
    'Kemi',
    'Fysik',
    'Biologi',
    'Teknik',
    'Samhällskunskap',
    'Religion',
    'Geografi',
    'Historia',
    'Bild',
    'Idrott',
    'Musik',
    'Träslöjd',
    'Syslöjd',
    'Svenska som andraspråk',
    'Värdegrund',
    'Hemkunskap',
    'Modersmål',
    'Språkval Franska',
    'Språkval Spanska',
    'Språkval Tyska',
    'Språkval Engelska',
  ];

  const tmp_categories = ['Prov', 'Uppsats', 'Glosförhör', 'Exit-ticket'];

  const classes = useStyles();
  const [categories, setCategories] = useState<string[]>(tmp_categories);
  const [selectedCategories, setSelectedCategories] = useState<string[] | undefined>(props.categories);
  const [subjects, setSubjects] = useState(tmp_subjects.sort());
  const [selectedSubjects, setSelectedSubjects] = useState<string[] | undefined>(props.subjects);

  const handleSubjecs = (event: React.ChangeEvent<{ value: any }>) => {
    const subjects = event.target.value as string[];
    setSelectedSubjects(subjects);
    props.handleSubjectInput(props.id, subjects);
  };

  const handleCategories = (event: React.ChangeEvent<{ value: any }>) => {
    const subjects = event.target.value as string[];
    setSelectedCategories(subjects);
    props.handleCategoriesInput(props.id, subjects);
  };

  const handleTitleInput = (event: any) => {
    props.handleTitleInput(props.id, event.target.value);
  };

  const handleDesciptionInput = (event: any) => {
    props.handleDesciptionInput(props.id, event.target.value);
  };

  return (
    <div className={classes.main}>
      <Card
        className={props.isSelected ? classes.rootSelect : classes.root}
        onClick={() => props.handleSelect(props.id)}
      >
        <ThemeProvider theme={theme}>
          <CardContent>
            <form className={classes.form}>
              <Grid container>
                <Grid item sm={8} xs={12}>
                  <TextField
                    className={classes.titleField}
                    label="Titel"
                    value={props.title}
                    variant="standard"
                    onInput={handleTitleInput}
                    InputProps={{
                      classes: {
                        input: classes.resize,
                      },
                    }}
                  />
                </Grid>
                <Hidden xsDown>
                  <Grid item sm={4} xs={6}>
                    <FormControl variant="outlined" className={classes.formControl}>
                      <InputLabel>Kategori</InputLabel>
                      <Select value={selectedCategories} onChange={handleCategories} label="Kategori" multiple>
                        {categories.map((category) => (
                          <MenuItem key={category} value={category}>
                            {category}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item sm={8} xs={6}>
                    <TextField
                      className={classes.descriptionField}
                      id="outlined-basic"
                      label="Beskrvning"
                      value={props.description}
                      onInput={handleDesciptionInput}
                      variant="standard"
                      multiline
                      rowsMax={4}
                    />
                  </Grid>
                  <Grid item sm={4} xs={6}>
                    <FormControl variant="outlined" className={classes.formControl}>
                      <InputLabel>Ämne</InputLabel>
                      <Select label="Ämne" value={selectedSubjects} onChange={handleSubjecs} multiple>
                        {subjects.map((subject) => (
                          <MenuItem key={subject} value={subject}>
                            {subject}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Grid>
                </Hidden>
                <Hidden smUp>
                  <Grid item sm={8} xs={6}>
                    <TextField
                      className={classes.descriptionField}
                      id="outlined-basic"
                      label="Beskrvning"
                      variant="standard"
                      value={props.description}
                      onInput={handleDesciptionInput}
                      multiline
                      rows={5}
                    />
                  </Grid>
                  <Grid item sm={4} xs={6}>
                    <FormControl variant="outlined" className={classes.formControl}>
                      <InputLabel>Kategori</InputLabel>
                      <Select value={selectedCategories} onChange={handleCategories} label="Kategori" multiple>
                        {categories.map((category) => (
                          <MenuItem key={category} value={category}>
                            {category}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                    <FormControl variant="outlined" className={classes.formControl}>
                      <InputLabel>Ämne</InputLabel>
                      <Select label="Ämne" value={selectedSubjects} onChange={handleSubjecs} multiple>
                        {subjects.map((subject) => (
                          <MenuItem key={subject} value={subject}>
                            {subject}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Grid>
                </Hidden>
              </Grid>
            </form>
          </CardContent>
          <CardActions></CardActions>
        </ThemeProvider>
      </Card>
      {props.isSelected ? <CardToolbar cardId={props.id} /> : null}
    </div>
  );
};

export default HeaderTitleAndDescription;
