// ======================================================
// MENU RESPONSIVO - HEFESTO'S STOCK
// ======================================================

// Pega o botão dos três tracinhos
const menuToggle = document.getElementById("menu-toggle");

// Pega o menu lateral/navegação
const menu = document.getElementById("menu");

// Pega todos os links que estão dentro do menu
const menuLinks = document.querySelectorAll(".menu a");

// ======================================================
// VERIFICA SE O MENU EXISTE
// ======================================================

if (menuToggle && menu) {

    // ==================================================
    // ABRIR E FECHAR O MENU
    // ==================================================

    menuToggle.addEventListener("click", function (event) {
        // Impede que o clique seja interpretado
        // como um clique fora do menu
        event.stopPropagation();

        // Adiciona ou remove a classe "active"
        menu.classList.toggle("active");

        // ==================================================
        // ALTERA O ÍCONE
        // ==================================================
        if (menu.classList.contains("active")) {

            // Quando o menu está aberto
            // troca ☰ por ✕
            menuToggle.innerHTML = "✕";

            // Atualiza o texto para acessibilidade
            menuToggle.setAttribute(
                "aria-label",
                "Fechar menu"
            );
        } else {

            // Quando o menu está fechado
            // volta para ☰
            menuToggle.innerHTML = "☰";

            // Atualiza o texto para acessibilidade
            menuToggle.setAttribute(
                "aria-label",
                "Abrir menu"
            );
        }
    });

    // ==================================================
    // FECHAR O MENU AO CLICAR EM UMA OPÇÃO
    // ==================================================
    menuLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            // Fecha o menu
            menu.classList.remove("active");

            // Volta o botão para ☰
            menuToggle.innerHTML = "☰";

            // Atualiza a acessibilidade
            menuToggle.setAttribute(
                "aria-label",
                "Abrir menu"
            );
        });
    });

    // ==================================================
    // FECHAR O MENU AO CLICAR FORA
    // ==================================================

    document.addEventListener("click", function (event) {

        // Verifica se clicou dentro do menu
        const clicouNoMenu = menu.contains(event.target);

        // Verifica se clicou no botão ☰
        const clicouNoBotao = menuToggle.contains(event.target);

        // Se não clicou no menu
        // e também não clicou no botão
        if (!clicouNoMenu && !clicouNoBotao) {

            // Fecha o menu
            menu.classList.remove("active");

            // Volta para ☰
            menuToggle.innerHTML = "☰";

            // Atualiza a acessibilidade
            menuToggle.setAttribute(
                "aria-label",
                "Abrir menu"
            );
        }
    });

    // ==================================================
    // QUANDO A TELA VOLTAR PARA DESKTOP
    // ==================================================
    window.addEventListener("resize", function () {
        // Se a tela for maior que 900px
        if (window.innerWidth > 900) {
            // Fecha o menu mobile
            menu.classList.remove("active");
            // Volta o botão para ☰
            menuToggle.innerHTML = "☰";
            // Atualiza a acessibilidade
            menuToggle.setAttribute(
                "aria-label",
                "Abrir menu"
            );
        }
    });
}