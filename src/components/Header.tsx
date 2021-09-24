import Genere from '../models/Genere';

import '../styles/header.scss';

interface HeaderProps {
  selectedGenere: Genere;
}

export function Header({selectedGenere}: HeaderProps) {
  return(
    <header>
        <span className="category">Categoria:<span> {selectedGenere.title}</span></span>
    </header>
  );
}