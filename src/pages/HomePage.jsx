import { useLoaderData } from "react-router";
import ScrollableRow from '../components/ScrollableRow';


const HomePage = () => {
  const { animeData, movieData, tvShowData } = useLoaderData();

  return (
    <div className="p-4 bg-gray-900">
      <ScrollableRow title="Movies" titlePage="/movie" data={movieData} linkPrefix="movie" />
      <ScrollableRow title="TV Shows" titlePage="/tvshow" data={tvShowData} linkPrefix="tvShow" />
      <ScrollableRow title="Anime" titlePage="/anime" data={animeData} linkPrefix="anime" />
    </div>
  );
}

const HomeLoader = async () => {
  const [MoviesRes, TvShowsRes, AnimeRes] = await Promise.all([
    fetch('/api/movies'),
    fetch('/api/tvshow'),
    fetch('/api/anime')
  ]);
  const animeData = await AnimeRes.json();
  const movieData = await MoviesRes.json();
  const tvShowData = await TvShowsRes.json();
  return { animeData: animeData.data, movieData: movieData.data, tvShowData: tvShowData.data };
}

export { HomePage as default, HomeLoader };
