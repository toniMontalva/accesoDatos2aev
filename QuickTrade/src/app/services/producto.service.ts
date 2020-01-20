import { Injectable } from '@angular/core';
import { IArticulo, ITecnologia, IInmobiliaria, IMotor } from '../interfaces';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable()

export class ProductoService {

    productos : (IArticulo | ITecnologia | IInmobiliaria | IMotor)[] = [];
    
    constructor(private _db: AngularFireDatabase){

    }

    insertarProducto(producto : (IArticulo | ITecnologia | IInmobiliaria | IMotor)) {
        // Por implementar
        let ref = this._db.database.ref("productos");
        ref.push(producto);
    }

    getProductos() : firebase.database.Reference {
        let ref = this._db.database.ref("productos");
        return ref;
    }

    guardarProductos() {
        let ref = this.getProductos();

        ref.once("value", snapshot => {
            snapshot.forEach(child => {
              let value = child.val();
              this.productos.push(value);
            })
          })
    }

    getProductosPorID(id : number) :  (IArticulo | ITecnologia | IInmobiliaria | IMotor) {        
        this.guardarProductos();
        return this.productos.find(x => x.id == id);
    }
}