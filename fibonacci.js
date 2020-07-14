var lista = [0, 1]; //1,1    2
var contador = 0;
var total = 0;
while (lista[0] + lista[1] <= 4000000) {
  contador = lista[0] + lista[1];
  lista[0] = lista[1];
  lista[1] = contador;

  if (contador % 2 == 0) {
    total += contador;
  }
}
console.log(total);
