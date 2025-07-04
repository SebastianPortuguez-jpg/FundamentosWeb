document.getElementById("btnFacturar").addEventListener("click", function() {
  const nombre = document.getElementById("nombre").value;
  const articulo = document.getElementById("articulo").value;
  const cantidad = parseInt(document.getElementById("cantidad").value);
  const precio = parseFloat(document.getElementById("precio").value);

  if (!nombre || !articulo || isNaN(cantidad) || isNaN(precio)) {
    alert("Por favor complete todos los campos correctamente.");
    return;
  }

  const numeroFactura = "F-" + Math.floor(Math.random() * 1000000);
  const fecha = new Date().toLocaleDateString();

  const subtotal = cantidad * precio;
  const iva = subtotal * 0.13;
  const servicio = subtotal * 0.05;
  const total = subtotal + iva + servicio;

  const facturaHTML = `
    <p><strong>Número de Factura:</strong> ${numeroFactura}</p>
    <p><strong>Fecha:</strong> ${fecha}</p>
    <p><strong>Cliente:</strong> ${nombre}</p>
    <hr>
    <p><strong>Artículo:</strong> ${articulo}</p>
    <p><strong>Cantidad:</strong> ${cantidad}</p>
    <p><strong>Precio Unitario:</strong> ₡${precio.toFixed(2)}</p>
    <p><strong>Subtotal:</strong> ₡${subtotal.toFixed(2)}</p>
    <p><strong>IVA (13%):</strong> ₡${iva.toFixed(2)}</p>
    <p><strong>Servicio (5%):</strong> ₡${servicio.toFixed(2)}</p>
    <h5><strong>Total a pagar:</strong> ₡${total.toFixed(2)}</h5>
  `;

  document.getElementById("facturaGenerada").innerHTML = facturaHTML;
});