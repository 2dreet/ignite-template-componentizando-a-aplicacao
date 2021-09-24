import { useEffect, useState } from 'react';
import { api } from '../services/api';
import { Button } from './Button';
import GenreResponse from '../models/Genre';
import '../styles/sidebar.scss';

interface SideBarProps {
  setGenreId(genereId: number): void;
}

export function SideBar({setGenreId}: SideBarProps) {
  
  const [selectedGenreId, setSelectedGenreId] = useState(1);
  const [genres, setGenres] = useState<GenreResponse[]>([]);

  useEffect(() => {
    api.get<GenreResponse[]>('genres').then(response => {
      setGenres(response.data);
    });
  }, []);

  useEffect(() => {
    setGenreId(selectedGenreId);
  }, [selectedGenreId]);

  function handleClickButton(id: number) {
    setSelectedGenreId(id);
  }

  return (
    <nav className="sidebar">
        <span>Watch<p>Me</p></span>
        <div className="buttons-container">
          {genres.map(genre => (
            <Button
              key={String(genre.id)}
              title={genre.title}
              iconName={genre.name}
              onClick={() => handleClickButton(genre.id)}
              selected={selectedGenreId === genre.id}
            />
          ))}
        </div>
      </nav>
  );
}