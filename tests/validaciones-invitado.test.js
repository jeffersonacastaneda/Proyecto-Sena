import { limpiarCamposInvitado, llenarTablaInvitado, validarBusquedaInvitado } from '../front-end/js/validaciones-invitado.js';

// Simulamos el alert global para que Jest no falle
global.alert = jest.fn();

describe('validaciones-invitado', () => {
 
  // Test para limpiarCamposInvitado
  describe('limpiarCamposInvitado', () => {
    beforeEach(() => {
      document.body.innerHTML = `
        <input id="titulo" value="1984">
        <input id="autor" value="Orwell">
        <input id="genero" value="Distopía">
      `;
    });

    test('debería limpiar los valores de los campos', () => {
      limpiarCamposInvitado();
      expect(document.getElementById("titulo").value).toBe("");
      expect(document.getElementById("autor").value).toBe("");
      expect(document.getElementById("genero").value).toBe("");
    });
  });

  // Test para llenarTablaInvitado
  describe('llenarTablaInvitado', () => {
    beforeEach(() => {
      document.body.innerHTML = `
        <table id="resultado-tabla">
          <tbody></tbody>
        </table>
      `;
    });

    test('debería llenar la tabla con los libros', () => {
      const libros = [
        { titulo: '1984', autor: 'Orwell', genero: 'Distopía' },
        { titulo: 'Brave New World', autor: 'Huxley', genero: 'Ciencia ficción' }
      ];

      llenarTablaInvitado(libros);

      const filas = document.querySelectorAll("#resultado-tabla tbody tr");
      expect(filas.length).toBe(libros.length);
      expect(filas[0].innerHTML).toContain('1984');
      expect(filas[1].innerHTML).toContain('Brave New World');
    });

    test('debería ocultar la tabla si no hay libros', () => {
      llenarTablaInvitado([]);
      const tabla = document.getElementById("resultado-tabla");
      expect(tabla.style.display).toBe("none");
    });
  });

  // Test para validarBusquedaInvitado
  describe('validarBusquedaInvitado', () => {
    beforeEach(() => {
      alert.mockClear();
    });

    test('retorna false y muestra alert si todos los campos están vacíos', () => {
      const resultado = validarBusquedaInvitado('', '', '');
      expect(resultado).toBe(false);
      expect(alert).toHaveBeenCalledWith("Por favor, rellena al menos uno de los campos: título, autor o género.");
    });

    test('retorna true si al menos un campo tiene valor', () => {
      expect(validarBusquedaInvitado('1984', '', '')).toBe(true);
      expect(validarBusquedaInvitado('', 'Orwell', '')).toBe(true);
      expect(validarBusquedaInvitado('', '', 'Distopía')).toBe(true);
    });
  });
});