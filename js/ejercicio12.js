document.addEventListener('DOMContentLoaded', () => {
    const btnConvertir = document.getElementById('btn-convertir');
    const inputMXN = document.getElementById('mxn');
    const inputUSD = document.getElementById('usd');

    btnConvertir.addEventListener('click', () => {
        // 1. Capturar el valor ingresado
        const valorMXN = inputMXN.value;

        // 2. Validaciones: Verificar que no esté vacío y sea un número
        if (valorMXN === "" || isNaN(valorMXN)) {
            alert("Por favor, ingrese un número válido en el campo de pesos mexicanos.");
            inputMXN.focus();
            return;
        }

        // 3. Convertir el valor a flotante para realizar el cálculo matemático
        const mxn = parseFloat(valorMXN);
        
        // 4. Aplicar la fórmula: M = K * 0.621371
        const usd = mxn * 0.055;

        // 5. Mostrar el resultado formateado (con un decimal si es necesario) agregando el sufijo mi
        inputUSD.value = `${usd.toFixed(2)} USD`;
    });
});