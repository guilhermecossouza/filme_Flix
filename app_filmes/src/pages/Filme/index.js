import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import api from '../../services/api';
import { toast } from 'react-toastify'

import './filme-info.css'

export default function Filme() {
    const { id } = useParams('id');
    const [ filme, setFilme ] = useState({});
    const [ loading, setLoading ] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        async function loadFilme() {
            await api.get(`movie/${id}`, {
                params: {
                    api_key: "e1dfa02d1d7de0cdc06e2de22252330e",
                    language: "pt-BR",
                }
            }).then((response) => {
                setFilme(response.data);
                setLoading(false);
            }).catch(() => {
                navigate("/", { replace: true });
                return;
            })
        }
        loadFilme();
        return () => {
            console.log("componente desmontado");
        }
    }, [ navigate, id ]);

    function salvarFilme() {
        const minhaLista = localStorage.getItem("@filmeFlix");
        let filmesSalvos = JSON.parse(minhaLista) || [];
        const novoFilme = filmesSalvos.some((itemFilme) => itemFilme.id === filme.id); // retun true ou false         
        if (novoFilme) {
            toast.warn("Esse filme ja foi salvo");
            return;
        }

        filmesSalvos.push(filme);
        localStorage.setItem("@filmeFlix", JSON.stringify(filmesSalvos));
        toast.success("Filme salvo com sucesso!");
    }

    if (loading) {
        return(
            <div className="filme-info">
                <h2>Carregando detalhes...</h2>
            </div>
        )
    }

    return (
        <div className='filme-info'>
            <h1>{filme.title}</h1>
            <img src={`https://image.tmdb.org/t/p/original/${ filme.backdrop_path }`} alt={filme.title} />
            <h3>Sinopse</h3>
            <span>{filme.overview}</span> 
            <strong>Avaliação: {filme.vote_average}</strong>
            <div className='area-buttons'>
                <button onClick={ salvarFilme } className='btn-salvar'>Salvar</button>
                <button>
                    <a target="blank" href={`https://youtube.com/results?search_query=${filme.title} Trailer`} rel='external'>Trailer</a>
                </button>
            </div>
        </div>
    );
}