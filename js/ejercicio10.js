document.addEventListener('DOMContentLoaded', () => {
    const btnConvertir = document.getElementById('btn-convertir');
    const inputCelsius = document.getElementById('celsius');
    const inputFahrenheit = document.getElementById('fahrenheit');

    btnConvertir.addEventListener('click', () => {
        // 1. Capturar el valor ingresado
        const valorCelsius = inputCelsius.value;

        // 2. Validaciones: Verificar que no esté vacío y sea un número
        if (valorCelsius === "" || isNaN(valorCelsius)) {
            alert("Por favor, ingrese un número válido en el campo de grados Celsius.");
            inputCelsius.focus();
            return;
        }

        // 3. Convertir el valor a flotante para realizar el cálculo matemático
        const celsius = parseFloat(valorCelsius);
        
        // 4. Aplicar la fórmula: F = (C * 9/5) + 32
        const fahrenheit = (celsius * 9 / 5) + 32;

        // 5. Mostrar el resultado formateado (con un decimal si es necesario) agregando el sufijo °F
        inputFahrenheit.value = `${fahrenheit.toFixed(1)}°F`;
    });
});