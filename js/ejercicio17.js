
const crearGestorTareas = () => {
    let tareas = []; 

    const obtenerTareas = () => {
        const datosStorage = localStorage.getItem("mis_tareas_web");
        tareas = datosStorage ? JSON.parse(datosStorage) : [];
        return tareas;
    };

    const guardarEnStorage = () => {
        // Convertimos el array a formato JSON antes de guardar [cite: 128]
        localStorage.setItem("mis_tareas_web", JSON.stringify(tareas));
    };

    return {
        listar: () => obtenerTareas(),
        agregar: (nombreTarea) => {
            obtenerTareas();
            tareas.push({ texto: nombreTarea });
            guardarEnStorage();
        },
        eliminar: (indice) => {
            obtenerTareas();
            tareas.splice(indice, 1);
            guardarEnStorage();
        }
    };
};

const gestor = crearGestorTareas();

// 2. CONTROL COMPLETO DEL DOM CUANDO ESTÉ LISTO
document.addEventListener('DOMContentLoaded', () => {
    
    const renderizarTareas = () => {
        const contenedorLista = document.getElementById('lista-tareas');
        if (!contenedorLista) return;
        
        contenedorLista.innerHTML = ""; 
        const listaActual = gestor.listar(); 

        if (listaActual.length === 0) {
            contenedorLista.innerHTML = `<p class="mensaje-vacio">No tienes tareas pendientes. ¡Buen trabajo!</p>`;
            return;
        }

        listaActual.forEach((tarea, indice) => {
            const divTarea = document.createElement('div');
            divTarea.classList.add('item-tarea');
            
            divTarea.innerHTML = `
                <span class="texto-tarea">${tarea.texto}</span>
                <button class="btn-eliminar" data-indice="${indice}">Eliminar</button>
            `;
            
            contenedorLista.appendChild(divTarea);
        });
    };

    // Evento para capturar el clic y añadir la tarea
    const btnAgregar = document.getElementById('btn-agregar');
    if (btnAgregar) {
        btnAgregar.addEventListener('click', () => {
            const inputNuevaTarea = document.getElementById('nueva-tarea');
            const texto = inputNuevaTarea.value.trim();

            if (texto === "") {
                Swal.fire({
                    icon: 'warning',
                    title: 'Campo vacío',
                    text: 'Por favor escribe una descripción para la tarea.',
                    confirmButtonColor: '#3498db'
                });
                return;
            }

            gestor.agregar(texto); 
            inputNuevaTarea.value = ""; 
            inputNuevaTarea.focus();
            renderizarTareas(); 
        });
    }

    // Evento dinámico para escuchar la eliminación
    const contenedorLista = document.getElementById('lista-tareas');
    if (contenedorLista) {
        contenedorLista.addEventListener('click', (e) => {
            if (e.target.classList.contains('btn-eliminar')) {
                const indice = e.target.getAttribute('data-indice');
                
                Swal.fire({
                    title: '¿Estás seguro?',
                    text: "Esta acción eliminará permanentemente el pendiente.",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3498db',
                    cancelButtonColor: '#e74c3c',
                    confirmButtonText: 'Sí, eliminar',
                    cancelButtonText: 'Cancelar'
                }).then((result) => {
                    if (result.isConfirmed) {
                        gestor.eliminar(indice); 
                        renderizarTareas(); 
                        
                        Swal.fire({
                            title: '¡Eliminado!',
                            text: 'La tarea ha sido borrada.',
                            icon: 'success',
                            timer: 1500,
                            showConfirmButton: false
                        });
                    }
                });
            }
        });
    }

    // Carga inicial obligatoria
    renderizarTareas();
});