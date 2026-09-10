import Totalizador from "./totalizador.js";

const cantidadInput = document.querySelector("#cantidad");
const precioInput = document.querySelector("#precio");
const estadoSelect = document.querySelector("#estado");
const estadoCategoria = document.querySelector("#categoria");
const cliente = document.querySelector("#tipo_cliente");
const form = document.querySelector("#totalizador-form");
const div = document.querySelector("#resultado-div");
const pesoVolumetricoInput = document.querySelector("#peso_volumetrico");

const totalizador = new Totalizador();
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const cantidad = Number.parseInt(cantidadInput.value);
  const precio = Number.parseFloat(precioInput.value);
  const estado = estadoSelect.value;
  const categoria = estadoCategoria.value;
  const pesoVolumetrico = Number.parseFloat(pesoVolumetricoInput.value);
  const clienteValue = cliente.value;
  const detalle = totalizador.mostrarDetalle(cantidad, precio);

  if (detalle.startsWith("Error")) {
    div.innerHTML = "<p>" + detalle + "</p>";
    return;
  }

  const neto = totalizador.calcularPrecioNeto(cantidad, precio);
  const descuento = totalizador.obtenerDescuento(cantidad, precio);
  const impuesto = totalizador.calcularImpuesto(cantidad, precio, estado);
  const total = totalizador.calcularPrecioTotal(cantidad, precio, estado);
  const impuestoAdicional = totalizador.calcularImpuestoAdicional(cantidad, precio, categoria);
  const descuentoAdicional = totalizador.obtenerDescuentoAdicional(cantidad, precio, categoria);
  const costoEnvio = totalizador.calcularCostoEnvio(cantidad, precio, pesoVolumetrico);

  div.innerHTML =
    "<p>" + neto + "</p>" +
    "<p>" + descuento + "</p>" +
    "<p>" + impuesto + "</p>" +
    "<p>" + impuestoAdicional + "</p>" +
    "<p>" + descuentoAdicional + "</p>" +
    "<p>" + costoEnvio + "</p>"
  "<p>" + total + "</p>";
});
