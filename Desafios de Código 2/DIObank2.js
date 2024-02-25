// Objeto chamado contaBancaria com o nome do cliente e saldo inicial:
const contaBancaria = {
    nomeCliente: "",
    saldo: 0,
};

// Atribui o nome do cliente e o saldo inicial:
contaBancaria.nomeCliente = gets();
contaBancaria.saldo = parseFloat(gets());

// Obtém o número de operações a serem realizadas:
const numOperacoes = parseInt(gets());

// Loop para iterar sobre o número de operações especificado:
for (let i = 0; i < numOperacoes; i++) {
    // Obtém o tipo de operação (depósito ou saque) e o valor da operação:
    const tipoOperacao = gets();
    const valorOperacao = parseFloat(gets());

    // Verifica o tipo de operação e atualiza o saldo da conta bancária:
    if (tipoOperacao.toLowerCase() === "depósito") {
        // Se for um depósito, adiciona o valor ao saldo.
        contaBancaria.saldo += valorOperacao;
    } else if (tipoOperacao.toLowerCase() === "saque") {
        // Se for um saque, subtrai o valor do saldo.
        contaBancaria.saldo -= valorOperacao;
    }
}

// Imprime o nome do cliente da conta bancária;
print(`Nome do cliente: ${contaBancaria.nomeCliente}`);
// Imprime o saldo final da conta bancária formatado como moeda brasileira (R$) com duas casas decimais.
print(`Saldo final: R$ ${contaBancaria.saldo.toFixed(2)}`);