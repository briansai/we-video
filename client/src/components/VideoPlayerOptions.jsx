import React, { useState, useContext } from 'react';
import './VideoPlayerOptions.scss';

function VideoPlayerOptions({ stream }) {
  const [videoEnabled, setVideoEnabled] = useState(false);

  return (
    <div className="video-options">
      <button
        // onClick={handleDisable}
        width="100px"
        className="video-options__video"
      >
        Disable Video
      </button>
    </div>
  );
}

export default VideoPlayerOptions;

// const handleDisable = (e) => {
// e.preventDefault();
// function muteMic() {
//   stream
//     .getAudioTracks()
//     .forEach((track) => (track.enabled = !track.enabled));
// }

// function muteCam() {
//   stream
//     .getVideoTracks()
//     .forEach((track) => (track.enabled = !track.enabled));
// }

// muteMic();
// muteCam();
// console.log(stream.getVideoTracks());
// stream.getVideoTracks()[0].stop();
// };
