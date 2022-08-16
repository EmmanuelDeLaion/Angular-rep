export interface Empleados {
  nombre: string,
  correo: string,
  fechaDeNacimiento: Date,
  direccion: {
    calle: string,
    numInt?: number,
    numExt: number,
    colonia: string,
    estado: string,
    ciudad: string,
    pais: string
  }
}
