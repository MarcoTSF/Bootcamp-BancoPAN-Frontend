const contaBancaria = {
    investimentoInicial: parseFloat(gets()),
    taxaJurosMensal: parseFloat(gets()),
    periodoMeses: parseInt(gets()),
};

// Calcula a taxa de juros mensal em formato decimal (0 a 1) a partir da taxa percentual fornecida:
const taxaJurosDecimal = contaBancaria.taxaJurosMensal / 100;

// Calcula o montante (valor total após o investimento) usando a fórmula de juros compostos:
const montante = contaBancaria.investimentoInicial * Math.pow((1 + taxaJurosDecimal), contaBancaria.periodoMeses);

// Imprime informações sobre o investimento:
print("Investimento: " + contaBancaria.investimentoInicial.toFixed(2));
print("Juros: " + contaBancaria.taxaJurosMensal);
print("Período: " + contaBancaria.periodoMeses);
print("Resultado: " + montante.toFixed(2));