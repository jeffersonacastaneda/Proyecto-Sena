// Función para limpiar los campos del formulario después de agregar
export function limpiarCamposInvitado() {
    document.getElementById("titulo").value = "";
    document.getElementById("autor").value = "";
    document.getElementById("genero").value = "";

  }

// Función para llenar la tabla

  export function llenarTablaInvitado(libros) {
    const tabla = document.getElementById("resultado-tabla");
    const tbody = tabla.querySelector("tbody");
    tbody.innerHTML = "";

    if (libros.length > 0) {
      tabla.style.display = "table";
      libros.forEach((libro) => {
        const fila = document.createElement("tr");
        fila.innerHTML = `
          <td>${libro.titulo}</td>
          <td>${libro.autor}</td>
          <td>${libro.genero}</td>
        `;
        tbody.appendChild(fila);
      });
    } else {
      // Ocultar la tabla si no hay resultados
      tabla.style.display = "none";
    }
}

// Función para validar la búsqueda invitado
export function validarBusquedaInvitado(titulo, autor, genero) {
  // Verifica si al menos uno de los campos está lleno
  if (!titulo && !autor && !genero) {
    alert("Por favor, rellena al menos uno de los campos: título, autor o género.");
    return false;
  }
  return true;
}

module.exports = { limpiarCamposInvitado,
  llenarTablaInvitado,
  validarBusquedaInvitado };