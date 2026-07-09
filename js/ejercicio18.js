document.addEventListener('DOMContentLoaded', () => {
    // 1. Seleccionar los elementos importantes del DOM
    const inputElemento = document.getElementById('nuevoElemento');
    const botonAgregar = document.getElementById('agregarBtn');
    const listaContenedor = document.getElementById('lista');

    // Función encargada de fabricar e inyectar el elemento
    const agregarElemento = () => {
        const texto = inputElemento.value.trim(); // Obtiene el valor y elimina espacios muertos

        // Validación: Si el campo está vacío, detenemos la ejecución
        if (texto === '') {
            alert('Por favor, escribe algo para agregar a la lista.');
            inputElemento.focus();
            return;
        }

        // 2. CREACIÓN DINÁMICA DE ELEMENTOS (Manipulación del DOM)
        // Creamos la etiqueta de lista 'li'
        const li = document.createElement('li');
        
        // Le añadimos las clases de Bootstrap para que se vea como un renglón estilizado y responsivo
        li.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center', 'animate__animated', 'animate__fadeIn');

        // Creamos un contenedor de texto para el valor ingresado
        const spanTexto = document.createElement('span');
        spanTexto.textContent = texto;
        li.appendChild(spanTexto); // Insertamos el texto dentro del 'li'

        // 3. CREACIÓN DEL BOTÓN ELIMINAR INTERNO
        const botonEliminar = document.createElement('button');
        botonEliminar.textContent = 'Eliminar';
        
        // Le aplicamos clases utilitarias de Bootstrap (Botón pequeño, color rojo contorno)
        botonEliminar.classList.add('btn', 'btn-outline-danger', 'btn-sm', 'rounded-2');

        // Evento click exclusivo para este botón recién creado
        botonEliminar.addEventListener('click', () => {
            li.remove(); // Remueve físicamente este 'li' específico del árbol HTML
        });

        // Ensamblamos el botón dentro del renglón de la lista
        li.appendChild(botonEliminar);

        // 4. INYECCIÓN FINAL AL CONTENEDOR UL
        listaContenedor.appendChild(li);

        // 5. LIMPIEZA DEL CAMPO DE TEXTO
        inputElemento.value = '';
        inputElemento.focus(); // Regresa el cursor para permitir una escritura continua
    };

    // Asignamos la función al evento click del botón principal
    botonAgregar.addEventListener('click', agregarElemento);

    // EXTRA ÚTIL: Permitir agregar elementos presionando la tecla "Enter" en el teclado
    inputElemento.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            agregarElemento();
        }
    });
});