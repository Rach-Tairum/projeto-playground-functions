// Desafio 10
function techList(techs, nomes) {
  
  let alfabetica = [];
  alfabetica = techs.sort();

  let enteresses = [];

  if (alfabetica.length === 0){
    return 'Vazio!';
  } else {
    for (let i = 0; i < alfabetica.length; i+= 1){
      enteresses.push ({
        tech: alfabetica[i],
        name: nomes,
      },);
    }
  }
return enteresses;
}


// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
