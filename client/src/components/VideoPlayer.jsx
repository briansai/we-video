import React, { useContext } from 'react';
import { Typography } from '@material-ui/core';
import { SocketContext } from '../context/SocketContext';
import VideoPlayerOptions from './VideoPlayerOptions';
import './VideoPlayer.scss';

function VideoPlayer() {
  const { name, callAccepted, myVideo, userVideo, callEnded, stream, call } =
    useContext(SocketContext);

  const handleMuteMic = (index) => {
    stream.getVideoTracks()[index].muted = false;
  };

  return (
    <div className="video">
      {stream && (
        <div className="video__container">
          <Typography variant="h5" gutterBottom>
            {name || 'Name'}
          </Typography>
          <video
            playsInline
            muted
            ref={myVideo}
            autoPlay
            className="video__player"
          />
          <VideoPlayerOptions stream={stream} />
        </div>
      )}
    </div>
  );
}

export default VideoPlayer;
