const calcular = document.querySelector('.calculo');
let resultado = document.querySelector('.resultado')

calcular.addEventListener('submit', calcularIMC);

function calcularIMC (e) {
  e.preventDefault();
  let peso = document.querySelector('#peso').value;
  let altura = document.querySelector('#altura').value;
  let conta = peso/altura**2;

  if (conta < 1){
    resultado.innerHTML = 'Essa proporção de "peso" & "altura" aí não ta legal';
    resultado.style.backgroundColor = "#7c3aed"
  } else if (conta >= 1 && conta < 18.5){
    resultado.innerHTML = 'Seu IMC é "Abaixo do peso"';
    resultado.style.backgroundColor = "#67e8f9"
  } else if (conta >= 18.5 && conta < 25){
    resultado.innerHTML = 'Seu IMC é "Peso normal"';
    resultado.style.backgroundColor = "#4ade80"
  } else if (conta >= 25 && conta < 30){
    resultado.innerHTML = 'Seu IMC é "Sobrepeso"';
    resultado.style.backgroundColor = "#fcd34d"
  } else if (conta >= 30 && conta < 35){
    resultado.innerHTML = 'Seu IMC é "Obesidade grau 1"';
    resultado.style.backgroundColor = "#fb923c"
  } else if (conta >= 35 && conta < 40){
    resultado.innerHTML = 'Seu IMC é "Obesidade grau 2"';
    resultado.style.backgroundColor = "#ea580c"
  } else if (conta > 40 && conta < 100 ){
    resultado.innerHTML = 'Seu IMC é "Obesidade grau 3"';
    resultado.style.backgroundColor = "#b91c1c"
  } if (conta >= 100){
    resultado.innerHTML = 'Essa proporção de "peso" & "altura" ai não ta legal';
    resultado.style.backgroundColor = "#7c3aed"
  }
}