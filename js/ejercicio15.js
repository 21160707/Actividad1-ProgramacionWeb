document.addEventListener('DOMContentLoaded', () => {
    const btnCalcular = document.getElementById('btn-calcular');
    const inputCadena = document.getElementById('cadena');
    const inputResultado = document.getElementById('resultado');

    btnCalcular.addEventListener('click', () => {
        // 1. Capturar el valor ingresado
        const valorCadena = inputCadena.value;

        // 2. Validaciones: Verificar que no esté vacío y sea una cadena de números
        if (valorCadena === "") {
            alert("Por favor, ingrese una cadena de números.");
            inputCadena.focus();
            return;
        }

        // 3. Convertir la cadena en un array de números
        const numeros = valorCadena.split(',').map(Number);

        // 4. Verificar que todos los valores sean números válidos
        if (numeros.some(isNaN)) {
            alert("Por favor, ingrese solo números válidos separados por comas.");
            inputCadena.focus();
            return;
        }

        // 5. Calcular el máximo, mínimo y promedio
        const maximo = Math.max(...numeros);
        const minimo = Math.min(...numeros);
        const promedio = numeros.reduce((a, b) => a + b, 0) / numeros.length;

        // 6. Mostrar los resultados formateados
        inputResultado.value = `Máximo: ${maximo}, Mínimo: ${minimo}, Promedio: ${promedio.toFixed(2)}`;
    });
});