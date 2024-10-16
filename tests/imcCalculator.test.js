// tests/imcCalculator.test.js
import { calcularIMC, situacao } from '../assets/js/imcCalculator.js'; // Ajuste o caminho conforme necessário


describe('Testes da função calcularIMC', () => {
  test('deve retornar o IMC correto para peso e altura válidos', () => {
    expect(calcularIMC(70, 1.75)).toBeCloseTo(22.86, 2);
  });

  test('deve retornar NaN para altura ou peso inválido', () => {
    expect(calcularIMC(-70, 1.75)).toBeNaN();
    expect(calcularIMC(70, 0)).toBeNaN();
    expect(calcularIMC(0, 1.75)).toBeNaN();
  });
});

describe('Testes da função situacao', () => {
  test('deve retornar "Abaixo do Peso" para IMC < 18.5', () => {
    expect(situacao(18)).toBe('Abaixo do Peso');
  });

  test('deve retornar "Peso Normal" para IMC entre 18.5 e 24.9', () => {
    expect(situacao(22)).toBe('Peso Normal');
  });

  test('deve retornar "Sobre Peso" para IMC entre 25 e 29.9', () => {
    expect(situacao(27)).toBe('Sobre Peso');
  });

  test('deve retornar "Obesidade" para IMC >= 30', () => {
    expect(situacao(30)).toBe('Obesidade');
  });
});
