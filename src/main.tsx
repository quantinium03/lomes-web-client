import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./layout.tsx";
import HomePage, { HomeLoader } from "./pages/HomePage.tsx";
import MoviePage from "./pages/MoviePage.tsx";
import TvShowPage from "./pages/TvShowPage.tsx";
import AnimePage from "./pages/AnimePage.tsx";
import MusicPage from "./pages/MusicPage.tsx";
import SettingLayout from "./pages/SettingLayout.tsx";
import General from "./pages/General.tsx";
import MoviePageId, { MovieLoader } from "./pages/MoviePageId.tsx"
import VideoPlayerPage from "./pages/VideoPlayerPage.tsx"
import TvShowPageId, { TvShowLoader } from "./pages/TvShowPageId.tsx"
import AnimePageId, { AnimeLoader } from "./pages/AnimePageId.tsx"

// Define your routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <HomePage />, loader: HomeLoader },

      { path: "/movie", element: <MoviePage /> },
      { path: "/movie/:id", element: <MoviePageId />, loader: MovieLoader },
      { path: "/movie/:id/play", element: <VideoPlayerPage /> },

      { path: "/tvshow", element: <TvShowPage /> },
      { path: "/tvshow/:id", element: <TvShowPageId />, loader: TvShowLoader },
      { path: "/tvshow/:id/play", element: <VideoPlayerPage /> },

      { path: "/anime", element: <AnimePage /> },
      { path: "/anime/:id", element: <AnimePageId />, loader: AnimeLoader },
      { path: "/anime/:id/play", element: <VideoPlayerPage /> },

      { path: "/music", element: <MusicPage /> },
    ],
  },
  {
    path: "/setting",
    element: <SettingLayout />,
    children: [{ index: true, element: <General /> }],
  },
]);

// Render the app
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
