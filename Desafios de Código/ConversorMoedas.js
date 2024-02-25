const valorDinheiro = parseFloat(gets());
const moedaOrigem = gets();
const moedaDestino = gets();

// Aqui é verificado se valorDinheiro é um número.
// !isNaN é uma função embutida em JavaScript que verifica se o valor passado como argumento não é um número.
if (!isNaN(valorDinheiro)) {
    // Definição fixa das taxas de câmbio para as moedas:
    const taxaCambioBRLtoUSD = 0.1875;
    const taxaCambioBRLtoEUR = 0.1520;
    const taxaCambioUSDtoBRL = 5.3333;
    const taxaCambioEURtoBRL = 6.5789;

    let valorConvertido;

    // Criação de uma estrutura condicional que realiza a conversão das moedas:
    if (moedaOrigem === 'BRL' && moedaDestino === 'USD') {
        valorConvertido = valorDinheiro * taxaCambioBRLtoUSD;
        // Imprime a conversão com duas casas decimais:
        print(`${valorDinheiro} BRL equivalem a ${valorConvertido.toFixed(2)} USD.`);
    } else if (moedaOrigem === 'BRL' && moedaDestino === 'EUR') {
        valorConvertido = valorDinheiro * taxaCambioBRLtoEUR;
        // Imprime a conversão com duas casas decimais:
        print(`${valorDinheiro} BRL equivalem a ${valorConvertido.toFixed(2)} EUR.`);
    } else if (moedaOrigem === 'USD' && moedaDestino === 'BRL') {
        valorConvertido = valorDinheiro * taxaCambioUSDtoBRL;
        // Imprime a conversão com duas casas decimais:
        print(`${valorDinheiro} USD equivalem a ${valorConvertido.toFixed(2)} BRL.`);
    } else if (moedaOrigem === 'EUR' && moedaDestino === 'BRL') {
        valorConvertido = valorDinheiro * taxaCambioEURtoBRL;
        // Imprime a conversão com duas casas decimais:
        print(`${valorDinheiro} EUR equivalem a ${valorConvertido.toFixed(2)} BRL.`);
    } else {
        // Se a moeda de origem ou a moeda de destino não forem reconhecidas, imprime uma mensagem de erro:
        print('Moeda de origem ou moeda de destino não reconhecida.');
    }
} else {
    // Se o valor fornecido não for um número, imprime uma mensagem de erro:
    print('Valor para conversão inválido.');
}