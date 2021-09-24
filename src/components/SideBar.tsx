import { useEffect, useState } from 'react';
import { api } from '../services/api';
import { Button } from './Button';
import GenreResponse from '../models/Genere';
import { useGenereContext } from '../hooks/GenereContext'
import '../styles/sidebar.scss';

export function SideBar() {
  
  const { setGenereId } = useGenereContext();
  const [selectedGenreId, setSelectedGenreId] = useState(1);
  const [generes, setGeneres] = useState<GenreResponse[]>([]);

  useEffect(() => {
    api.get<GenreResponse[]>('genres').then(response => {
      setGeneres(response.data);
    });
  }, []);

  useEffect(() => {
    setGenereId(selectedGenreId);
  }, [selectedGenreId]);

  function handleClickButton(id: number) {
    setSelectedGenreId(id);
  }

  return (
    <nav className="sidebar">
        <span>Watch<p>Me</p></span>
        <div className="buttons-container">
          {generes.map(genere => (
            <Button
              key={String(genere.id)}
              title={genere.title}
              iconName={genere.name}
              onClick={() => handleClickButton(genere.id)}
              selected={selectedGenreId === genere.id}
            />
          ))}
        </div>
      </nav>
  );
}