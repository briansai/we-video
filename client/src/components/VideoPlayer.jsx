import React, { useContext } from 'react';
import { Grid, Paper, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { SocketContext } from '../context/SocketContext';
import VideoPlayerOptions from './VideoPlayerOptions';
import './VideoPlayer.scss';

const useStyles = makeStyles((theme) => ({
  video: {
    width: '550px',
    [theme.breakpoints.down('xs')]: {
      width: '300px',
    },
  },
  gridContainer: {
    justifyContent: 'center',
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
    },
  },
  paper: {
    padding: '10px',
    border: '2px solid black',
    margin: '10px',
  },
}));

function VideoPlayer() {
  const classes = useStyles();
  const { name, callAccepted, myVideo, userVideo, callEnded, stream, call } =
    useContext(SocketContext);

  return (
    <Grid container className={classes.gridContainer}>
      {stream && (
        <Paper className={classes.paper}>
          <Typography variant="h5" gutterBottom>
            Name
          </Typography>
          <video
            playsInline
            muted
            ref={myVideo}
            autoPlay
            className={classes.video}
          />
        </Paper>
      )}
      {callAccepted && !callEnded && (
        <Paper className={classes.paper}>
          <Typography variant="h5" gutterBottom>
            Name
          </Typography>
          <video
            playsInline
            ref={userVideo}
            autoPlay
            className={classes.video}
          />
        </Paper>
      )}
    </Grid>
  );
}

export default VideoPlayer;
