import { useEffect, useState } from 'react';
import { api } from '../services/api';
import Genere from '../models/Genere';
import Movie from '../models/Movie';
import { MovieCard } from '../components/MovieCard';
import { Header } from '../components/Header';
import { useGenereContext } from '../hooks/GenereContext';

import '../styles/content.scss';

export function Content() {

  const { genereId } = useGenereContext();

  const [selectedGenere, setSelectedGenere] = useState<Genere>({} as Genere);
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() =>{
    if(genereId) {
      api.get<Movie[]>(`movies/?Genre_id=${genereId}`).then(response => {
        setMovies(response.data);
      });

      api.get<Genere>(`genres/${genereId}`).then(response => {
        setSelectedGenere(response.data);
      })
    }
  }, [genereId]);

  return (
    <div className="container">
        <Header selectedGenere={selectedGenere} />
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