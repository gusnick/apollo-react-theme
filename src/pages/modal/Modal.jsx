import React from 'react';
import {
  Grid,
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  CardMedia,
} from '@material-ui/core';
import cn from 'classnames';
import useStyles from './styles';
import TextField from '../forms/elements/TextField/TextField';

// components
import Widget from '../../components/Widget/Widget';
import Code from '../../components/Code/Code';
import { Typography, Button, Paper } from '../../components/Wrappers/Wrappers';
import pinkApollo from '../../images/pink_apollo_radial.png';
import ExtraLink from '../../utils/ExtraLink';

const reducer = (state, action) => {
  switch (action.type) {
    case 'OPEN_MODAL':
      return {
        ...state,
        toggleModal: true,
      };
    case 'CLOSE_MODAL':
      return {
        ...state,
        toggleModal: false,
      };
    case 'OPEN_BODY':
      return {
        ...state,
        toggleBody: true,
      };
    case 'CLOSE_BODY':
      return {
        ...state,
        toggleBody: false,
      };
    case 'OPEN_SMALL':
      return {
        ...state,
        toggleSmall: true,
      };
    case 'CLOSE_SMALL':
      return {
        ...state,
        toggleSmall: false,
      };
    case 'OPEN_LARGE':
      return {
        ...state,
        toggleLarge: true,
      };
    case 'CLOSE_LARGE':
      return {
        ...state,
        toggleLarge: false,
      };
    case 'OPEN_IMAGE':
      return {
        ...state,
        toggleImage: true,
      };
    case 'CLOSE_IMAGE':
      return {
        ...state,
        toggleImage: false,
      };
    case 'OPEN_GRID':
      return {
        ...state,
        toggleGrid: true,
      };
    case 'CLOSE_GRID':
      return {
        ...state,
        toggleGrid: false,
      };
    case 'OPEN_INPUT_MODAL':
      return {
        ...state,
        toggleInputModal: true,
      };
    case 'CLOSE_INPUT_MODAL':
      return {
        ...state,
        toggleInputModal: false,
      };
    default:
      return null;
  }
};

export default function ModalComp() {
  const classes = useStyles();
  const [state, dispatch] = React.useReducer(reducer, {
    toggleModal: false,
    toggleBody: false,
    toggleImage: false,
    toggleSmall: false,
    toggleGrid: false,
    toggleLarge: false,
    toggleInputModal: false,
  });

  return (
    <div>

      <Grid container spacing={6} alignItems="flex-start">
        <Grid container item md={6} xs={12}>
          <Box display="flex" flexDirection="column" width="100%">
            <Box mb={6}>
              <Widget title="Simple Custom Dialog" disableWidgetMenu>
                <Typography>
                  Togglez a working modal demo by clicking the button below. It
                  will slide down and fade in from the top of the page.
                </Typography>
                <Box my={2}>
                  <Button
                    color="primary"
                    variant="contained"
                    className={classes.marginRight}
                    onClick={() => dispatch({ type: 'OPEN_MODAL' })}
                  >
                    Simple Demo
                  </Button>
                  <Dialog
                    open={state.toggleModal}
                    onClose={() => dispatch({ type: 'CLOSE_MODAL' })}
                    scroll="body"
                    aria-labelledby="scroll-dialog-title"
                  >
                    <DialogTitle id="alert-dialog-title">
                      <Typography variant="h3" weight="semiBold">
                        Dialog Title
                      </Typography>
                    </DialogTitle>
                    <DialogContent>
                      <DialogContentText id="alert-dialog-description">
                        Let Google help apps determine location. This means
                        sending anonymous location data to Google, even when no
                        apps are running.
                      </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                      <Button
                        color="secondary"
                        onClick={() => dispatch({ type: 'CLOSE_MODAL' })}
                      >
                        Cancel
                      </Button>
                      <Button
                        onClick={() => dispatch({ type: 'CLOSE_MODAL' })}
                        variant="contained"
                        color="primary"
                      >
                        OK
                      </Button>
                    </DialogActions>
                  </Dialog>
                  <Button
                    color="secondary"
                    variant="contained"
                    onClick={() => dispatch({ type: 'OPEN_BODY' })}
                  >
                    Scrolling long content
                  </Button>
                  <Dialog
                    open={state.toggleBody}
                    onClose={() => dispatch({ type: 'CLOSE_BODY' })}
                    scroll="body"
                    aria-labelledby="scroll-dialog-title"
                  >
                    <DialogTitle id="scroll-dialog-title">
                      <Typography variant="h3" weight="semiBold">
                        Scrolling Long Content
                      </Typography>
                    </DialogTitle>
                    <DialogContent>
                      <DialogContentText className={classes.scrollPane}>
                        {[...new Array(50)]
                          .map(
                            () => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.

`,
                          )
                          .join('\n')}
                      </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                      <Button
                        color="secondary"
                        onClick={() => dispatch({ type: 'CLOSE_BODY' })}
                      >
                        Cancel
                      </Button>
                      <Button
                        onClick={() => dispatch({ type: 'CLOSE_BODY' })}
                        color="primary"
                        variant="contained"
                      >
                        OK
                      </Button>
                    </DialogActions>
                  </Dialog>
                </Box>
              </Widget>
            </Box>
            <Box mb={6}>
              <Widget title="Optional Sizes" disableWidgetMenu>
                <Typography block>
                  {'To appoint modal\'s width size, equal maxWidth attribute to one of values:'}
                  {' '}
                  <Code row inline>xs, sm, md, lg, xl</Code>
                </Typography>
                <Box my={2}>
                  <Button
                    color="primary"
                    variant="contained"
                    className={classes.marginRight}
                    onClick={() => dispatch({ type: 'OPEN_LARGE' })}
                  >
                    Large Modal
                  </Button>
                  <Dialog
                    maxWidth="xl"
                    open={state.toggleLarge}
                    onClose={() => dispatch({ type: 'CLOSE_LARGE' })}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                  >
                    <DialogTitle id="alert-dialog-title">
                      <Typography variant="h3" weight="semiBold">
                        Large Optional Size
                      </Typography>
                    </DialogTitle>
                    <DialogContent>
                      <DialogContentText id="alert-dialog-description">
                        Let Google help apps determine location. This means
                        sending anonymous location data to Google, even when no
                        apps are running.
                      </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                      <Button
                        color="secondary"
                        onClick={() => dispatch({ type: 'CLOSE_LARGE' })}
                      >
                        Disagree
                      </Button>
                      <Button
                        onClick={() => dispatch({ type: 'CLOSE_LARGE' })}
                        color="primary"
                        variant="contained"
                        autoFocus
                      >
                        Agree
                      </Button>
                    </DialogActions>
                  </Dialog>
                  <Button
                    color="secondary"
                    variant="contained"
                    className={classes.marginRight}
                    onClick={() => dispatch({ type: 'OPEN_SMALL' })}
                  >
                    Small modal
                  </Button>
                  <Dialog
                    maxWidth="sm"
                    open={state.toggleSmall}
                    onClose={() => dispatch({ type: 'CLOSE_SMALL' })}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                  >
                    <DialogTitle id="alert-dialog-title">
                      <Typography variant="h3" weight="semiBold">
                        Modal Set to Small Widths
                      </Typography>
                    </DialogTitle>
                    <DialogContent>
                      <DialogContentText id="alert-dialog-description">
                        Let Google help apps determine location. This means
                        sending anonymous location data to Google, even when no
                        apps are running.
                      </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                      <Button
                        color="secondary"
                        onClick={() => dispatch({ type: 'CLOSE_SMALL' })}
                      >
                        Disagree
                      </Button>
                      <Button
                        onClick={() => dispatch({ type: 'CLOSE_SMALL' })}
                        color="primary"
                        variant="contained"
                        autoFocus
                      >
                        Agree
                      </Button>
                    </DialogActions>
                  </Dialog>
                </Box>
              </Widget>
            </Box>
            <Box mb={6}>
              <Widget title="Modal With Image" disableWidgetMenu>
                <Typography block>
                  Use the classes provided for creating the image modal.
                </Typography>
                <Box my={2}>
                  <Button
                    color="primary"
                    variant="contained"
                    className={classes.marginRight}
                    onClick={() => dispatch({ type: 'OPEN_IMAGE' })}
                  >
                    Image Examples
                  </Button>
                  <Dialog
                    maxWidth="sm"
                    open={state.toggleImage}
                    onClose={() => dispatch({ type: 'CLOSE_IMAGE' })}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                  >
                    <CardMedia
                      className={classes.imgCard}
                      image={pinkApollo}
                    />
                    <DialogTitle id="alert-dialog-title">
                      Dialog Title
                    </DialogTitle>
                    <DialogContent>
                      <DialogContentText id="alert-dialog-description">
                        Let Google help apps determine location. This means
                        sending anonymous location data to Google, even when no
                        apps are running.
                      </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                      <Button
                        color="secondary"
                        onClick={() => dispatch({ type: 'CLOSE_IMAGE' })}
                      >
                        Disagree
                      </Button>
                      <Button
                        onClick={() => dispatch({ type: 'CLOSE_IMAGE' })}
                        color="primary"
                        variant="contained"
                        autoFocus
                      >
                        Agree
                      </Button>
                    </DialogActions>
                  </Dialog>

                </Box>
              </Widget>
            </Box>
            <Box>
              <Widget title="Form dialogs" disableWidgetMenu>
                <Typography block>
                  Form dialogs allow users to fill out form fields within a
                  dialog. For example, if your site prompts for potential
                  subscribers to fill in their email address, they can fill out
                  the email field and touch
                  {' '}
                  <Code row inline>Submit</Code>
                </Typography>
                <Box my={2}>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => dispatch({ type: 'OPEN_INPUT_MODAL' })}
                  >
                    Open form dialog
                  </Button>
                  <Dialog
                    open={state.toggleInputModal}
                    onClose={() => dispatch({ type: 'CLOSE_INPUT_MODAL' })}
                    aria-labelledby="form-dialog-title"
                  >
                    <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
                    <DialogContent>
                      <DialogContentText>
                        To subscribe to this website, please enter your email
                        address here. We will send updates occasionally.
                      </DialogContentText>
                      <TextField
                        autoFocus
                        id="name"
                        label="Email Address"
                        type="email"
                        variant="outlined"
                        margin="dense"
                        fullWidth
                      />
                    </DialogContent>
                    <DialogActions>
                      <Button
                        color="secondary"
                        onClick={() => dispatch({ type: 'CLOSE_INPUT_MODAL' })}
                      >
                        Cancel
                      </Button>
                      <Button
                        color="primary"
                        variant="contained"
                        onClick={() => dispatch({ type: 'CLOSE_INPUT_MODAL' })}
                      >
                        Subscribe
                      </Button>
                    </DialogActions>
                  </Dialog>
                </Box>
              </Widget>
            </Box>
          </Box>
        </Grid>
        <Grid item md={6} xs={12}>
          <Widget title="Using Grid" disableWidgetMenu>
            <Typography block>
              Utilize the Material UI grid system within a modal by nesting
              {' '}
              <Code row inline>{'<Grid container>'}</Code>
              {' '}
              within the
              {' '}
              <Code row inline>{'<Dialog>'}</Code>
              . Then, use the normal grid
              system classes as you would anywhere else.
            </Typography>
            <Box my={2}>
              <Button
                color="primary"
                variant="contained"
                className={classes.marginRight}
                onClick={() => dispatch({ type: 'OPEN_GRID' })}
              >
                Grid
              </Button>
              <Paper className={classes.paper}>
                <Grid item xs zeroMinWidth>
                  <Code>
                    {`
  <Grid container>
    <Box display="flex" flexDirection="column">
      <Box display="flex" flexDirection="row" justifyContent="flex-end">
        <Grid item xs={3}>1</Grid>
        <Grid item xs={3}>2</Grid>
      </Box>
      <Box display="flex" flexDirection="row" justifyContent="flex-around">
        <Grid item xs={3}>1</Grid>
        <Grid item xs={3}>2</Grid>
      </Box>
      <Box display="flex" flexDirection="row" justifyContent="flex-between">
        <Grid item xs={3}>1</Grid>
        <Grid item xs={3}>2</Grid>
        <Grid item xs={3}>3</Grid>Code
      </Box>
    </Box>
  </Grid>
                  `}
                  </Code>
                </Grid>
              </Paper>
            </Box>
            <Dialog
              fullWidth
              maxWidth="lg"
              open={state.toggleGrid}
              onClose={() => dispatch({ type: 'CLOSE_GRID' })}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
              <DialogTitle id="alert-dialog-title">Grid system</DialogTitle>
              <DialogContent>
                <DialogContentText
                  id="alert-dialog-description"
                  component="div"
                >
                  <Box display="flex" width="100%" flexDirection="column">
                    <Box
                      display="flex"
                      flexDirection="row"
                      justifyContent="flex-end"
                      width="100%"
                    >
                      <Grid item xs={3}>
                        <Paper
                          className={cn(classes.paperItem, classes.paperMargin)}
                          color="primary"
                        >
                          1
                        </Paper>
                      </Grid>
                      <Grid item xs={3}>
                        <Paper
                          className={cn(classes.paperItem, classes.paperMargin)}
                          color="warning"
                        >
                          2
                        </Paper>
                      </Grid>
                    </Box>
                    <Box
                      display="flex"
                      flexDirection="row"
                      justifyContent="space-around"
                      width="100%"
                    >
                      <Grid item xs={3}>
                        <Paper
                          className={cn(classes.paperItem, classes.paperMargin)}
                          color="error"
                        >
                          1
                        </Paper>
                      </Grid>
                      <Grid item xs={3}>
                        <Paper
                          className={cn(classes.paperItem, classes.paperMargin)}
                          color="success"
                        >
                          2
                        </Paper>
                      </Grid>
                    </Box>
                    <Box
                      display="flex"
                      flexDirection="row"
                      justifyContent="space-between"
                      width="100%"
                    >
                      <Grid item xs={3}>
                        <Paper
                          className={cn(classes.paperItem, classes.paperMargin)}
                          color="primary"
                        >
                          1
                        </Paper>
                      </Grid>
                      <Grid item xs={3}>
                        <Paper
                          className={cn(classes.paperItem, classes.paperMargin)}
                          color="info"
                        >
                          2
                        </Paper>
                      </Grid>
                      <Grid item xs={3}>
                        <Paper
                          className={cn(classes.paperItem, classes.paperMargin)}
                          color="warning"
                        >
                          3
                        </Paper>
                      </Grid>
                    </Box>
                  </Box>
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button
                  color="secondary"
                  onClick={() => dispatch({ type: 'CLOSE_GRID' })}
                >
                  Disagree
                </Button>
                <Button
                  onClick={() => dispatch({ type: 'CLOSE_GRID' })}
                  color="primary"
                  variant="contained"
                  autoFocus
                >
                  Agree
                </Button>
              </DialogActions>
            </Dialog>
          </Widget>
        </Grid>
        <Grid item xs={12}>
          <ExtraLink
            title="Design Link"
            subtitle="This component uses the Modal Material UI Component"
            link="https://material-ui.com/components/modal/"
            text="Link to Material Docs"
          />
        </Grid>
      </Grid>
    </div>
  );
}
