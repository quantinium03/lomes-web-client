import { useEffect, useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { FaImdb } from 'react-icons/fa6';
import SeasonSelector from '../components/SeasonSelector.tsx';
import axios from 'axios';

interface TvShowData {
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

interface Episode {
  id: string;
  episodeTitle: string;
  episodePosterUrl: string;
  seasonNumber: number;
  episodeNumber: number;
  airDate: string;
  airTime: string;
  runtime: string;
  rating: string;
  description: string;
  episodePath: string;
}

interface LoaderParams {
  params: {
    id: string;
  };
}

const TvShowPageId: React.FC = () => {
  const tvShowData = useLoaderData() as TvShowData;
  const [selectedSeason, setSelectedSeason] = useState<string>('');
  const [episodesPerSeason, setEpisodesPerSeason] = useState<Episode[]>([]);
  const navigate = useNavigate();

  const handleSeasonChange = (season: string): void => {
    setSelectedSeason(season);
  };

  const handlePlay = (episodePath: string): void => {
    const trimmedPath = episodePath.replace("/home/quantinium", "");
    const query = new URLSearchParams({
      mediaPath: trimmedPath,
      userId: "1",
    });
    navigate(`/tvshow/${tvShowData.tvShowId}/play?${query}`);
  };

  useEffect(() => {
    if (selectedSeason) {
      axios
        .get(`http://localhost:6969/api/v1/tvshow/${tvShowData.tvShowId}/episodes/${selectedSeason}`)
        .then((res) => {
          setEpisodesPerSeason(res.data.data)
          console.log(res.data.data);
        })
        .catch((err) => console.log("Failed to fetch episodes: ", err.message))
    }
  }, [tvShowData.tvShowId, selectedSeason]);

  return (
    <>
      <div className="flex flex-row mx-auto py-0 xl:py-16 px-0 lg:px-24 lg:mx-24 items-center">
        <div className="pr-24">
          <h1 className="text-white text-4xl pb-2 font-bold">
            {tvShowData.title}
          </h1>
          <div className="text-white flex flex-row">
            <span className="flex flex-row items-center">
              <div className="px-2 text-yellow-500 text-lg">
                <FaImdb />
              </div>
              <span className="text-sm pr-2">{tvShowData.rating}</span>
            </span>
            <span className="text-sm self-center px-2">{tvShowData.premieredData}</span>
          </div>
          <div
            className="py-2 text-white"
            dangerouslySetInnerHTML={{ __html: tvShowData.description }}
          />
          <div className="text-white mb-4">
            <div>
              <span className="font-bold text-gruvora">Director: </span>
              <span className="text-white">{tvShowData.director}</span>
            </div>
            <div>
              <span className="font-bold text-gruvora">Writer: </span>
              <span className="text-white">{tvShowData.writer}</span>
            </div>
            <div>
              <span className="font-bold text-gruvora">Actors: </span>
              <span className="text-white">{tvShowData.actor}</span>
            </div>
            <div>
              <span className="font-bold text-gruvora">Genres: </span>
              <span className="text-white">{tvShowData.genre}</span>
            </div>
          </div>
          <div className="w-48">
            <SeasonSelector
              tvShowData={tvShowData}
              onSeasonChange={handleSeasonChange}
            />
          </div>
        </div>
        <div className="ml-24">
          <img
            src={tvShowData.posterURl}
            alt={tvShowData.title}
            className="w-full max-h-[512px] h-auto rounded-lg shadow-lg object-contain"
          />
        </div>
      </div>
      <div className="mx-auto px-0 lg:px-24 lg:mx-24 items-center">
        {episodesPerSeason.length === 0 ? (
          <p className="text-white text-lg text-center mt-4">
            No episodes found for the selected season.
          </p>
        ) : (
          <ul className="flex gap-4 flex-wrap mt-2">
            {episodesPerSeason.map((episode) => (
              <li key={episode.id} onClick={() => handlePlay(episode.episodePath)}>
                <img
                  src={episode.episodePosterUrl}
                  alt={episode.episodeTitle}
                  className="w-full h-44 aspect-4/3 object-cover rounded-lg shadow-lg duration-300 hover:scale-105"
                />
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

const TvShowLoader = async ({ params }: LoaderParams): Promise<TvShowData> => {
  try {
    const res = await fetch(`/api/tvshow/${params.id}`);
    const data = await res.json();
    if (!data || !data.data) throw new Error('TV show data not found');
    return data.data;
  } catch (error) {
    console.error('Error loading TV show:', error);
    return {
      tvShowId: '',
      title: 'Not Found',
      rating: 'N/A',
      premieredData: 'N/A',
      description: 'Description not available.',
      director: 'N/A',
      writer: 'N/A',
      actor: 'N/A',
      genre: 'N/A',
      posterURl: '',
      noOfSeasons: '',
    };
  }
};

export { TvShowPageId as default, TvShowLoader };
