import {
  Avatar,
  createStyles,
  IconButton,
  makeStyles,
  Theme,
  Tooltip,
} from '@material-ui/core';
import { deepOrange, deepPurple } from '@material-ui/core/colors';
import * as React from 'react';
import { randomColor } from '../utility/utility';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    orange: {
      color: theme.palette.getContrastText(deepOrange[500]),
      backgroundColor: deepOrange[500],
    },
    purple: {
      color: theme.palette.getContrastText(deepPurple[500]),
      backgroundColor: deepPurple[500],
    },
  })
);

interface IUserAvatarProps {
  firstName: string;
  lastName: string;
  size: number;
  image?: string;
  disableTooltip?: boolean;
  onClick?: () => void;
}

const UserAvatar: React.FC<IUserAvatarProps> = (props) => {
  const classes = useStyles();

  return (
    <IconButton size="small" onClick={props.onClick}>
      <Tooltip
        title={props.firstName + ' ' + props.lastName}
        arrow
        disableHoverListener={props.disableTooltip}
      >
        <Avatar
          src={props.image}
          style={{
            height: props.size,
            width: props.size,
            backgroundColor: randomColor(props.firstName),
          }}
        >
          {props.firstName.substr(0, 1)}
          {props.lastName.substr(0, 1)}
        </Avatar>
      </Tooltip>
    </IconButton>
  );
};

export default UserAvatar;
