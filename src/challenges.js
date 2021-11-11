// Desafio 1 - OK
function compareTrue(par1, par2) {
  
  if (par1 === true && par2 === true){
    return true
  } else {
    return false
  }
}

// Desafio 2 - OK
function calcArea(base, height) {

  let areaTriangulo = (base * height) / 2;

  return areaTriangulo
}

// Desafio 3 - OK
function splitSentence(frase) {

  let array = frase.split (' ');

  return array;
}

// Desafio 4 - OK
function concatName(array) {

  let frase = array[array.length -1] + ', ' + array[0];

  return frase
};

console.log (concatName (['captain', 'my', 'captain']))

// Desafio 5 - OK
function footballPoints(wins, ties) {
  
  let pontosVitorias = wins * 3;
  let pontos = pontosVitorias + ties;

  return pontos
}

// Desafio 6
function highestCount() {
  // seu código aqui
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
