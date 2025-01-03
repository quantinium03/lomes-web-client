import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ClerkProvider } from '@clerk/clerk-react'
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
import { ProtectedRoute } from "./components/ProtectRoute.tsx";

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;
if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
        loader: HomeLoader
      },
      {
        path: "/movie",
        element: (
          <ProtectedRoute>
            <MoviePage />
          </ProtectedRoute>
        )
      },
      {
        path: "/movie/:id",
        element: (
          <ProtectedRoute>
            <MoviePageId />
          </ProtectedRoute>
        ),
        loader: MovieLoader
      },
      {
        path: "/movie/:id/play",
        element: (
          <ProtectedRoute>
            <VideoPlayerPage />
          </ProtectedRoute>
        )
      },
      {
        path: "/tvshow",
        element: (
          <ProtectedRoute>
            <TvShowPage />
          </ProtectedRoute>
        )
      },
      {
        path: "/tvshow/:id",
        element: (
          <ProtectedRoute>
            <TvShowPageId />
          </ProtectedRoute>
        ),
        loader: TvShowLoader
      },
      {
        path: "/tvshow/:id/play",
        element: (
          <ProtectedRoute>
            <VideoPlayerPage />
          </ProtectedRoute>
        )
      },
      {
        path: "/anime",
        element: (
          <ProtectedRoute>
            <AnimePage />
          </ProtectedRoute>
        )
      },
      {
        path: "/anime/:id",
        element: (
          <ProtectedRoute>
            <AnimePageId />
          </ProtectedRoute>
        ),
        loader: AnimeLoader
      },
      {
        path: "/anime/:id/play",
        element: (
          <ProtectedRoute>
            <VideoPlayerPage />
          </ProtectedRoute>
        )
      },
      {
        path: "/music",
        element: (
          <ProtectedRoute>
            <MusicPage />
          </ProtectedRoute>
        )
      },
    ],
  },
  {
    path: "/setting",
    element: <SettingLayout />,
    children: [{
      index: true,
      element: (
        <ProtectedRoute>
          <General />
        </ProtectedRoute>
      )
    },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ClerkProvider
      publishableKey={PUBLISHABLE_KEY}
      afterSignOutUrl="/"
    >
      <RouterProvider router={router} />
    </ClerkProvider>
  </StrictMode>
);
