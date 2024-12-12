import { ChevronLeft, ChevronRight } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

interface MediaItem {
  id?: number;
  tvShowId?: number;
  animeId?: number;
  posterUrl?: string;
  title?: string;
  posterURl: string;
}

interface ScrollableRowProps {
  title: string;
  data: MediaItem[];
  linkPrefix: string;
  titlePage: string;
}

const ScrollableRow: React.FC<ScrollableRowProps> = ({
  title,
  data,
  linkPrefix,
  titlePage,
}) => {
  const scrollContainerRef = React.useRef<HTMLDivElement | null>(null);

  const scroll = (direction: number) => {
    const container = scrollContainerRef.current;
    if (container) {
      const scrollAmount = container.clientWidth * 0.8;
      container.scrollBy({
        left: direction * scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="mb-8 relative">
      <h2 className="text-2xl font-bold text-white mb-4">
        <Link to={titlePage}>{title}</Link>
      </h2>
      <div className="relative group">
        <button
          onClick={() => scroll(-1)}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full z-10 opacity-0 group-hover:opacity-100 transition-opacity"
          aria-label="Scroll left"
        >
          <ChevronLeft size={24} />
        </button>
        <div
          ref={scrollContainerRef}
          className="flex overflow-x-auto gap-4 pb-4 scrollbar-hide"
        >
          {data.map((media) => {
            return (
              <Link
                key={media.id || media.tvShowId || media.animeId} // Ensure unique key
                to={`/${linkPrefix}/${media.id || media.tvShowId || media.animeId}`}
                className="flex-shrink-0"
              >
                <img
                  src={media.posterUrl || media.posterURl}
                  alt={media.title}
                  className="w-36 h-52 object-cover rounded-md shadow-lg transition-transform duration-300 hover:scale-105"
                />
              </Link>
            );
          })}
        </div>
        <button
          onClick={() => scroll(1)}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full z-10 opacity-0 group-hover:opacity-100 transition-opacity"
          aria-label="Scroll right"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
};

export default ScrollableRow;
