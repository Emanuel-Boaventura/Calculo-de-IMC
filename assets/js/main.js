const formulario = document.querySelector('.formulario');
let resultado = document.querySelector('.resultado')

formulario.addEventListener('submit', calcularIMC);

function calcularIMC (e) {
  e.preventDefault();
  let peso = Number(document.querySelector('#peso').value);
  let altura = Number(document.querySelector('#altura').value);
  let conta = Number((peso/altura**2).toFixed(2));

  if (conta < 1){
    resultado.innerHTML = 'O IMC deu '+conta+', acho que essa proporção de "peso" & "altura" aí não ta legal';
    resultado.style.backgroundColor = "#7c3aed"
    return
  }
  
  if (conta >= 1 && conta < 18.5){
    resultado.innerHTML = 'Seu IMC é '+conta+' "Abaixo do peso"';
    resultado.style.backgroundColor = "#67e8f9"
    return
  }
  
  if (conta >= 18.5 && conta < 25){
    resultado.innerHTML = 'Seu IMC é '+conta+' "Peso normal"';
    resultado.style.backgroundColor = "#4ade80"
    return
  }
  
  if (conta >= 25 && conta < 30){
    resultado.innerHTML = 'Seu IMC é '+conta+' "Sobrepeso"';
    resultado.style.backgroundColor = "#fcd34d"
    return
  }
  
  if (conta >= 30 && conta < 35){
    resultado.innerHTML = 'Seu IMC é '+conta+' "Obesidade grau 1"';
    resultado.style.backgroundColor = "#fb923c"
    return
  }
  
  if (conta >= 35 && conta < 40){
    resultado.innerHTML = 'Seu IMC é '+conta+' "Obesidade grau 2"';
    resultado.style.backgroundColor = "#ea580c"
    return
  }
  
  if (conta > 40 && conta < 100 ){
    resultado.innerHTML = 'Seu IMC é '+conta+' "Obesidade grau 3"';
    resultado.style.backgroundColor = "#b91c1c"
    return
    
  } if (conta >= 100){
    resultado.innerHTML = 'O IMC deu '+conta+', acho que essa proporção de "peso" & "altura" aí não ta legal';
    resultado.style.backgroundColor = "#7c3aed"
  }
}