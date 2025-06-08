import { Persona } from "./Persona";

export class Empleado extends Persona {
  private sueldo: number;

  constructor(
    nombre: string,
    apellido: string,
    direccion: string,
    telefono: string,
    edad: number,
    sueldo: number = 0
  ) {
    super(nombre, apellido, direccion, telefono, edad);
    this.sueldo = sueldo;
  }

  public cargarSueldo(nuevoSueldo: number): void {
    this.sueldo = nuevoSueldo > 0 ? nuevoSueldo : 0;
  }

  public imprimirSueldo(): string {
    return "Sueldo: $" + this.sueldo.toFixed(2);
  }

  public mostrarDatos(): string {
    return (
      "Empleado: " +
      this.nombre +
      " " +
      this.apellido +
      "\n" +
      "Dirección: " +
      this.direccion +
      "\n" +
      "Teléfono: " +
      this.telefono +
      "\n" +
      "Edad: " +
      this.edad +
      " años\n" +
      this.esMayorDeEdad() +
      "\n" +
      this.imprimirSueldo()
    );
  }
}
