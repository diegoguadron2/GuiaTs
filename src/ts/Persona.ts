export abstract class Persona {
  protected nombre: string;
  protected apellido: string;
  protected direccion: string;
  protected telefono: string;
  protected edad: number;

  constructor(
    nombre: string,
    apellido: string,
    direccion: string,
    telefono: string,
    edad: number
  ) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.direccion = direccion;
    this.telefono = telefono;
    this.edad = edad;
  }

  // Método para verificar mayoría de edad
  public esMayorDeEdad(): string {
    if (this.edad >= 18) {
      return this.nombre + " es mayor de edad (" + this.edad + " años)";
    } else {
      return this.nombre + " es menor de edad (" + this.edad + " años)";
    }
  }

  public abstract mostrarDatos(): string;
}