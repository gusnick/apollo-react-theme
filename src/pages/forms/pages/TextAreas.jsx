/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import {
  Grid,
} from '@material-ui/core';
import useStyles from './styles';

import TextArea from '../elements/TextArea/TextArea';
import Widget from '../../../components/Widget/Widget';

// components
import { Typography } from '../../../components/Wrappers/Wrappers';
import ExtraLink from '../../../utils/ExtraLink';

export default function TextAreas() {
  const classes = useStyles();

  return (
    <>
      <Grid container spacing={4}>
        <Grid item md={12} xs={12}>
          <Widget>
            <Typography>Text Areas</Typography>
            <Grid container className={classes.elementContainer} display="flex" alignItems="flex-start">
              <Grid>
                <TextArea
                  rows={4}
                  label="Default Text Area"
                  aria-label="Apollo Text Area"
                  placeholder="Optional Hint Text"
                  variant="outlined"
                />
              </Grid>
              <Grid>
                <TextArea
                  error
                  rows={4}
                  label="Error"
                  aria-label="Apollo Text Area"
                  placeholder="Optional Hint Text"
                  variant="outlined"
                />
              </Grid>
              <Grid>
                <TextArea
                  disabled
                  rows={4}
                  label="Disabled"
                  aria-label="Apollo Text Area"
                  placeholder="Optional Hint Text"
                  variant="outlined"
                />
              </Grid>
            </Grid>
          </Widget>
        </Grid>
      </Grid>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <ExtraLink
            title="Design Link"
            subtitle="This component uses the Text Field Material UI Component"
            link="https://material-ui.com/components/text-fields/"
            text="Link to Material Docs"
          />
        </Grid>
      </Grid>
    </>
  );
}
