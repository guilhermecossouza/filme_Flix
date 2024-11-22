<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>filmeFlix - README</title>
</head>
<body>
    <h1 align="center">🎬 filmeFlix</h1>
    <p align="center">
        Um site de catálogo de filmes integrado com a API <a href="https://developer.themoviedb.org/reference/intro/getting-started" target="_blank" />The Movie Database (TMDb)</a>, onde você pode explorar, salvar seus                filmes favoritos e visualizar informações detalhadas.
    </p> 
    <h2>📋 Funcionalidades</h2>
    <ul>
        <li><strong>Tela Principal:</strong> Exibe um pôster do filme, título e uma breve sinopse.</li>
        <li><strong>Tela Detalhes:</strong> Mostra uma imagem mais detalhada do filme, sinopse completa e opção para salvar o filme no LocalStorage do navegador.</li>
        <li><strong>Tela Meus Favoritos:</strong> Lista de filmes salvos pelo usuário.</li>
    </ul>
    <h2>🚀 Tecnologias Utilizadas</h2>
    <ul>
        <li>React.js</li>
        <li>HTML5 e CSS3</li>
        <li>JavaScript (ES6+)</li>
        <li>API <a href="https://developer.themoviedb.org/reference/intro/getting-started" target="_blank">The Movie Database (TMDb)</a></li>
        <li>LocalStorage</li>
    </ul>
    <h2>🛠️ Como Rodar o Projeto</h2>
    <ol>
        <li>Clone o repositório:</li>
        <pre><code>git clone https://github.com/seu-usuario/filmeFlix.git</code></pre>
        <li>Entre no diretório do projeto:</li>
        <pre><code>cd filmeFlix</code></pre>
        <li>Instale as dependências:</li>
        <pre><code>npm install</code></pre>
        <li>Crie um arquivo <code>.env</code> na raiz do projeto com a sua chave da API TMDb:</li>
        <pre><code>REACT_APP_TMDB_API_KEY=SuaApiKeyAqui</code></pre>
        <li>Inicie o servidor de desenvolvimento:</li>
        <pre><code>npm start</code></pre>
        <li>Acesse o site em <a href="http://localhost:3000" target="_blank">http://localhost:3000</a>.</li>
    </ol>
    
</body>
</html>
