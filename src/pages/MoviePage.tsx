import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// Define the Movie interface to represent the structure of each movie object
interface Movie {
  id: number;
  title: string;
  directoryPath: string;
  filePath: string;
  year?: string;
  releaseDate?: string;
  runtime?: string;
  genre?: string;
  director?: string;
  writer?: string;
  actor?: string;
  description?: string;
  language?: string;
  country?: string;
  posterUrl: string;
  imdbRating?: string;
}

const MoviePageWithContent: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);

  // Fetch movies data
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch("/api/movies");
        const result = await response.json();
        setMovies(result.data);
      } catch (err) {
        console.log("Error Fetching data", err.message);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div className="flex-grow">
      {/* Render movies content */}
      <div className="flex gap-4 flex-wrap mt-2">
        {movies.map((media) => (
          <Link key={media.id} to={`/movie/${media.id}`}>
            <img
              src={media.posterUrl}
              alt={media.title}
              className="w-full h-64 aspect-2/3 object-cover rounded-lg shadow-lg duration-300 hover:scale-105"
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MoviePageWithContent;
