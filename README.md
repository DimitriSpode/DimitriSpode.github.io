# Blog Pessoal - TDE Desenvolvimento Web

Blog estatico em HTML5, CSS3 e JavaScript para entrega academica.

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

## Publicar no GitHub Pages

### 1. Criar repositorio no GitHub

1. Acesse [github.com/new](https://github.com/new)
2. Nome sugerido: `tde-blog` (sem espacos)
3. Deixe **Public**
4. Nao marque "Add a README" (este projeto ja tem arquivos)

### 2. Enviar o codigo

No terminal, dentro da pasta do projeto:

```bash
git init
git add .
git commit -m "Publica blog para GitHub Pages"
git branch -M main
git remote add origin https://github.com/SEU-USUARIO/tde-blog.git
git push -u origin main
```

Substitua `SEU-USUARIO` pelo seu usuario do GitHub.

### 3. Ativar o GitHub Pages

1. No repositorio: **Settings** → **Pages**
2. Em **Source**, escolha **Deploy from a branch**
3. Branch: `main` | Pasta: `/ (root)`
4. Salve e aguarde alguns minutos

O site ficara em:

`https://SEU-USUARIO.github.io/tde-blog/`

### 4. Testar

Abra a URL acima e confira:

- Menu lateral e navegacao entre paginas
- Imagens em `assets/`
- Modo noturno e tamanho da fonte
- Formulario de contato (validacao no navegador)
- Abas em Receitas e links com `#maracuja`, `#cenoura`, etc.

## Observacoes

- Todos os caminhos sao relativos (`css/`, `js/`, `assets/`), adequados ao GitHub Pages.
- O arquivo `.nojekyll` evita que o GitHub ignore pastas ou arquivos estaticos.
- A fonte Inter e carregada do Google Fonts (precisa de internet).
- Se alterar o nome do repositorio, a URL do site muda junto.

## Desenvolvimento local

Abra `index.html` no navegador ou use uma extensao **Live Server** no VS Code/Cursor.
