import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const AnimePage = () => {
  const [anime, setAnime] = useState([]);

  useEffect(() => {
    const fetchAnimes = async () => {
      try {
        const res = await fetch('/api/anime');
        const result = await res.json();
        console.log(result.data);
        setAnime(result.data);
      } catch (err) {
        console.log("Failed to fetch the movies", err.message);
      }
    }
    fetchAnimes();
  }, []);

  return (
    <div className="flex-grow">
      <div className="flex gap-4 flex-wrap mt-2">
        {anime.map((media) => (
          <Link key={media.animeId} to={`/anime/${media.animeId}`}>
            <img src={media.posterUrl} alt={media.title} className="w-full h-64 aspect-[2/3] object-cover rounded-lg shadow-lg duration-300 hover:scale-105" />
          </Link>
        ))}
      </div>
    </div>
  )
}

export default AnimePage;

