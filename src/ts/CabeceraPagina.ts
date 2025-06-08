export class CabeceraPagina {
  public titulo: string;
  public color: string;
  public fuente: string;
  private _alineacion: "izquierda" | "centrado" | "derecha";

  constructor(
    titulo: string = "Mi Página Web",
    color: string = "#0d6efd",
    fuente: string = "Arial",
    alineacion: "izquierda" | "centrado" | "derecha" = "izquierda"
  ) {
    this.titulo = titulo;
    this.color = color;
    this.fuente = fuente;
    this._alineacion = alineacion;
  }



  establecerAlineacion(alineacion: "izquierda" | "centrado" | "derecha"): void {
    this._alineacion = alineacion;
  }

  imprimirPropiedades(): string {
    return `Título: ${this.titulo}\nColor: ${this.color}\nFuente: ${this.fuente}\nAlineación: ${this._alineacion}`;
  }
}
