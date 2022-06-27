const numeroInserido = 55;
let i;
let f = new Array(numeroInserido + 2);
let save = 0;

f[0] = 0;
f[1] = 1;

for (i = 2; i <= numeroInserido; i++) {
  f[i] = f[i - 1] + f[i - 2];
}

for (i = 0; i <= numeroInserido; i++) {
  if (f[i] === numeroInserido) {
    console.log("O numero inserido esta presente na sequência de Fibonacci");
    save = 1;
  }
}

if (save === 0) {
  console.log("O numero inserido não está na sequência de Fibonacci.");
}
