import express from 'express';

const app = express();
const PORT = 3030;

// 1. Rota Principal (/) - Página Inicial
app.get('/', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="pt-BR">
        <head>
            <meta charset="UTF-8">
            <title>Catálogo de Heróis</title>
            <style>
                body { font-family: Arial, sans-serif; margin: 30px; line-height: 1.6; }
                h1 { color: #2c3e50; }
                a { color: #2980b9; text-decoration: none; }
                a:hover { text-decoration: underline; }
            </style>
        </head>
        <body>
            <h1>Catálogo de Heróis</h1>
            <p>Bem-vindo ao site da Marvel e DC! Escolha uma empresa ou um personagem abaixo para explorar.</p>
            
            <h2>Universos de Heróis</h2>
            <ul>
                <li><a href="/marvel">Ver heróis da Marvel</a></li>
                <li><a href="/dc">Ver heróis da DC</a></li>
            </ul>

            <hr>

            <h2>Personagens em Destaque</h2>
            <ul>
                <li><a href="/personagem/marvel/Homem%20de%20Ferro">Homem de Ferro (Marvel)</a></li>
                <li><a href="/personagem/marvel/Thor">Thor (Marvel)</a></li>
                <li><a href="/personagem/dc/Batman">Batman (DC)</a></li>
                <li><a href="/personagem/dc/Superman">Superman (DC)</a></li>
            </ul>
        </body>
        </html>
    `);
});

// 2. Rota Marvel (/marvel)
app.get('/marvel', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="pt-BR">
        <head>
            <meta charset="UTF-8">
            <title>Marvel Comics</title>
            <style>
                body { font-family: Arial, sans-serif; margin: 30px; line-height: 1.6; }
                h1 { color: #e74c3c; }
                a { color: #2980b9; text-decoration: none; }
            </style>
        </head>
        <body>
            <h1>Marvel Comics</h1>
            <p>A Marvel Comics é uma das maiores editoras de quadrinhos do mundo, criadora de heróis icônicos como Homem-Aranha, Vingadores e X-Men.</p>
            
            <h2>Personagens Disponíveis</h2>
            <ul>
                <li><a href="/personagem/marvel/Thor">Thor</a></li>
                <li><a href="/personagem/marvel/Homem%20de%20Ferro">Homem de Ferro</a></li>
                <li><a href="/personagem/marvel/Capitao%20America">Capitão América</a></li>
            </ul>

            <p><a href="/">← Voltar para a Página Inicial</a></p>
        </body>
        </html>
    `);
});

// 2. Rota DC (/dc)
app.get('/dc', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="pt-BR">
        <head>
            <meta charset="UTF-8">
            <title>DC Comics</title>
            <style>
                body { font-family: Arial, sans-serif; margin: 30px; line-height: 1.6; }
                h1 { color: #2980b9; }
                a { color: #2980b9; text-decoration: none; }
            </style>
        </head>
        <body>
            <h1>DC Comics</h1>
            <p>A DC Comics é a lendária editora responsável por fundar o gênero de super-heróis, lar de ícones como Superman, Batman e Mulher-Maravilha.</p>
            
            <h2>Personagens Disponíveis</h2>
            <ul>
                <li><a href="/personagem/dc/Batman">Batman</a></li>
                <li><a href="/personagem/dc/Superman">Superman</a></li>
                <li><a href="/personagem/dc/Mulher%20Maravilha">Mulher Maravilha</a></li>
            </ul>

            <p><a href="/">← Voltar para a Página Inicial</a></p>
        </body>
        </html>
    `);
});

// 3. Rota com dois parâmetros obrigatórios (/personagem/:empresa/:nome)
app.get('/personagem/:empresa/:nome', (req, res) => {
    const { empresa, nome } = req.params;

    res.send(`
        <!DOCTYPE html>
        <html lang="pt-BR">
        <head>
            <meta charset="UTF-8">
            <title>Detalhes do Personagem</title>
            <style>
                body { font-family: Arial, sans-serif; margin: 30px; line-height: 1.6; }
                h1 { color: #2c3e50; }
                .card { background: #f8f9fa; border-left: 5px solid #2980b9; padding: 15px; margin-bottom: 20px; }
                a { color: #2980b9; text-decoration: none; }
            </style>
        </head>
        <body>
            <h1>Detalhes do Personagem</h1>
            
            <div class="card">
                <p><strong>Universo / Empresa:</strong> ${empresa.toUpperCase()}</p>
                <p><strong>Nome do Personagem:</strong> ${nome}</p>
            </div>

            <hr>
            <p><a href="/${empresa.toLowerCase()}">← Ver mais heróis da ${empresa}</a> | <a href="/">Página Inicial</a></p>
        </body>
        </html>
    `);
});

// Inicialização do servidor na porta 3030
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
