import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import './index.css'
import Layout from './layouts/layout.jsx';
import HomePage, { HomeLoader } from './pages/HomePage.jsx';
import MoviePage from './pages/MoviePage.jsx';
import VideoPlayerPage from "./pages/VideoPlayerPage.jsx"
import TvShowPage from "./pages/TvShowPage.jsx"
import AnimePage from "./pages/AnimePage.jsx"
import MusicPage from "./pages/MusicPage.jsx"
import SettingPage from "./pages/SettingPage.jsx"
import ServerPage from "./pages/ServerPage.jsx"
import MoviePageId, { MovieLoader } from "./pages/MoviePageId.jsx"
import TvShowPageId, { TvShowLoader } from "./pages/TvShowPageId.jsx"
import AnimePageId, { AnimeLoader } from "./pages/AnimePageId.jsx"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<HomePage />}  loader={HomeLoader}/>
      {/* MOVIES */}
      <Route path="/movie" element={<MoviePage />} />
      <Route path="/movie/:id" element={<MoviePageId />} loader={MovieLoader} />
      <Route path="/movie/:id/play" element={<VideoPlayerPage />} />

      {/* TV SHOW */}
      <Route path="/tvshow" element={<TvShowPage />} />
      <Route path="/tvshow/:id" element={<TvShowPageId />} loader={TvShowLoader} />
      <Route path="/tvshow/:id/play" element={<VideoPlayerPage />} />

      {/* ANIME*/}
      <Route path="/anime" element={<AnimePage />} />
      <Route path="/anime/:id" element={<AnimePageId />} loader={AnimeLoader} />
      <Route path="/anime/:id/play" element={<VideoPlayerPage />} />

      {/* MUSIC */}
      <Route path="/music" element={<MusicPage />} />

      {/* SETTING */}
      <Route path="/setting" element={< SettingPage />} />

      {/* SERVER*/}
      <Route path="/server" element={< ServerPage />} />
    </Route>
  )
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
