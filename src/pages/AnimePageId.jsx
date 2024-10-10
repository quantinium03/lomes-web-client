import { useLoaderData, useNavigate } from 'react-router'

const AnimePageId = () => {
  const { animeData, animeEpisodeData } = useLoaderData();
  const navigate = useNavigate();

  const handlePlay = () => {
    navigate(`/anime/${animeData.animeId}/play`);
  }

  return (
    <>
      <div className="flex flex-row mx-auto py-0 xl:pt-16 px-0 lg:px-16 lg:mx-24 items-center">
        <div className="pr-24 w-2/3">
          <h1 className="text-white text-4xl pb-2 font-bold">
            {animeData.title}
          </h1>
          <div className="text-white flex flex-row">
            <span className="flex flex-row items-center">
              <span className="text-sm pr-2">{animeData.score} </span>
            </span>
            <span className="text-sm self-center px-2">{animeData.year}</span>
            <span className="text-sm self-center px-2">{animeData.type}</span>
            <span className="text-sm self-center px-2">{animeData.source}</span>
          </div>
          <div className="py-2 text-white">{animeData.description}</div>
          <div className="text-white mb-4">
            <div>
              <span className="font-bold text-gruvora">Studio: </span>
              <span className="text-white">{animeData.studios}</span>
            </div>
            <div>
              <span className="font-bold text-gruvora">Genres: </span>
              <span className="text-white">{animeData.genre}</span>
            </div>
            <div>
              <span className="font-bold text-gruvora">Status: </span>
              <span className="text-white">{animeData.status}</span>
            </div>
          </div>

        </div>

        <div className="w-1/3 flex justify-center">
          <img src={animeData.posterUrl} alt={animeData.title} className="w-[256px]" />
        </div>

      </div>

      <div className="mx-auto px-0 lg:px-16 lg:mx-24 items-center pt-9">
        <h2 className="text-white font-bold text-2xl">Episodes: </h2>
        <div className="flex gap-4 flex-wrap mt-2">
          {animeEpisodeData.map((media) => (
            <button onClick={handlePlay} key={media.animeId} className="flex border-zinc-300 bg-zinc-800 border p-4 aspect-square text-white items-center rounded">
              {media.episodeId}
            </button>
          ))}
        </div>
      </div>
    </>
  )
}

const AnimeLoader = async ({ params }) => {
  const [animeRes, episodeRes] = await Promise.all([
    fetch(`/api/anime/${params.id}`),
    fetch(`/api/anime/${params.id}/episodes`)
  ])

  const animeData = await animeRes.json();
  const animeEpisodeData = await episodeRes.json();
  console.log(animeData.data);
  console.log(animeEpisodeData.data)

  return {
    animeData: animeData.data,
    animeEpisodeData: animeEpisodeData.data,
  }
};


export { AnimePageId as default, AnimeLoader };
