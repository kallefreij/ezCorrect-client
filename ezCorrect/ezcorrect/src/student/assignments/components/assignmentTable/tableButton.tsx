import { Button, makeStyles, Paper } from '@material-ui/core';
import TouchRipple from '@material-ui/core/ButtonBase/TouchRipple';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: (props: ITableButtonProps) => props.color,
    borderRadius: '0px',
    cursor: 'pointer',
    float: 'left',
    outline: 'none',
    padding: '42px 20px',
    transition: '0.3s',
    WebkitTouchCallout: 'none',
    WebkitUserSelect: 'none',
    MozUserSelect: 'none',
    msUserSelect: 'none',
    userSelect: 'none',
    '&:hover': {
      backgroundColor: (props: ITableButtonProps) => props.color,
      fontSize: '20px',
    },
    width: '100%',
    textAlign: 'center',
  },
  text: {
    margin: 0,
    textTransform: 'uppercase',
    textAlign: 'center',
    fontWeight: 'bolder',
  },
}));

interface ITableButtonProps {
  name: string;
  color: string;
}

const TableButton: React.FC<ITableButtonProps> = (props) => {
  const classes = useStyles(props);

  return (
    <Button className={classes.root}>
      <h3 className={classes.text}>{props.name}</h3>
    </Button>
  );
};

export default TableButton;
