import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { render } from '@testing-library/react';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  }
});

class navBar extends React.Component {
  
  render() {
    const classes = withStyles();
    return(
      <div className={classes.root}>
        <AppBar position="static" color="transparent">
          <Toolbar variant="dense">
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h5" color="inherit">
              Jenkins<b>HCM</b>
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    )
  }
  
}

export default withStyles(styles)(navBar);