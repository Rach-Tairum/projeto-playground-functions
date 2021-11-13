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
function generatePhoneNumber(telefone) {
  let numeroTelefone = '';
  
  if (telefone.length !== 11){
    return 'Array com tamanho incorreto';
  } else {
    for (let index in telefone){
      let numero = [];
      if (telefone[index] < 0 || telefone[index] > 9){
        return 'não é possível gerar um número de telefone com esses valores'; // OK
      } else {
        for (let i in telefone) {
          if (telefone[index] === telefone[i]){
            numero.push (telefone[i])
          }
          if (numero.length >= 3){
            return 'não é possível gerar um número de telefone com esses valores';
          }
        }
      }
    }
  } //Ok daqui pra baixo
  numeroTelefone = '('+ telefone[0] + telefone[1] + ') ' + telefone[2] + telefone[3] + telefone[4] + telefone[5] + telefone[6] + '-' + telefone[7] + telefone[8] + telefone[9] + telefone[10];
  return numeroTelefone
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
