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
function highestCount(numbers) {
  
}

// Desafio 7 - OK
function catAndMouse(mouse, cat1, cat2) {

  let distCat1 = mouse - cat1;
  let distCat2 = mouse - cat2;

  let gato1 = Math.abs(distCat1);
  let gato2 = Math.abs (distCat2);

  if (gato1 < gato2){
    return 'cat1';
  } else if (gato2 < gato1){
    return 'cat2';
  } else {
    return 'os gatos trombam e o rato foge';
  }
}

// Desafio 8 - OK
function fizzBuzz(numeros) {
  let novoBuzz = [];
  
  for (let i in numeros)
    if (numeros[i] % 3 === 0 && numeros[i] % 5 === 0){
      novoBuzz.push ('fizzBuzz');
    } else if (numeros[i] % 5 === 0) {
      novoBuzz.push ('buzz');
    } else if (numeros[i] % 3 === 0) {
        novoBuzz.push ('fizz');
    } else {
      novoBuzz.push ('bug!')
    }

    return novoBuzz
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
