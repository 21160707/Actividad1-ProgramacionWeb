document.addEventListener('DOMContentLoaded', () => {
    const btnCalcular = document.getElementById('btn-calcular');
    const txtDatosAlumnos = document.getElementById('datos-alumnos');
    const txtResultado = document.getElementById('resultado');

    btnCalcular.addEventListener('click', () => {
        const contenido = txtDatosAlumnos.value.trim();

        // 1. Validación: Verificar que el campo no esté vacío
        if (contenido === "") {
            alert("Por favor, ingrese al menos un alumno y su calificación.");
            txtDatosAlumnos.focus();
            return;
        }

        // 2. Separar el texto por cada salto de línea (renglón por renglón)
        const lineas = contenido.split('\n');
        const listaAlumnos = [];

        // 3. Recorrer cada línea para fabricar nuestros objetos
        for (let i = 0; i < lineas.length; i++) {
            const linea = lineas[i].trim();
            if (linea === "") continue; // Si es una línea vacía, la salta

            // Separar el nombre de la calificación usando la coma
            const partes = linea.split(',');

            if (partes.length !== 2) {
                alert(`Error en la línea ${i + 1}: Asegúrate de separar el nombre y la calificación con una coma (,).`);
                return;
            }

            const nombre = partes[0].trim();
            const calificacion = parseFloat(partes[1].trim());

            // Validación de la calificación de cada alumno
            if (isNaN(calificacion) || calificacion < 0 || calificacion > 10) {
                alert(`Error en la línea ${i + 1}: "${nombre}" tiene una calificación inválida. Debe ser entre 0 y 10.`);
                return;
            }

            // CREACIÓN DEL OBJETO: Empaquetamos al alumno de esta línea
            const alumnoObjeto = {
                nombre: nombre,
                calificacion: calificacion
            };

            // Lo guardamos en nuestra colección de objetos
            listaAlumnos.push(alumnoObjeto);
        }

        // Si por alguna razón no se procesaron alumnos válidos, detenemos
        if (listaAlumnos.length === 0) return;

        // ========================================================
        // PROCESAMIENTO DE LOS OBJETOS (Lo que pide el ejercicio)
        // ========================================================

        // 1. Calcular promedio general
        const sumaTotal = listaAlumnos.reduce((total, est) => total + est.calificacion, 0);
        const promedioGeneral = sumaTotal / listaAlumnos.length;

        // 2. Buscar al estudiante con la calificación más alta
        let estudianteMasAlto = listaAlumnos[0];
        // 3. Buscar al estudiante con la calificación más baja
        let estudianteMasBajo = listaAlumnos[0];

        listaAlumnos.forEach(estudiante => {
            if (estudiante.calificacion > estudianteMasAlto.calificacion) {
                estudianteMasAlto = estudiante; // Guarda el objeto completo del más alto
            }
            if (estudiante.calificacion < estudianteMasBajo.calificacion) {
                estudianteMasBajo = estudiante; // Guarda el objeto completo del más bajo
            }
        });

        // 4. Mostrar los resultados formateados en la caja grande de texto
        txtResultado.value = 
`1. Calificación promedio del grupo: ${promedioGeneral.toFixed(2)}
2. Calificación más alta: ${estudianteMasAlto.nombre} (${estudianteMasAlto.calificacion})
3. Calificación más baja: ${estudianteMasBajo.nombre} (${estudianteMasBajo.calificacion})`;
    });
});