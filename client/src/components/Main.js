import React, { useRef} from 'react';
import { observer } from 'mobx-react-lite';
import PieceList from './PieceList';
import SelectDialog from './SelectDialog';


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

import {usePieceStore} from '../usePieceStore';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
       Yael Luria
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

const Main = observer(() => {
const pieceStore = usePieceStore();


  const classes = useStyles();

  let textInput = useRef(null);


  const addPiece = (evt) => {
    evt.preventDefault();
    pieceStore.add(textInput.current.value);
    textInput.current.value = '';
  };


 const handlePick = c => {
  pieceStore.select(c);
  console.log(pieceStore.selectedPieces);
  }


  return (
      <div>
      <AppBar position="static" color="default" elevation={0} className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
        AUDITIONIZER
        </Typography>
    
        <Button href="/connect" color="primary" variant="outlined" className={classes.login}>
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
  

       
          <form onSubmit={addPiece} className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              id="pieceName"
              label="Piece Name"
              name="pieceName"
              autoFocus
              inputRef={textInput}
            />
            <Button
             type="submit"
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
       
            <SelectDialog />
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
})
export default Main;
