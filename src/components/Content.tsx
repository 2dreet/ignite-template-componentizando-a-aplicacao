import Genre from '../models/Genre';
import Movie from '../models/Movie';
import { MovieCard } from '../components/MovieCard';
import { Header } from '../components/Header';

import '../styles/content.scss';

interface ContentProps { 
  selectedGenre: Genre;
  movies: Movie[];
}

export function Content({ selectedGenre, movies }: ContentProps) {
  return (
    <div className="container">
        <Header selectedGenre={selectedGenre} />
        <main>
          <div className="movies-list">
            {movies.map(movie => (
              <MovieCard key ={movie.imdbID} title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
            ))}
          </div>
        </main>
      </div>
  );
}