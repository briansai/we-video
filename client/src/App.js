import React from 'react';
import { Typography, AppBar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import Home from './pages/Home';
import VideoPlayer from './components/VideoPlayer';
import Options from './components/Options';

const useStyles = makeStyles((theme) => ({
  appBar: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    height: '10vh',
    padding: '10px',

    [theme.breakpoints.down('xs')]: {
      width: '90%',
    },
  },
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
  },
}));

const App = () => {
  const classes = useStyles();
  const { appBar, wrapper } = classes;
  return (
    <div className={wrapper}>
      <AppBar position="static" color="inherit" className={appBar}>
        <Typography variant="h5" align="center">
          WeVideo
        </Typography>
      </AppBar>
      <Home />
      <VideoPlayer />
      <Options />
    </div>
  );
};

export default App;
