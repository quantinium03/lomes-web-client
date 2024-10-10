import PropTypes from 'prop-types'
import React from 'react'
import { Link } from 'react-router-dom'

const Content = ({ data }) => {
  return (
    <>
      <div className="flex gap-4 flex-wrap mt-2">
        {data.map((media) => (
          <Link key={media.id} to={`/movie/${media.id}`}>
            <img src={media.posterUrl} alt={media.title} className="w-full h-64 aspect-2/3 object-cover rounded-lg shadow-lg duration-300 hover:scale-105" />
          </Link>
        ))}
      </div>
    </>
  )
}


Content.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      directoryPath: PropTypes.string.isRequired,
      filePath: PropTypes.string.isRequired,
      year: PropTypes.string,
      releaseDate: PropTypes.string,
      runtime: PropTypes.string,
      genre: PropTypes.string,
      director: PropTypes.string,
      writer: PropTypes.string,
      actor: PropTypes.string,
      description: PropTypes.string,
      language: PropTypes.string,
      country: PropTypes.string,
      posterUrl: PropTypes.string.isRequired,
      imdbRating: PropTypes.string,
    })
  )
}

export default Content
