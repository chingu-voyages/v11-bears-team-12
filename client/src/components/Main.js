import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';

import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import PieceList from './components/PieceList';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
       Bears Team 12 - Chingu Voyage 11 -
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
 
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  
  toolbar: {
    flexWrap: 'wrap',
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  login:{
    margin: theme.spacing(1, 1.5),
  }
}));

export default function Main() {
  const classes = useStyles();

  return (
      <div>
      <AppBar position="static" color="default" elevation={0} className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
        AUDITIONIZER
        </Typography>
    
        <Button href="#" color="primary" variant="outlined" className={classes.login}>
          Login
        </Button>
      </Toolbar>
    </AppBar>
     
    <Container component="main" maxWidth="xs">
        <CssBaseline />
      
        <div className={classes.paper}>
     
       
          <Typography component="h1" variant="h5">
        Piece List
          </Typography>
       
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              id="pieceName"
              label="Piece Name"
              name="pieceName"
              autoFocus
            />
            <Button
             variant="outlined"
             fullWidth
             color="primary"
            >
            ADD
            </Button>
           <PieceList />
            <FormControlLabel
              control={<Checkbox value="autoStop" color="primary" />}
              label="Let me know when I should move on to the next piece"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              size="large"
              className={classes.submit}
            >
              What should I play?
            </Button>
            <Grid container>
              <Grid item xs>
                <Button href="#" >
                  Save List
                </Button>
              </Grid>
              <Grid item>
                <Button href="#" >
                 choose from my lists
                </Button>
              </Grid>
            </Grid>
          </form>
        </div>
        <Box mt={8}>
          <Copyright />
        </Box>
      </Container>
      </div>
   
  );
}
