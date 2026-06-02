# Blog Pessoal - TDE Desenvolvimento Web

Blog estatico em HTML5, CSS3 e JavaScript para entrega academica.

Site publicado em: **https://dimitrispode.github.io/**

## Estrutura

```
/
├── index.html
├── about.html
├── curriculum.html
├── contact.html
├── receitas.html
├── mousse-maracuja.html
├── css/style.css
├── js/script.js
└── assets/
```

## GitHub Pages

Este projeto usa o repositorio de usuario `DimitriSpode.github.io`. O GitHub Pages publica automaticamente o conteudo da branch `main` na raiz do repositorio.

### Configuracao

1. No repositorio: **Settings** → **Pages**
2. Em **Source**, escolha **Deploy from a branch**
3. Branch: `main` | Pasta: `/ (root)`
4. Salve e aguarde alguns minutos

### Testar

Abra https://dimitrispode.github.io/ e confira:

- Menu lateral e navegacao entre paginas
- Imagens em `assets/`
- Modo noturno e tamanho da fonte
- Formulario de contato (validacao no navegador)
- Abas em Receitas e links com `#maracuja`, `#cenoura`, etc.

## Observacoes

- Todos os caminhos sao relativos (`css/`, `js/`, `assets/`), adequados ao GitHub Pages.
- O arquivo `.nojekyll` evita que o GitHub ignore pastas ou arquivos estaticos.
- A fonte Inter e carregada do Google Fonts (precisa de internet).

## Desenvolvimento local

Abra `index.html` no navegador ou use uma extensao **Live Server** no VS Code/Cursor.
