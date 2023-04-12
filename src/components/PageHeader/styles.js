import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
  navPadding: {
    paddingTop: `${theme.spacing(1)}px !important`,
    paddingBottom: '6px !important',
  },
  margin: {
    marginBottom: 24,
  },
  pageHeaderContainer: {
    marginTop: `${theme.spacing(10)}px`,
    marginBottom: `${theme.spacing(4)}px`,
  },
}));
