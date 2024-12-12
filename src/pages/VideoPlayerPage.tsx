import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Player from 'react-player';

export default function VideoPlayerPage() {
  const [url, setUrl] = useState('');
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

  return (
    <div className="">
      <Player
        url={url}
        light={""}
        playing
        controls
      />
    </div>
  );
}
