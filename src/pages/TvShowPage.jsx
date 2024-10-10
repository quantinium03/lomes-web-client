import React, { useEffect, useState } from 'react'
import Content from '../components/Content';
import { Link } from 'react-router-dom';

const TvShowPage = () => {
  const [tvShow, setTvShows] = useState([]);

  useEffect(() => {
    const fetchTvShows = async () => {
      try {
        const res = await fetch('/api/tvshow');
        const result = await res.json();
        setTvShows(result.data);
      } catch (err) {
        console.log("Failed to fetch the movies", err.message);
      }
    }
    fetchTvShows();
  }, []);

  return (
    <div className="flex-grow">
      <div className="flex gap-4 flex-wrap mt-2">
        {tvShow.map((media) => (
          <Link key={media.tvShowId} to={`/tvShow/${media.tvShowId}`}>
            <img src={media.posterURl} alt={media.title} className="w-full h-64 aspect-[2/3] object-cover rounded-lg shadow-lg duration-300 hover:scale-105" />
          </Link>
        ))}
      </div>
    </div>
  )
}

export default TvShowPage
