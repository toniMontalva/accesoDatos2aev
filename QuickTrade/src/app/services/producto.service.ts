import { Injectable } from '@angular/core';
import { IArticulo, ITecnologia, IInmobiliaria, IMotor } from '../interfaces';

@Injectable()

export class ProductoService {

    productos : (IArticulo | ITecnologia | IInmobiliaria | IMotor)[] = [
        {
            "id" : 1,
            "nombre" : "Motocicleta 23",
            "precio" : 12,
            "descripcion" : "Descripción prueba",
            "categoria" : "Motor",
            "tipo_vehiculo" : "Moto",
            "km" : 1000,
            "anyo" : 2018
        }, 
        {
            "id" : 2,
            "nombre" : "Móvil",
            "precio" : 32,
            "descripcion" : "Descripción prueba",
            "categoria" : "Tecnologia",
            "estado" : "Perfecto estado"
        }
    ];
    
    insertarProducto() {
        // Por implementar
    }

    getProductos() : (IArticulo | ITecnologia | IInmobiliaria | IMotor)[] {
        return this.productos;
    }

    getProductosPorID(id : number) :  (IArticulo | ITecnologia | IInmobiliaria | IMotor) {
        return this.productos.find(x => x.id == id);
    }
}