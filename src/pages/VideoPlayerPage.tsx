import { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import Player from 'react-player';

export default function VideoPlayerPage() {
  const [url, setUrl] = useState('');
  const playerRef = useRef<any>(null);
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const mediaPath = params.get('mediaPath');
    if (mediaPath) {
      const trimmedMediaPath = mediaPath.replace('/home/quantinium/', '');
      const videoUrl = `http://0.0.0.0:8000/${trimmedMediaPath}`;
      setUrl(videoUrl);
    }
  }, [location.search]);

  useEffect(() => {
    if (playerRef.current) {
      const playerElement = playerRef.current.wrapper;
      if (playerElement.requestFullscreen) {
        playerElement.requestFullscreen();
      } else if (playerElement.mozRequestFullScreen) { // Firefox
        playerElement.mozRequestFullScreen();
      } else if (playerElement.webkitRequestFullscreen) { // Chrome, Safari and Opera
        playerElement.webkitRequestFullscreen();
      } else if (playerElement.msRequestFullscreen) { // IE/Edge
        playerElement.msRequestFullscreen();
      }
    }
  }, [url]);

  return (
    <div className="fixed inset-0 bg-black flex justify-center items-center">
      <Player
        ref={playerRef}
        url={url}
        width="100%"
        height="100%"
        light={""}
        playing
        controls
      />
    </div>
  );
}
