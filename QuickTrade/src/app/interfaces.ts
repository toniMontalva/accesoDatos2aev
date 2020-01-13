export interface IArticulo {
    "id" : number,
    "nombre" : string,
    "precio" : number,
    "descripcion" : string,
    "categoria" : string
}

export interface ITecnologia extends IArticulo {
    "estado" : string
}

export interface IInmobiliaria extends IArticulo {
    "metros_cuadrados" : number,
    "banyos" : number,
    "habitaciones" : number,
    "localidad" : string
}

export interface IMotor extends IArticulo {
    "tipo_vehiculo" : string,
    "km" : number,
    "anyo" : number
}