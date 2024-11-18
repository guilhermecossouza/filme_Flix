
import { Link, link } from 'react-router-dom'

import "./erro.css"

export default function Erro() {
    return (
        <div className="not-found">
            <h1>404</h1>
            <h2>Página não encontrada</h2>
            <p>A página que você está procurando não existe ou foi removida.</p>
            <Link to="/">Voltar para a página inicial</Link>
        </div>
    )
}