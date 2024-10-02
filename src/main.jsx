import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import './index.css'
import Layout from './layouts/layout.jsx';
import HomePage from './pages/HomePage.jsx';
import MoviePage from './pages/MoviePage.jsx';
import MoviePageId, { MovieLoader } from "./pages/MoviePageId.jsx"
import VideoPlayerPage from "./pages/VideoPlayerPage.jsx"
import TvShowPage from "./pages/TvShowPage.jsx"
import AnimePage from "./pages/AnimePage.jsx"
import MusicPage from "./pages/MusicPage.jsx"
import SettingPage from "./pages/SettingPage.jsx"
import ServerPage from "./pages/ServerPage.jsx"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<HomePage />} />
      <Route path="/movie" element={<MoviePage />} />
      <Route path="/movie/:id" element={<MoviePageId />} loader={MovieLoader} />
      <Route path="/movie/:id/play" element={<VideoPlayerPage />} />
      <Route path="/tv-show" element={<TvShowPage />} />
      <Route path="/anime" element={<AnimePage />} />
      <Route path="/music" element={<MusicPage />} />
      <Route path="/setting" element={< SettingPage />} />
      <Route path="/server" element={< ServerPage />} />
    </Route>
  )
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
