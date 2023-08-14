"use client"
import { useState,useEffect } from 'react';
import MovieModal from './movieModal';

const FilmCarousel = ({ movies }:any) => {
  const [selectedMovie, setSelectedMovie] = useState(null);

  const handleMovieClick = (movie:any) => {
    setSelectedMovie(movie);
  };

  const handleScroll = (event:Event):void=>{
        console.log(event)
  }

  useEffect(()=>{
    window.addEventListener('wheel',handleScroll);
    window.addEventListener('click',handleScroll);
    return ()=>{
        window.removeEventListener('scroll',handleScroll)
    }
  })

  return (
    <div className="relative">
      <div className="flex overflow-x-hidden">
        {movies.map((movie:any) => (
          <div
            key={movie.id}
            className="flex-shrink-0 w-1/2 md:w-1/3 lg:w-1/5 p-2 cursor-pointer"
            onClick={() => handleMovieClick(movie)}
          >
            <img src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`} alt={movie.title} className="w-full rounded-lg" />
            <p className="mt-2 text-sm font-medium">{movie.title}</p>
          </div>
        ))}
      </div>
      {selectedMovie && (
        <MovieModal movie={selectedMovie} onClose={() => setSelectedMovie(null)} />
      )}
    </div>
  );
};

export default FilmCarousel;
