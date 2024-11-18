import { Link } from 'react-router-dom' 

import './header.css'

export default function Header() {
    return (
        <header>
            <Link to="/" className='logo'>Filme flix</Link>
            <Link to="/favoritos" className='favoritos'>Meus filmes</Link> 
        </header>
    );
}