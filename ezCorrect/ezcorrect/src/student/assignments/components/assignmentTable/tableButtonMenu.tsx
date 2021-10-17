import { ButtonGroup, Grid, makeStyles } from '@material-ui/core';
import React from 'react';
import TableButton from './tableButton';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: '100px',
    margin: '0',
    padding: '0',
    listStyle: 'none',
    justifyContent: 'space-between',
    width: '100%',
    height: '100px',
    borderRadius: '15px 15px 0px 0px',
    overflow: 'hidden',
    display: 'flex',
  },
}));

const TableButtonMenu: React.FC = () => {
  const classes = useStyles();
  return (
    <ButtonGroup className={classes.root}>
      <TableButton name="Alla" color="#FBF5F3" />
      <TableButton name="Pågående" color="#FDE5DD" />
      <TableButton name="Kommande" color="#FACEBF" />
      <TableButton name="Rättat" color="#FAA68A" />
      <TableButton name="Inlämnat" color="#A1D0A5" />
      <TableButton name="Sent" color="#D08383" />
    </ButtonGroup>
  );
};

export default TableButtonMenu;
