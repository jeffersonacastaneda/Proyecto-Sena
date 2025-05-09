
// SERVIDOR NODE.JS

const express = require("express");
const path = require("path");
const librosRoutes = require("./routes/route"); // Importamos las rutas CRUD

const app = express();
const PORT = 3001;

// 🛠 Middleware para servir archivos estáticos desde `front-end`
app.use(express.static(path.resolve(__dirname, "../front-end")));

// Middleware para parsear JSON
app.use(express.json());

// 📌 Rutas para servir archivos HTML
app.get("/inicio", (req, res) => {res.sendFile( path.resolve(__dirname, "../front-end/formulario-inicio-sesion.html"));});

app.get("/administrador", (req, res) => { res.sendFile( path.resolve(__dirname, "../front-end/formulario-inicio-administrador.html"))});

app.get("/gprestamos", (req, res) => {res.sendFile(path.resolve(__dirname, "../front-end/formulario-gestion-prestamos.html"));});

app.get("/gmaterial", (req, res) => {res.sendFile(path.resolve(__dirname, "../front-end/formulario-gestion-material.html"));});

app.get("/greportes", (req, res) => {res.sendFile(path.resolve(__dirname, "../front-end/formulario-gestion-reportes.html"));});

app.get("/invitado", (req, res) => {res.sendFile(path.resolve(__dirname, "../front-end/formulario-busqueda-invitado.html"));});


// 🔥 Montar rutas de libros
app.use("/libros", librosRoutes); 

// validacion para que se puedan ejecutar las pruebas y levantar el servidor

if (require.main === module) {
    app.listen(PORT, () => {
      console.log(`✅ Servidor corriendo en http://localhost:${PORT}`);
    });
  }
  
  module.exports = app;

/*
app.listen(PORT, () => {console.log(`✅ Servidor corriendo en http://localhost:${PORT}`);});
*/



