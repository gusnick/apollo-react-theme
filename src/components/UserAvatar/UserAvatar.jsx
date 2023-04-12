import React from 'react';
import { useTheme } from '@material-ui/core';

// styles
import useStyles from './styles';

// components
import { Typography } from '../Wrappers/Wrappers';

export default function UserAvatar({ color = 'primary', name }) {
  const classes = useStyles();
  const theme = useTheme();

  const letters = name
    .split(' ')
    .map((word) => word[0])
    .join('');

  return (
    <div
      className={classes.avatar}
      style={{ backgroundColor: theme.palette[color].main }}
    >
      <Typography className={classes.text}>{letters}</Typography>
    </div>
  );
}
