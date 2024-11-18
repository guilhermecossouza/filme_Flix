import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'

import './favoritos.css'

export default function Favoritos() {
    const [filmes, setFilmes] = useState([]);

    useEffect(() => {
        const minhaLista = localStorage.getItem("@filmeFlix");
        setFilmes(JSON.parse(minhaLista) || []);
    }, [])

    function excluirFilme(id) {
        const filmesFiltrados =  filmes.filter((item) => {
            return (item.id !== id);
        });
        setFilmes(filmesFiltrados)
        localStorage.setItem("@filmeFlix", JSON.stringify(filmesFiltrados));
        toast.success("Filme removido com sucesso!");
    }

    return (
        <div className='meus-filmes'>
            <h1>Minha Lista</h1>
            {filmes.length === 0 && <span>Voce ainda nâo possui filmes salvos :(</span>}
            <ul>
                {filmes.map((filme) => {
                    return (
                        <li key={filme.id}>
                            <span>{filme.title}</span>
                            <div>
                                <Link to={`/filme/${filme.id}`}>Ver Detalhes</Link> 
                                <button onClick={ () => excluirFilme(filme.id) }>Remover</button>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    );
}