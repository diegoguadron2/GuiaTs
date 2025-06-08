import { CabeceraPagina } from "./CabeceraPagina";
import { Calculadora } from "./Calculadora";
import { Cancion } from "./Cancion";
import { Cuenta } from "./Cuenta";
import { Empleado } from "./Empleado";



import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap";

document.addEventListener("DOMContentLoaded", () => {
  // Elementos del DOM
  const tituloInput = document.getElementById("titulo") as HTMLInputElement;
  const colorInput = document.getElementById("color") as HTMLInputElement;
  const fuenteSelect = document.getElementById("fuente") as HTMLSelectElement;
  const alineacionSelect = document.getElementById(
    "alineacion"
  ) as HTMLSelectElement;
  const actualizarBtn = document.getElementById(
    "actualizar-btn"
  ) as HTMLButtonElement;
  const propiedadesOutput = document.getElementById(
    "propiedades"
  ) as HTMLPreElement;

  // Crear instancia de CabeceraPagina
  const cabecera = new CabeceraPagina();

  // Función para actualizar propiedades
  const actualizarPropiedades = () => {
    // Actualizar propiedades directamente en la instancia
    cabecera.titulo = tituloInput.value;
    cabecera.color = colorInput.value;
    cabecera.fuente = fuenteSelect.value;
    cabecera.establecerAlineacion(
      alineacionSelect.value as "izquierda" | "centrado" | "derecha"
    );

    // Mostrar propiedades actualizadas
    propiedadesOutput.textContent = cabecera.imprimirPropiedades();
  };

  // Evento del botón
  actualizarBtn.addEventListener("click", actualizarPropiedades);

  // Mostrar propiedades iniciales
  propiedadesOutput.textContent = cabecera.imprimirPropiedades();
});

// Ejercicio 2: Calculadora
const calculadora = new Calculadora();
const num1Input = document.getElementById("num1") as HTMLInputElement;
const num2Input = document.getElementById("num2") as HTMLInputElement;
const resultadoCalc = document.getElementById(
  "resultado-calc"
) as HTMLPreElement;
const botonesOperacion = document.querySelectorAll(".operacion");

botonesOperacion.forEach((boton) => {
  boton.addEventListener("click", () => {
    const num1 = parseFloat(num1Input.value);
    const num2 = parseFloat(num2Input.value);
    const operacion = boton.getAttribute("data-op")!;

    let resultado: number | string;

    switch (operacion) {
      case "sumar":
        resultado = calculadora.sumar(num1, num2);
        break;
      case "restar":
        resultado = calculadora.restar(num1, num2);
        break;
      case "multiplicar":
        resultado = calculadora.multiplicar(num1, num2);
        break;
      case "dividir":
        resultado = calculadora.dividir(num1, num2);
        break;
      case "potencia":
        resultado = calculadora.potencia(num1, num2);
        break;
      case "factorial1":
        resultado = calculadora.factorial(num1);
        break;
      case "factorial2":
        resultado = calculadora.factorial(num2);
        break;
      default:
        resultado = "Operación no válida";
    }

    resultadoCalc.textContent = calculadora.formatearResultado(
      operacion,
      num1,
      operacion.includes("factorial") ? num2 : num2,
      resultado
    );
  });
});

// Ejercicio 3: Canción
const tituloInputCancion = document.getElementById(
  "titulo-cancion"
) as HTMLInputElement;
const generoSelectCancion = document.getElementById(
  "genero-cancion"
) as HTMLSelectElement;
const autorInputCancion = document.getElementById(
  "autor-cancion"
) as HTMLInputElement;
const actualizarBtnCancion = document.getElementById(
  "actualizar-cancion"
) as HTMLButtonElement;
const datosCancion = document.getElementById("datos-cancion") as HTMLPreElement;

const cancion = new Cancion("", "Pop");

actualizarBtnCancion.addEventListener("click", () => {
  // Actualizar propiedades de la canción
  cancion.titulo = tituloInputCancion.value || "Sin título";
  cancion.genero = generoSelectCancion.value;
  cancion.setAutor(autorInputCancion.value);

  // Mostrar datos
  datosCancion.textContent = cancion.mostrarDatos();
});

// Ejercicio 4: Cuenta Bancaria
const nombreInput = document.getElementById(
  "nombre-cuenta"
) as HTMLInputElement;
const tipoCuentaSelect = document.getElementById(
  "tipo-cuenta"
) as HTMLSelectElement;
const numeroCuentaInput = document.getElementById(
  "numero-cuenta"
) as HTMLInputElement;
const saldoInicialInput = document.getElementById(
  "saldo-inicial"
) as HTMLInputElement;
const montoDepositoInput = document.getElementById(
  "monto-deposito"
) as HTMLInputElement;
const montoRetiroInput = document.getElementById(
  "monto-retiro"
) as HTMLInputElement;
const depositarBtn = document.getElementById(
  "depositar-btn"
) as HTMLButtonElement;
const retirarBtn = document.getElementById("retirar-btn") as HTMLButtonElement;
const datosCuenta = document.getElementById("datos-cuenta") as HTMLPreElement;
const saldoCuenta = document.getElementById("saldo-cuenta") as HTMLPreElement;

let cuenta: Cuenta;

// Función para inicializar cuenta
function inicializarCuenta() {
  const saldoInicial = parseFloat(saldoInicialInput.value) || 0;
  cuenta = new Cuenta(
    nombreInput.value || "Sin nombre",
    saldoInicial,
    tipoCuentaSelect.value,
    numeroCuentaInput.value || "Sin número"
  );

  datosCuenta.textContent = cuenta.mostrarDatos();
  saldoCuenta.textContent = cuenta.obtenerSaldo();
}

// Eventos para los inputs iniciales
[nombreInput, tipoCuentaSelect, numeroCuentaInput, saldoInicialInput].forEach(
  (input) => {
    input.addEventListener("change", inicializarCuenta);
  }
);

// Evento para depositar
depositarBtn.addEventListener("click", () => {
  if (!cuenta) {
    inicializarCuenta();
    return;
  }

  const monto = parseFloat(montoDepositoInput.value) || 0;
  const resultado = cuenta.depositar(monto);

  saldoCuenta.textContent = cuenta.obtenerSaldo();
  alert(resultado);
  montoDepositoInput.value = "";
});

// Evento para retirar
retirarBtn.addEventListener("click", () => {
  if (!cuenta) {
    inicializarCuenta();
    return;
  }

  const monto = parseFloat(montoRetiroInput.value) || 0;
  const resultado = cuenta.retirar(monto);

  saldoCuenta.textContent = cuenta.obtenerSaldo();
  alert(resultado);
  montoRetiroInput.value = "";
});

// Inicializar cuenta si hay valores al cargar
window.addEventListener("load", () => {
  if (nombreInput.value || saldoInicialInput.value) {
    inicializarCuenta();
  }
});

// Ejercicio 5
const ejercicio5NombreInput = document.getElementById('nombre-persona') as HTMLInputElement;
const ejercicio5ApellidoInput = document.getElementById('apellido-persona') as HTMLInputElement;
const ejercicio5DireccionInput = document.getElementById('direccion-persona') as HTMLInputElement;
const ejercicio5TelefonoInput = document.getElementById('telefono-persona') as HTMLInputElement;
const ejercicio5EdadInput = document.getElementById('edad-persona') as HTMLInputElement;
const ejercicio5SueldoInput = document.getElementById('sueldo-empleado') as HTMLInputElement;
const ejercicio5MostrarBtn = document.getElementById('mostrar-empleado') as HTMLButtonElement;
const ejercicio5DatosOutput = document.getElementById('datos-empleado') as HTMLPreElement;

ejercicio5MostrarBtn.addEventListener('click', () => {
  const empleadoEjercicio5 = new Empleado(
    ejercicio5NombreInput.value || "Sin nombre",
    ejercicio5ApellidoInput.value || "Sin apellido",
    ejercicio5DireccionInput.value || "Sin dirección",
    ejercicio5TelefonoInput.value || "Sin teléfono",
    parseInt(ejercicio5EdadInput.value) || 0,
    parseFloat(ejercicio5SueldoInput.value) || 0
  );

  ejercicio5DatosOutput.textContent = empleadoEjercicio5.mostrarDatos();
});






//Diego Guadron