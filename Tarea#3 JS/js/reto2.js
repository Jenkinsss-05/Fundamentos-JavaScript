document.getElementById('invoiceForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const customerName = document.getElementById('customerName').value;
    const itemName = document.getElementById('itemName').value;
    const quantity = parseInt(document.getElementById('quantity').value);
    const price = parseFloat(document.getElementById('price').value);
    const subtotal = quantity * price;
    const iva = subtotal * 0.13;
    const serviceFee = subtotal * 0.05;
    const total = subtotal + iva + serviceFee;

    const invoiceResult = `
        <h2>Factura</h2>
        <p><strong>Nombre del Cliente:</strong> ${customerName}</p>
        <p><strong>Artículo Comprado:</strong> ${itemName}</p>
        <p><strong>Cantidad:</strong> ${quantity}</p>
        <p><strong>Precio:</strong> ${price}</p>
        <p><strong>Subtotal:</strong> ${subtotal.toFixed(2)}</p>
        <p><strong>IVA (13%):</strong> ${iva.toFixed(2)}</p>
        <p><strong>Servicio (5%):</strong> ${serviceFee.toFixed(2)}</p>
        <p><strong>Total a Pagar:</strong> ${total.toFixed(2)}</p>
    `;

    document.getElementById('invoiceResult').innerHTML = invoiceResult;

    document.getElementById('deleteButton').addEventListener('click', function() {
        document.getElementById('invoiceResult').innerHTML = '';

        document.getElementById('customerName').value = '';
        document.getElementById('itemName').value = '';
        document.getElementById('quantity').value = '';
        document.getElementById('price').value = '';
    });
});
