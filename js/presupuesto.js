// Seleccionar los elementos del DOM
const ingresoInput = document.getElementById('ingreso');
const gastoInput = document.getElementById('gasto');
const calcularButton = document.getElementById('calcular');
const resultadoElement = document.getElementById('resultado');

// Crear una función para calcular el presupuesto
function calcularPresupuesto() {
    const ingreso = parseFloat(ingresoInput.value) || 0;
    const gasto = parseFloat(gastoInput.value) || 0;
    const balance = ingreso - gasto;

    resultadoElement.textContent = `El balance es: ${balance}`;
}

// Agregar un evento al botón para ejecutar la función
calcularButton.addEventListener('click', calcularPresupuesto);