const request = require('supertest');
const app = require('../backend/server'); // Asegúrate de que tu servidor exporta la instancia de app (express())

describe('POST /agregarP', () => {
  it('debería crear un préstamo exitosamente cuando el libro existe y está disponible', async () => {
    const response = await request(app)
      .post('/libros/agregarP')
      .send({
        nombre: 'Juan',
        apellido: 'Pérez',
        telefono: '123456789',
        direccion: 'Calle Falsa 123',
        correo: 'juan@example.com',
        isbn: '9999999999123',         // Debe existir en la base con disponibilidad = 1
        fechaP: '2025-05-08',
        fechaD: '2025-05-15'
      });

    expect(response.statusCode).toBe(201);
    expect(response.body).toHaveProperty('message', 'Préstamo creado exitosamente');
  });
});