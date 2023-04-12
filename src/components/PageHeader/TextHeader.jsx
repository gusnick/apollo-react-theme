import { Typography } from '@material-ui/core';
import React from 'react';

const TextHeader = ({ title, subHeader: subtitle }) => (
  <>
    <Typography variant="h2" weight="semiBold" color="colorBlack" aria-current="page" style={{ fontSize: '24px' }}>
      {title}
    </Typography>
    <Typography variant="p" color="colorNeutral8" aria-current="page">
      {subtitle}
    </Typography>
  </>
);

export default TextHeader;
