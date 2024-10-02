import React, { useEffect, useRef, useState } from "react";
import videojs from "video.js";
import "video.js/dist/video-js.css";
import VideoJS from "./VideoJS.jsx";

const VideoPlayerPage = () => {
  const playerRef = useRef(null);

  const videoJsOptions = {
    autoplay: true,
    controls: true,
    responsive: true,
    fluid: true,
    sources: [{
      src: 'http://localhost:6969/hls_segment/playlist.m3u8',
      type: 'application/x-mpegURL'
    }]
  };

  const handlePlayerReady = (player) => {
    playerRef.current = player;
    player.on('waiting', () => {
      videojs.log("player is waiting");
    })

    player.on('dispose', () => {
      videojs.log('player will dispose');
    })
  }

  return (
    <>
      <div>
        <VideoJS options={videoJsOptions} onReady={handlePlayerReady} />
      </div>
    </>
  );
};

export default VideoPlayerPage;
