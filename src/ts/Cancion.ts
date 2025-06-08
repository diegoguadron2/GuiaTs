export class Cancion {
  private _autor: string;
  public titulo: string;
  public genero: string;
  
  constructor(titulo: string, genero: string) {
    this.titulo = titulo;
    this.genero = genero;
    this._autor = "Desconocido";
  }

  // Getter para autor
  public getAutor(): string {
    return this._autor;
  }

  // Setter para autor
  public setAutor(nuevoAutor: string): void {
    if (nuevoAutor.trim() === "") {
      this._autor = "Desconocido";
    } else {
      this._autor = nuevoAutor.trim();
    }
  }

  // Método para mostrar los datos
  public mostrarDatos(): string {
    return `Título: ${this.titulo}\nGénero: ${this.genero}\nAutor: ${this._autor}`;
  }
}