import React from 'react';

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

interface SeasonSelectorProps {
  tvShowData: TvShowData;
  onSeasonChange: (season: string) => void;
}

const SeasonSelector: React.FC<SeasonSelectorProps> = ({ tvShowData, onSeasonChange }) => {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    onSeasonChange(e.target.value);
  };

  return (
    <div className="mb-4">
      <select
        className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        onChange={handleChange}
      >
        <option value="">Select a season</option>
        {[...Array(tvShowData.noOfSeasons)].map((_, i) => (
          <option key={i + 1} value={i + 1}>
            Season {i + 1}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SeasonSelector;
