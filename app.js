let claveNombre = "localStorage_explicacion_nombre";

// Ejercicio 1: guardar un nombre
function guardarNombre() {
    let nombre = document.getElementById("nombreGuardar").value.trim();

    if (nombre === "") {
        alert("Por favor ingrese el nombre");
        return;
    }

    let listaNombres = JSON.parse(localStorage.getItem(claveNombre)) || [];
    listaNombres.push(nombre);
    localStorage.setItem(claveNombre, JSON.stringify(listaNombres));

    document.getElementById("nombreGuardar").value = "";
    document.getElementById("resultadoGuardar").textContent = "Nombre guardado: " + nombre;
}

// Ejercicio 2: mostrar los nombres guardados
function mostrarNombre() {
    let listaNombres = JSON.parse(localStorage.getItem(claveNombre)) || [];
    let resultado = document.getElementById("resultadoMostrar");
    resultado.innerHTML = "";

    if (listaNombres.length === 0) {
        resultado.innerHTML = "<li>No hay nombres guardados</li>";
        return;
    }

    for (let i = 0; i < listaNombres.length; i++) {
        let item = document.createElement("li");
        item.textContent = (i + 1) + ". " + listaNombres[i];
        resultado.appendChild(item);
    }
}

// Ejercicio 3: editar un nombre guardado
let formEditar = document.getElementById("formEditar");
let posicionEditar = document.getElementById("posicionEditar");
let nombreEditar = document.getElementById("nombreEditar");
let resultadoEditar = document.getElementById("resultadoEditar");

formEditar.addEventListener("submit", function (evento) {
    evento.preventDefault();

    let posicion = Number(posicionEditar.value);
    let nuevoNombre = nombreEditar.value.trim();
    let listaNombres = JSON.parse(localStorage.getItem(claveNombre)) || [];

    if (listaNombres.length === 0) {
        resultadoEditar.textContent = "No hay nombres guardados.";
        return;
    }

    if (posicion < 1 || posicion > listaNombres.length) {
        resultadoEditar.textContent = "Esa posición no existe.";
        return;
    }

    if (nuevoNombre === "") {
        resultadoEditar.textContent = "Escribe el nuevo nombre.";
        return;
    }

    listaNombres[posicion - 1] = nuevoNombre;
    localStorage.setItem(claveNombre, JSON.stringify(listaNombres));

    resultadoEditar.textContent = "Nombre actualizado correctamente";
    formEditar.reset();
});

// Ejercicio 4: eliminar los nombres guardados
let formEliminar = document.getElementById("formEliminar");
let resultadoEliminar = document.getElementById("resultadoEliminar");

formEliminar.addEventListener("submit", function (evento) {
    evento.preventDefault();

    localStorage.removeItem(claveNombre);
    resultadoEliminar.textContent = "Nombres eliminados";
});

// Ejercicio 5: registrar una mascota
let formMascota = document.getElementById("formMascota");
let resultadoMascota = document.getElementById("resultadoMascota");

formMascota.addEventListener("submit", function (evento) {
    evento.preventDefault();

    let mascota = {
        nombre: document.getElementById("mascota").value.trim(),
        raza: document.getElementById("raza").value.trim(),
        edad: Number(document.getElementById("edad").value)
    };

    localStorage.setItem("mascota", JSON.stringify(mascota));
    resultadoMascota.textContent = "Mascota guardada: " + mascota.nombre;
    formMascota.reset();
});