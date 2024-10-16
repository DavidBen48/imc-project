// imcCalculador.js
import { calcularIMC, situacao } from '../assets/js/imcCalculator.js';

export const calcularIMC = (peso, altura) => {
  return peso / (altura * altura);
};

export const situacao = (imc) => {
  if (imc >= 39.9) return `${statusDoPeso.obesidade} | ${graus.grau3}`;
  if (imc >= 34.9) return `${statusDoPeso.obesidade} | ${graus.grau2}`;
  if (imc >= 29.9) return `${statusDoPeso.obesidade} | ${graus.grau1}`;
  
  if (imc >= 24.9) return statusDoPeso.sobrePeso;
  if (imc >= 18.5) return statusDoPeso.pesoNormal;
  return statusDoPeso.abaixoDoPeso;
};