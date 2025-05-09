// Agregar manualmente TextEncoder y TextDecoder REQUERIDO PARA LAS PRUEBAS
const { TextEncoder, TextDecoder } = require('util');
global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;