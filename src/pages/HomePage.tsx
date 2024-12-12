import React from "react";
import { useLoaderData } from "react-router-dom";
import ScrollableRow from "@/components/ScrollabeRow";
import axios from "axios";

interface MediaItem {
  id?: number;
  tvShowId?: number;
  animeId?: number;
  posterUrl?: string;
  posterURl?: string;
  title: string;
}

interface LoaderData {
  animeData: MediaItem[];
  movieData: MediaItem[];
  tvShowData: MediaItem[];
}

const HomePage: React.FC = () => {
  const { animeData, movieData, tvShowData } = useLoaderData() as LoaderData;

  return (
    <div className="p-4 bg-[#181818] z-0">
      <ScrollableRow
        title="Movies"
        titlePage="/movie"
        data={movieData}
        linkPrefix="movie"
      />
      <ScrollableRow
        title="TV Shows"
        titlePage="/tvshow"
        data={tvShowData}
        linkPrefix="tvShow"
      />
      <ScrollableRow
        title="Anime"
        titlePage="/anime"
        data={animeData}
        linkPrefix="anime"
      />
    </div>
  );
};

const HomeLoader = async (): Promise<LoaderData> => {
  const [moviesRes, tvShowsRes, animeRes] = await Promise.all([
    axios.get("/api/movies"),
    axios.get("/api/tvshow"),
    axios.get("/api/anime"),
  ]);

  return {
    animeData: animeRes.data.data,
    movieData: moviesRes.data.data,
    tvShowData: tvShowsRes.data.data,
  };
};

export { HomePage as default, HomeLoader };
