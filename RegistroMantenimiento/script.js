document.getElementById('mantenimientoForm').addEventListener('submit', function(e) {
    e.preventDefault();

    let fecha = document.getElementById('fecha').value;
    let equipo = document.getElementById('equipo').value;
    let descripcion = document.getElementById('descripcion').value;

    let registro = {
        fecha: fecha,
        equipo: equipo,
        descripcion: descripcion
    };

    // Guardar en LocalStorage
    let registros = JSON.parse(localStorage.getItem('registros')) || [];
    registros.push(registro);
    localStorage.setItem('registros', JSON.stringify(registros));

    // Actualizar la lista de registros
    mostrarRegistros();
});

function mostrarRegistros() {
    let registrosList = document.getElementById('registrosList');
    registrosList.innerHTML = '';

    let registros = JSON.parse(localStorage.getItem('registros')) || [];

    registros.forEach(function(registro, index) {
        let li = document.createElement('li');
        li.textContent = `Fecha: ${registro.fecha}, Equipo: ${registro.equipo}, Descripción: ${registro.descripcion}`;
        registrosList.appendChild(li);
    });
}

// Mostrar los registros al cargar la página
mostrarRegistros();
