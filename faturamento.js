let menor = 0;
let maior = 0;
let media = 0;
let i;
let dia = 0;
let somaTotal = 0;
let diasMaior = 0;

async function requereDados() {
  const dadosResponse = await fetch("./dados.json");
  const dadosJSON = await dadosResponse.json();
  menor = dadosJSON[0].valor;
  for (i = 0; i < dadosJSON.length; i++) {
    if (dadosJSON[i].valor > maior) maior = dadosJSON[i].valor;
    if (dadosJSON[i].valor < menor && dadosJSON[i].valor > 0)
      menor = dadosJSON[i].valor;
    if (dadosJSON[i].valor > 0) dia++;
    somaTotal = somaTotal + dadosJSON[i].valor;
  }

  media = somaTotal / dia;

  for (i = 0; i < dadosJSON.length; i++) {
    if (dadosJSON[i].valor > media) diasMaior++;
  }
  console.log(`O maior faturamento foi de ${maior}`);
  console.log(`O menor faturamento foi de ${menor}`);
  console.log(
    `O número de dias que as vendas foram maior que a média foi de ${diasMaior}`
  );
}
requereDados();
