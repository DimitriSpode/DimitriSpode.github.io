// Modo Noturno
var btnNoturno = document.getElementById("btn-noturno");
if (btnNoturno) {
    btnNoturno.addEventListener("click", function () {
        document.body.classList.toggle("modo-noturno");
        if (document.body.classList.contains("modo-noturno")) {
            btnNoturno.textContent = "Modo Claro";
        } else {
            btnNoturno.textContent = "Modo Noturno";
        }
    });
}

// Aumentar e diminuir fonte
var tamanhoAtual = 16;

var btnAumentar = document.getElementById("btn-aumentar");
if (btnAumentar) {
    btnAumentar.addEventListener("click", function () {
        if (tamanhoAtual < 24) {
            tamanhoAtual = tamanhoAtual + 2;
            document.documentElement.style.setProperty("--tamanho-fonte", tamanhoAtual + "px");
        }
    });
}

var btnDiminuir = document.getElementById("btn-diminuir");
if (btnDiminuir) {
    btnDiminuir.addEventListener("click", function () {
        if (tamanhoAtual > 12) {
            tamanhoAtual = tamanhoAtual - 2;
            document.documentElement.style.setProperty("--tamanho-fonte", tamanhoAtual + "px");
        }
    });
}

// Tabs da pagina de receitas
var botoesTab = document.querySelectorAll(".tab-btn");
var linksTab = document.querySelectorAll(".link-tab");

function abrirTab(idTab) {
    var conteudos = document.querySelectorAll(".tab-conteudo");
    var botoes = document.querySelectorAll(".tab-btn");

    for (var i = 0; i < conteudos.length; i++) {
        conteudos[i].classList.remove("ativa");
    }
    for (var j = 0; j < botoes.length; j++) {
        botoes[j].classList.remove("ativa");
    }

    var tabEscolhida = document.getElementById(idTab);
    if (tabEscolhida) {
        tabEscolhida.classList.add("ativa");
    }

    var botaoAtivo = document.querySelector('.tab-btn[data-tab="' + idTab + '"]');
    if (botaoAtivo) {
        botaoAtivo.classList.add("ativa");
    }
}

for (var t = 0; t < botoesTab.length; t++) {
    botoesTab[t].addEventListener("click", function () {
        abrirTab(this.getAttribute("data-tab"));
    });
}

for (var l = 0; l < linksTab.length; l++) {
    linksTab[l].addEventListener("click", function () {
        abrirTab(this.getAttribute("data-tab"));
    });
}

var mapaHashReceitas = {
    maracuja: "tab-maracuja",
    cenoura: "tab-cenoura",
    macarrao: "tab-macarrao",
    panqueca: "tab-panqueca"
};

var hashReceita = window.location.hash.replace("#", "");
if (mapaHashReceitas[hashReceita]) {
    abrirTab(mapaHashReceitas[hashReceita]);
}

// Validacao do formulario de contato
var formContato = document.getElementById("form-contato");
if (formContato) {
    formContato.addEventListener("submit", function (evento) {
        evento.preventDefault();

        var valido = true;

        var nome = document.getElementById("nome");
        var erroNome = document.getElementById("erro-nome");
        if (nome.value.trim() === "") {
            erroNome.classList.add("visivel");
            erroNome.textContent = "Por favor, preencha seu nome.";
            valido = false;
        } else {
            erroNome.classList.remove("visivel");
        }

        var email = document.getElementById("email");
        var erroEmail = document.getElementById("erro-email");
        var padraoEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (email.value.trim() === "") {
            erroEmail.classList.add("visivel");
            erroEmail.textContent = "Por favor, preencha seu e-mail.";
            valido = false;
        } else if (!padraoEmail.test(email.value)) {
            erroEmail.classList.add("visivel");
            erroEmail.textContent = "Digite um e-mail valido.";
            valido = false;
        } else {
            erroEmail.classList.remove("visivel");
        }

        var mensagem = document.getElementById("mensagem");
        var erroMensagem = document.getElementById("erro-mensagem");
        if (mensagem.value.trim() === "") {
            erroMensagem.classList.add("visivel");
            erroMensagem.textContent = "Por favor, escreva uma mensagem.";
            valido = false;
        } else if (mensagem.value.trim().length < 10) {
            erroMensagem.classList.add("visivel");
            erroMensagem.textContent = "A mensagem deve ter pelo menos 10 caracteres.";
            valido = false;
        } else {
            erroMensagem.classList.remove("visivel");
        }

        if (valido) {
            var sucesso = document.getElementById("mensagem-sucesso");
            sucesso.classList.add("visivel");
            sucesso.textContent = "Mensagem enviada com sucesso! Obrigado pelo contato.";
            formContato.reset();
        }
    });
}
