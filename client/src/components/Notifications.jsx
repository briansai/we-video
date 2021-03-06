import React, { useContext } from 'react';
import { Button } from '@material-ui/core';
import { SocketContext } from '../context/SocketContext';
import './Notifications.scss';

function Notifications() {
  const { answerCall, call, callAccepted } = useContext(SocketContext);
  return (
    <div>
      {call.isReceivingCall && !callAccepted && (
        <div className="notifications">
          <h1>{call.name} is calling:</h1>
          <Button variant="contained" color="primary" onClick={answerCall}>
            Answer
          </Button>
        </div>
      )}
    </div>
  );
}

export default Notifications;
