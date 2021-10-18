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
  onClick: (status: string) => void;
  name: string;
  color: string;
  status: string;
}

const TableButton: React.FC<ITableButtonProps> = (props) => {
  const classes = useStyles(props);

  const onClick = () => {
    props.onClick(props.status);
  };

  return (
    <Button className={classes.root} onClick={onClick}>
      <h3 className={classes.text}>{props.name}</h3>
    </Button>
  );
};

export default TableButton;
