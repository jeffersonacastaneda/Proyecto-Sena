const request = require("supertest");
const app = require("../backend/server"); // Asegúrate de que apunta a tu archivo del servidor

describe("POST /libros/agregar", () => {
  it("debería agregar un nuevo libro y devolver status 201", async () => {
    const nuevoLibro = {
      isbn: "9999999999123",
      titulo: "Libro de Prueba2",
      autor: "Autor de Prueba",
      editorial: "Editorial de Prueba",
      genero: "Ficción",
    };

    const response = await request(app)
      .post("/libros/agregar")
      .send(nuevoLibro)
      .set("Content-Type", "application/json");

    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty("message", "Libro creado exitosamente");
    expect(response.body).toHaveProperty("libroId");
  });
});