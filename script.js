// Variáveis globais para armazenar dados do orçamento
let limite = 0;          // Limite de gastos definido pelo usuário
let despesas = [];       // Array de objetos: {valor, categoria, id} para armazenar despesas
let total = 0;           // Total acumulado das despesas
let filtroAtual = 'todas'; // Filtro atual para exibir despesas (todas ou por categoria)

// Carrega dados do localStorage e atualiza a interface ao carregar a página
window.onload = function () {
    carregarDados();
    atualizarTudo();
};

// Função para exibir mensagens temporárias de sucesso ou erro
function mostrarMensagem(texto, tipo) {
    const msg = document.getElementById('mensagem');
    msg.innerText = texto;
    msg.className = tipo;
    msg.classList.remove('oculto');
    msg.style.opacity = 1;
    setTimeout(() => {
        msg.style.opacity = 0;
        setTimeout(() => msg.classList.add('oculto'), 400);
    }, 2500);
}