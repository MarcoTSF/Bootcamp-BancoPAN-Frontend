// Criação do objeto contaBancaria para armazenar informações da conta
let contaBancaria = {
    // Obtém o nome do cliente da conta
    cliente: gets(),

    // Obtém o número da conta
    numeroConta: gets(),

    // Obtém o saldo inicial da conta
    saldoInicial: parseFloat(gets())
};

// Impressão das informações: Nome, Número da Conta e Saldo
print(`Nome do cliente: ${contaBancaria.cliente}`);
print(`Número da conta: ${contaBancaria.numeroConta}`);
print(`Saldo: R$ ${contaBancaria.saldoInicial.toFixed(2)}`);