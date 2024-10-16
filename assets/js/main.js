const form = document.querySelector('#formuario');

form.addEventListener('submit', function (event) {
  event.preventDefault();

  const [inputPeso, inputAltura] = [ event.target.querySelector('#peso'), event.target.querySelector('#altura') ];
  
  const [peso, altura] = [ Number(inputPeso.value), Number(inputAltura.value) ];

  const invalidates = {
    pesoAltura: 'Peso e Altura inválidos',
    peso: 'Peso inválido',
    altura: 'Altura inválida'
  }

  if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
    if (!peso && !altura) {
      setResultado(invalidates.pesoAltura, false);
    }
    else if (!peso) {
      setResultado(invalidates.peso, false);
    }
    else{
      setResultado(invalidates.altura, false); 
    }
    return;
  }

  const imc = calcularIMC(peso, altura);
  const msg = `Seu IMC é de: ${imc.toFixed(2)} <br> ${situacao(imc)}`;
  setResultado(msg, true);
});

const calcularIMC = (peso, altura) => {
  return peso / (altura * altura);
}

const situacao = (imc) => {
  if (imc >= 39.9) return `${statusDoPeso.obesidade} | ${graus.grau3}`;
  if (imc >= 34.9) return `${statusDoPeso.obesidade} | ${graus.grau2}`;
  if (imc >= 29.9) return `${statusDoPeso.obesidade} | ${graus.grau1}`;
  
  if (imc >= 24.9) return statusDoPeso.sobrePeso;
  if (imc >= 18.5) return statusDoPeso.pesoNormal;
  return statusDoPeso.abaixoDoPeso;
};

const [statusDoPeso, graus] = [{
    abaixoDoPeso: 'Abaixo do Peso',
    pesoNormal: 'Peso Normal',
    sobrePeso: 'Sobre Peso',
    obesidade: 'Obesidade',
  }, 
  {
    grau1: 'Grau 1',
    grau2: 'Grau 2',
    grau3: 'Grau 3',
  }
];

const criarParagrafo = () => {
  return document.createElement('p'); 
}

function aplicarResultadoHTML(isValid) {
  const resultado = document.querySelector('#resultado');
  resultado.classList.remove('resultado-valido', 'resultado-invalido');
  isValid ? resultado.classList.add('resultado-valido') : resultado.classList.add('resultado-invalido');
}

function setResultado(mensagem, isValid) {
  const resultado = document.querySelector('#resultado');
  resultado.innerHTML = ''; 

  const p = criarParagrafo();
  p.innerHTML = mensagem;
  resultado.appendChild(p);

  aplicarResultadoHTML(isValid);
}