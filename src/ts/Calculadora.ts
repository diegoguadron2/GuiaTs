export class Calculadora {
  // Método para sumar
  sumar(a: number, b: number): number {
    return a + b;
  }

  // Método para restar
  restar(a: number, b: number): number {
    return a - b;
  }

  // Método para multiplicar
  multiplicar(a: number, b: number): number {
    return a * b;
  }

  // Método para dividir
  dividir(a: number, b: number): number | string {
    if (b === 0) return "Error: División por cero";
    return a / b;
  }

  // Método para potencia
  potencia(base: number, exponente: number): number {
    return Math.pow(base, exponente);
  }

  // Método para factorial
  factorial(n: number): number | string {
    if (n < 0) return "Error: No existe factorial de números negativos";
    if (n % 1 !== 0) return "Error: El factorial solo acepta enteros";
    
    let resultado = 1;
    for (let i = 2; i <= n; i++) {
      resultado *= i;
    }
    return resultado;
  }

  // Método para formatear resultados
  formatearResultado(op: string, a: number, b: number, resultado: number | string): string {
    switch(op) {
      case 'sumar':
        return `${a} + ${b} = ${resultado}`;
      case 'restar':
        return `${a} - ${b} = ${resultado}`;
      case 'multiplicar':
        return `${a} × ${b} = ${resultado}`;
      case 'dividir':
        return `${a} ÷ ${b} = ${resultado}`;
      case 'potencia':
        return `${a}^${b} = ${resultado}`;
      case 'factorial1':
        return `${a}! = ${resultado}`;
      case 'factorial2':
        return `${b}! = ${resultado}`;
      default:
        return `Operación no válida`;
    }
  }
}