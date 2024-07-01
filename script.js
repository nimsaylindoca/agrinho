// Adiciona um evento de clique aos títulos das receitas para exibir/ocultar os detalhes
document.querySelectorAll('.receita h3').forEach(titulo => {
    titulo.addEventListener('click', function() {
        // Encontra o elemento .detalhes correspondente ao título clicado
        const detalhes = this.nextElementSibling;

        // Alterna a visibilidade dos detalhes (exibe se estiver oculto, oculta se estiver visível)
        detalhes.classList.toggle('visivel');
    });
});
