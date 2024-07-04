document.getElementById('clienteForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const cedula = document.getElementById('cedula').value;
    const apellidos = document.getElementById('apellidos').value;
    const nombres = document.getElementById('nombres').value;
    const estadoCivil = document.getElementById('estadoCivil').value;
    const sexo = document.getElementById('sexo').value;
    const ciudad = document.getElementById('ciudad').value;
    const direccion = document.getElementById('direccion').value;
    const telefono = document.getElementById('telefono').value;
    const correo = document.getElementById('correo').value;

    const cliente = {
        cedula,
        apellidos,
        nombres,
        estadoCivil,
        sexo,
        ciudad,
        direccion,
        telefono,
        correo
    };

    // Obtener los datos almacenados en Local Storage
    const clientes = JSON.parse(localStorage.getItem('clientes')) || [];

    // Verificar si el cliente ya existe basado en la cédula
    const clienteExistente = clientes.find(c => c.cedula === cedula);
    if (clienteExistente) {
        alert('El cliente con esta cédula ya existe.');
    } else {
        // Agregar el nuevo cliente a la lista
        clientes.push(cliente);
        localStorage.setItem('clientes', JSON.stringify(clientes));
        alert('Cliente guardado con éxito.');
    }

    // Reiniciar el formulario
    document.getElementById('clienteForm').reset();
});
