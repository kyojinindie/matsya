/**
 * Objeto Alumno
 */
class Alumno {
  constructor({nombre, telefono,fechaPago,modalidadClase,email,comprobantePago} = {}) {
    this.nombre = nombre;
    this.telefono = telefono;
    this.fechaPago = fechaPago;
    this.modalidadClase = modalidadClase;
    this.email = email;
    this.comprobantePago = comprobantePago;

  }
}

module.exports = Alumno;