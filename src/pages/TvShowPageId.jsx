import React, { useEffect, useState } from 'react'
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import { FaImdb } from "react-icons/fa6";
import SeasonSelector from '../components/seasonSelector';

const TvShowPageId = () => {
  const tvShowData = useLoaderData();
  const [selectedSeason, setSelectedSeason] = useState('');
  const [episodesPerSeason, setEpisodesPerSeason] = useState([]);
  const navigate = useNavigate();

  const handleSeasonChange = (season) => {
    setSelectedSeason(season)
  }

  const handlePlay = () => {
    navigate(`/tvshow/${tvShowData.tvShowId}/play`);
  }

  useEffect(() => {
    const fetchEpisodes = async () => {
      const episodes = await fetch(`http://localhost:6969/api/v1/tvshow/${tvShowData.tvShowId}/episodes/${selectedSeason}`)
      const data = await episodes.json();
      setEpisodesPerSeason(data.data);
    }
    fetchEpisodes();

  }, [tvShowData.tvShowId, selectedSeason])


 return (
    <> <div className="flex flex-row mx-auto py-0 xl:py-16 px-0 lg:px-24 lg:mx-24 items-center">
      <div className="pr-24">
        <h1 className="text-white text-4xl pb-2 font-bold">
          {tvShowData.title}
        </h1>
        <div className="text-white flex flex-row">
          <span className="flex flex-row items-center">
            <div className="px-2 text-yellow-500 text-lg">
              <FaImdb />
            </div>
            <span className="text-sm pr-2">{tvShowData.rating} </span>
          </span>
          <span className="text-sm self-center px-2">{tvShowData.premieredData}</span>
        </div>
        <div className="py-2 text-white" dangerouslySetInnerHTML={{ __html: tvShowData.description }} />
        <div className="text-white mb-4">
          <div>
            <span className="font-bold text-gruvora">Director: </span>
            <span className="text-white">{tvShowData.director}</span>
          </div>
          <div>
            <span className="font-bold text-gruvora">Writer: </span>
            <span className="text-white">{tvShowData.writer}</span>
            <div>
              <span className="font-bold text-gruvora">Actors: </span>
              <span className="text-white">{tvShowData.actor}</span>
            </div>
            <div>
              <span className="font-bold text-gruvora">Genres: </span>
              <span className="text-white">{tvShowData.genre}</span>
            </div>
          </div>
        </div>
        <div className="w-48">
          <SeasonSelector tvShowData={tvShowData} onSeasonChange={handleSeasonChange} />
        </div>
      </div>

      <div className="ml-24">
        <img src={tvShowData.posterURl} alt={tvShowData.title} className="w-[512px]" />
      </div>

    </div>
      <div className="mx-auto px-0 lg:px-24 lg:mx-24 items-center">
        <div className="flex gap-4 flex-wrap mt-2">
          {episodesPerSeason.map((media) => (
            <Link onClick={handlePlay} key={media.id}> 
              <img src={media.episodePosterUrl} alt={media.episodeTitle} className="w-full h-44 aspect-4/3 object-cover rounded-lg shadow-lg duration-300 hover:scale-105" />
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}


const TvShowLoader = async ({ params }) => {
  const res = await fetch(`/api/tvshow/${params.id}`);
  const data = await res.json();
  return data.data;
};

export { TvShowPageId as default, TvShowLoader };
