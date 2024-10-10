import React from 'react';

const SeasonSelector = ({ tvShowData, onSeasonChange }) => {
  return (
    <div className="mb-4">
      <select 
        className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        onChange={(e) => onSeasonChange(e.target.value)}
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
