export class Cuenta {
  private cantidad: number;
  public nombre: string;
  public tipoCuenta: string;
  public numeroCuenta: string;

  constructor(
    nombre: string,
    cantidadInicial: number,
    tipoCuenta: string,
    numeroCuenta: string
  ) {
    this.nombre = nombre;
    this.cantidad = cantidadInicial >= 0 ? cantidadInicial : 0;
    this.tipoCuenta = tipoCuenta;
    this.numeroCuenta = numeroCuenta;
  }

  public depositar(monto: number): string {
    if (monto < 5.0) {
      return "El valor a depositar debe ser mayor a $5.00";
    }
    this.cantidad += monto;
    return `Depósito exitoso: +$${monto.toFixed(2)}`;
  }
  // Método para retirar
  public retirar(monto: number): string {
    if (monto < 5.0) {
      return "El valor a retirar debe ser mayor a $5.00";
    }
    if (this.cantidad <= 0) {
      return "No hay saldo disponible en la cuenta";
    }
    if (monto > this.cantidad) {
      return "Fondos insuficientes para el retiro";
    }
    this.cantidad -= monto;
    return `Retiro exitoso: -$${monto.toFixed(
      2
    )} | Saldo restante: $${this.cantidad.toFixed(2)}`;
  }

  // Método para mostrar datos básicos
  public mostrarDatos(): string {
    return `Titular: ${this.nombre}\nTipo: ${this.tipoCuenta}\nCuenta: ${this.numeroCuenta}`;
  }

  // Método para obtener saldo
  public obtenerSaldo(): string {
    return `Saldo actual: $${this.cantidad.toFixed(2)}`;
  }
}
