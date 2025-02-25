/* 
  Importante: 
  No modificar ni el nombre ni los argumetos que reciben las funciones, sólo deben escribir
  código dentro de las funciones ya definidas. 
  No comentar la funcion 
*/

function numeroSimetrico(num) {
  // La funcion llamada 'numeroSimetrico' recibe como argumento un numero entero 'num'
  // Esta devuelve true o false dependiendo de si el número es simétrico o no.
  // Un número es simétrico cuando es igual a su reverso.
  // Ej:
  // numeroSimetrico(11711) devuelve true

  // Tu código:
  let numInverso = num.toString().split("").reverse().join("");
  if (num.toString() === numInverso) {
    console.log(true);
  } else {
    console.log(false);
  }
}

numeroSimetrico(171);

// No modifiques nada debajo de esta linea //

module.exports = numeroSimetrico;
