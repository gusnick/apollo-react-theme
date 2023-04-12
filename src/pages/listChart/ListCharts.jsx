import React from 'react';
import {
  Box,
  Grid,
} from '@material-ui/core';

import OneColExample from './components/OneCol';
import TwoColExample from './components/TwoCol';
import ThreeColExample from './components/ThreeCol';
import ExtraLink from '../../utils/ExtraLink';

function ListCharts() {
  return (
    <Box>
      <Grid container spacing={6}>
        <Grid container item xs={12}>
          <Grid item md={6} sm={6} xs={12}>
            <OneColExample />
            <TwoColExample />
            <ThreeColExample />
          </Grid>
        </Grid>

        <Grid container item xs={12}>
          <Grid item md={4} sm={6} xs={12}>
            <ExtraLink
              link="https://www.npmjs.com/package/@devexpress/dx-react-grid-material-ui"
              title="Developer Link"
              subtitle="DevExpress React Grid (Material UI)"
              text="Link to DevExpress React Grid NPM Page"
            />
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

export default ListCharts;
