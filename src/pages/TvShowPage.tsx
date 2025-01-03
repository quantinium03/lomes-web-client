import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';

interface TvShow {
  tvShowId: string;
  title: string;
  rating: string;
  premieredData: string;
  description: string;
  director: string;
  writer: string;
  actor: string;
  genre: string;
  posterURl: string;
  seasons?: string[];
  noOfSeasons: string;
}

const TvShowPage: React.FC = () => {
  const [tvShow, setTvShows] = useState<TvShow[]>([]);

  useEffect(() => {
    axios
      .get("/api/tvshow")
      .then((res) => setTvShows(res.data.data))
      .catch((err) => console.log("Failed to fetch the TV shows", err.message));
  }, []);

  return (
    <div className="flex-grow">
      <div className="flex gap-4 flex-wrap mt-2">
        {tvShow.map((media) => (
          <Link key={media.tvShowId} to={`/tvShow/${media.tvShowId}`}>
            <img
              src={media.posterURl}
              alt={media.title}
              className="w-full h-64 aspect-[2/3] object-cover rounded-lg shadow-lg duration-300 hover:scale-105"
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TvShowPage;
