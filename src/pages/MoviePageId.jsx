import { useLoaderData, useNavigate } from "react-router-dom";
import { FaImdb } from "react-icons/fa6";
import React from "react";

const MoviePageId = () => {
  const movieData = useLoaderData();
  const navigate = useNavigate();

  const handlePlay = () => {
    navigate(`/movie/${movieData.id}/play`);
  }

  return (
    <>
      <div className="flex flex-row mx-auto py-0 xl:py-16 px-0 lg:px-24 lg:mx-24 items-center">
        <div className="pr-24">
          <h1 className="text-white text-4xl pb-2 font-bold">
            {movieData.title}
          </h1>
          <div className="text-white flex flex-row">
            <span className="flex flex-row items-center">
              <div className="px-2 text-yellow-500 text-lg">
                <FaImdb />
              </div>
              <span className="text-sm pr-2">{movieData.imdbRating} </span>
            </span>
            <span className="text-sm self-center px-2">
              {movieData.runtime}
            </span>
            <span className="text-sm self-center px-2">{movieData.year}</span>
          </div>
          <div className="py-2 text-white">{movieData.description}</div>
          <div className="text-white mb-4">
            <div>
              <span className="font-bold text-gruvora">Director: </span>
              <span className="text-white">{movieData.director}</span>
            </div>
            <div>
              <span className="font-bold text-gruvora">Writer: </span>
              <span className="text-white">{movieData.writer}</span>
              <div>
                <span className="font-bold text-gruvora">Actors: </span>
                <span className="text-white">{movieData.actor}</span>
              </div>
              <div>
                <span className="font-bold text-gruvora">Genres: </span>
                <span className="text-white">{movieData.genre}</span>
              </div>
            </div>
          </div>
          <div className="">
            <button className="text-2xl px-2 py-1 font-bold text-white bg-[#b8bb26]" onClick={handlePlay}>PLAY</button>
          </div>
        </div>

        <div className="ml-24">
          <img src={movieData.posterUrl} alt={movieData.title} className="w-[512px]" />
        </div>
      </div>
    </>
  );
};

const MovieLoader = async ({ params }) => {
  const res = await fetch(`/api/movies/${params.id}`);
  const data = await res.json();
  return data.data;
};

export { MoviePageId as default, MovieLoader };
