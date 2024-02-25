// Entrada dos valores com a função gets():
const capitalInicial = parseFloat(gets());
const taxaJuros = parseFloat(gets());
const tempoMeses = parseInt(gets());

// Verifica se os valores fornecidos são números válidos e se o tempo em meses é um número inteiro positivo.
if (!isNaN(capitalInicial) && !isNaN(taxaJuros) && !isNaN(tempoMeses) && tempoMeses > 0) {
    // Calcula o juros simples usando a fórmula e o montante final somando o juros simples ao capital inicial:
    const jurosSimples = (capitalInicial * taxaJuros * tempoMeses) / 100;
    const montanteFinal = capitalInicial + jurosSimples;

    // Imprime o resultado com formatação, incluindo o período, o capital inicial, a taxa de juros e o montante final:
    // Lembre-se: Até duas casas decimais para o Capital Inicial e o Montante Final.
    print(`Montante em ${tempoMeses} meses, com R$ ${capitalInicial.toFixed(2)} iniciais, ${taxaJuros}% juros, e: R$ ${montanteFinal.toFixed(2)}.`);
} else {
    // Se os valores fornecidos não forem válidos, imprime uma mensagem de erro.
    print('Por favor, insira valores validos e um periodo de tempo adequado.');
}