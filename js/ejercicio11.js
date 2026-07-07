document.addEventListener('DOMContentLoaded', () => {
    const btnConvertir = document.getElementById('btn-convertir');
    const inputkilometros = document.getElementById('kilometros');
    const inputMillas = document.getElementById('millas');

    btnConvertir.addEventListener('click', () => {
        // 1. Capturar el valor ingresado
        const valorKilometros = inputkilometros.value;

        // 2. Validaciones: Verificar que no esté vacío y sea un número
        if (valorKilometros === "" || isNaN(valorKilometros)) {
            alert("Por favor, ingrese un número válido en el campo de kilómetros.");
            inputkilometros.focus();
            return;
        }

        // 3. Convertir el valor a flotante para realizar el cálculo matemático
        const kilometros = parseFloat(valorKilometros);
        
        // 4. Aplicar la fórmula: M = K * 0.621371
        const millas = kilometros * 0.621371;

        // 5. Mostrar el resultado formateado (con un decimal si es necesario) agregando el sufijo mi
        inputMillas.value = `${millas.toFixed(5)} mi`;
    });
});