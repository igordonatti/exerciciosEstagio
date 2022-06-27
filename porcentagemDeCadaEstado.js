let i;
let total = 0;
let fatSP = 0;
let fatRJ = 0;
let fatMG = 0;
let fatES = 0;
let fatOUTROS = 0;

async function faturamentoEstados() {
  const dadosResponse = await fetch("./faturamento.json");
  const dadosJSON = await dadosResponse.json();

  for (i = 0; i < dadosJSON.length; i++) {
    total = total + dadosJSON[i].valor;
  }

  fatSP = (dadosJSON[0].valor * 100) / total;
  fatRJ = (dadosJSON[1].valor * 100) / total;
  fatMG = (dadosJSON[2].valor * 100) / total;
  fatES = (dadosJSON[3].valor * 100) / total;
  fatOUTROS = (dadosJSON[4].valor * 100) / total;
  console.log(
    `O faturamento de SP corresponde a ${fatSP.toFixed(2)}% do total de vendas`
  );
  console.log(
    `O faturamento de RJ corresponde a ${fatRJ.toFixed(2)}% do total de vendas`
  );
  console.log(
    `O faturamento de MG corresponde a ${fatMG.toFixed(2)}% do total de vendas`
  );
  console.log(
    `O faturamento de ES corresponde a ${fatES.toFixed(2)}% do total de vendas`
  );
  console.log(
    `O faturamento de Outros estados corresponde a ${fatOUTROS.toFixed(
      2
    )}% do total de vendas`
  );
}
faturamentoEstados();
