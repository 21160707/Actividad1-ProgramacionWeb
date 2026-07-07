document.addEventListener('DOMContentLoaded', () => {
    const btnVerificar = document.getElementById('btn-verificar');
    const inputEdad = document.getElementById('edad');
    const inputResultado = document.getElementById('resultado');

    btnVerificar.addEventListener('click', () => {
        // 1. Capturar el valor ingresado
        const valorEdad = inputEdad.value;

        // 2. Validaciones: Verificar que no esté vacío y sea un número
        if (valorEdad === "" || isNaN(valorEdad)) {
            alert("Por favor, ingrese un número válido en el campo de edad.");
            inputEdad.focus();
            return;
        }

        // 3. Convertir el valor a Integer para realizar la comparación
        const edad = parseInt(valorEdad);

        // 4. Verificar si la persona puede votar
        const puedeVotar = edad >= 18;

        // 5. Mostrar el resultado formateado
        inputResultado.value = puedeVotar ? "Sí puedes votar" : "No puedes votar";
    });
});