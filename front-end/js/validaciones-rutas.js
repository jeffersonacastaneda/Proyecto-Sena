

// INICIO DE SESION

// INICIO SESION ADMINISTRADOR

document.addEventListener("DOMContentLoaded", function () {
  //
  const inicioSesionButton = document.getElementById("inicioSesion");
  const invitadoButton = document.getElementById("invitado");


  if(inicioSesionButton){

    inicioSesionButton.addEventListener("click", function (event) {
      event.preventDefault();
      const usuario = document.getElementById("usuario").value;
      const password = document.getElementById("password").value;
  
      if (usuario === "ADMIN" && password === "ADMIN123") {
        window.location.href = "/administrador";
      } else {
        alert("Usuario o contraseña incorrectos");
      }
    });
  }
  
// INICIO SESION INVITADO
 
  if(invitadoButton){
  
  invitadoButton.addEventListener("click", function () {
    window.location.href = "/invitado";
  });
  
  }

});



// PAGINAS ADMINISTRADOR

document.addEventListener("DOMContentLoaded", function () {
  
  const gprestamo = document.getElementById("gestionarPrestamo");
  const gmaterial = document.getElementById("gestionarMaterial");
  const greportes = document.getElementById("gestionarReportes");

  // PAGINA GESTION PRESTAMOS

  if(gprestamo){

 gprestamo.addEventListener("click", function (event) {
  event.preventDefault();
  window.location.href = "/gprestamos";
 });

  }
 // PAGINA GESTION MATERIALES

  if(gmaterial){

   gmaterial.addEventListener("click", function () {
    // Redirigir a la página especificada
    window.location.href = "/gmaterial";
  });
   
    }

    // PAGINA GESTION REPORTES
     
  if(greportes){

  greportes.addEventListener("click", function () {
  // Redirigir a la página especificada
  window.location.href = "/greportes";
});

}
 
});
