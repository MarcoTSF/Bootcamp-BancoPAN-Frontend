// Criação do objeto JSON para o Cliente 1 e suas propriedades (nome, conta e saldo)
const cliente1 = {
    nome: gets(),
    conta: parseInt(gets()),
    saldo: parseFloat(gets())
};
  
// Criação do objeto JSON para o Cliente 2 e suas propriedades (nome, conta e saldo)
const cliente2 = {
    nome: gets(),
    conta: parseInt(gets()),
    saldo: parseFloat(gets())
};

// Comparação dos JSONs (nome, conta, saldo) dos Clientes, verificando se todas as propriedades são iguais
if (cliente1.nome === cliente2.nome && cliente1.conta === cliente2.conta && cliente1.saldo === cliente2.saldo) {
    print("As contas bancárias são iguais.");
} else {
    print("As contas bancárias são diferentes.");
}