import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(theme => ({
  root: {
   
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),

    overflowX: 'auto',
  },
 
}));

// function ListItemLink(props) {
//   return <ListItem button component="a" {...props} />;
// }

export default function PieceList() {
  const classes = useStyles();

  return (
    <div>

    <Paper className={classes.root}>

    <List>
    <ListItem >
      <ListItemText primary="Tchaikovsky Concerto in D Major" />
    </ListItem>
    <Divider />
    <ListItem >
    <ListItemText primary="Mozart Concerto in D Major" />
  </ListItem>
   
  </List>
    </Paper>
  
    </div>
  );
}