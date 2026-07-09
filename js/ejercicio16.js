const sumar = (a, b) => a + b;
const restar = (a, b) => a - b;
const multiplicar = (a, b) => a * b;

// Validacion del divisor 'b' para que no sea cero 
const dividir = (a, b) => b !== 0 ? a / b : 'Error';

const calcularOperacion = (tipoOperacion) => {
    const inputNum1 = document.getElementById('numero1');
    const inputNum2 = document.getElementById('numero2');
    const inputResultado = document.getElementById('resultado');

    const n1 = parseFloat(inputNum1.value);
    const n2 = parseFloat(inputNum2.value);

    if (isNaN(n1) || isNaN(n2)) {
        // Invocamos el mensaje de error estético de SweetAlert2
        Swal.fire({
            icon: "error",
            title: "Campos Inválidos",
            text: "Por favor, ingresa números válidos en ambos campos antes de operar.",
            confirmButtonColor: "#3498db"
        });
        inputResultado.value = ""; // Limpiamos el resultado 
        return;
    }

    let finalResultado = 0;

    switch (tipoOperacion) {
        case 'suma':
            finalResultado = sumar(n1, n2);
            break;
        case 'resta':
            finalResultado = restar(n1, n2);
            break;
        case 'multiplicacion':
            finalResultado = multiplicar(n1, n2);
            break;
        case 'division':
            finalResultado = dividir(n1, n2);
            
            if (finalResultado === 'Error') {
                Swal.fire({
                    icon: "warning",
                    title: "Operación Matemática Inválida",
                    text: "No es posible dividir un número entre cero.",
                    confirmButtonColor: "#3498db"
                });
                inputResultado.value = "Error: División por cero";
                return;
            }
            break;
    }

    inputResultado.value = Number.isInteger(finalResultado) ? finalResultado : finalResultado.toFixed(4);
};