const request = require("supertest");
const app = require('../backend/server'); // Asegúrate de que esta ruta sea correcta

describe("DELETE /libros/eliminar/:isbn", () => {
  it("debería eliminar un libro existente y devolver 200", async () => {
    const isbnExistente = "9999999999123"; // Asegúrate de que este ISBN esté en la base de datos de prueba

    const response = await request(app).delete(`/libros/eliminar/${isbnExistente}`);

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("message", "Libro eliminado exitosamente");
  });

  it("debería devolver 404 si el libro no existe", async () => {
    const isbnInexistente = "2586458965321"; // ISBN que no esté en la BD

    const response = await request(app).delete(`/libros/eliminar/${isbnInexistente}`);

    expect(response.status).toBe(404);
    expect(response.body).toHaveProperty("message", "Libro no encontrado");
  });

  it("debería devolver 500 si hay un error interno", async () => {
    // Si quieres simular un fallo, puedes hacerlo con jest.mock o similar
  });
});