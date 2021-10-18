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

interface ITableButtonMenuProps {
  setFilteredStatus: (status: string) => void;
}

const TableButtonMenu: React.FC<ITableButtonMenuProps> = (props) => {
  const classes = useStyles();

  const setFilteredStatus = (status: string) => {
    props.setFilteredStatus(status);
  };

  return (
    <ButtonGroup className={classes.root}>
      <TableButton onClick={setFilteredStatus} status="all" name="Alla" color="#FBF5F3" />
      <TableButton onClick={setFilteredStatus} status="ongoing" name="Pågående" color="#FDE5DD" />
      <TableButton onClick={setFilteredStatus} status="coming" name="Kommande" color="#FACEBF" />
      <TableButton onClick={setFilteredStatus} status="corrected" name="Rättat" color="#FAA68A" />
      <TableButton onClick={setFilteredStatus} status="submitted" name="Inlämnat" color="#A1D0A5" />
      <TableButton onClick={setFilteredStatus} status="late" name="Sent" color="#D08383" />
    </ButtonGroup>
  );
};

export default TableButtonMenu;
