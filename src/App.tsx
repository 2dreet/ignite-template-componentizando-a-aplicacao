import { useState } from 'react';
import { api } from './services/api';

import { SideBar } from './components/SideBar';
import { Content } from './components/Content';

import GenreResponse from './models/Genre';
import Movie from './models/Movie';

import './styles/global.scss';

export function App() {

  const [selectedGenre, setSelectedGenre] = useState<GenreResponse>({} as GenreResponse);
  const [movies, setMovies] = useState<Movie[]>([]);

  const setSelectedGenreId = (genereId: number) => {
    api.get<Movie[]>(`movies/?Genre_id=${genereId}`).then(response => {
      setMovies(response.data);
    });

    api.get<GenreResponse>(`genres/${genereId}`).then(response => {
      setSelectedGenre(response.data);
    })
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <SideBar setGenreId={setSelectedGenreId} />
      <Content movies={movies} selectedGenre={selectedGenre} />
    </div>
  )
}