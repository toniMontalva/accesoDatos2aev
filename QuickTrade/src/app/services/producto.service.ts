import { Injectable } from '@angular/core';
import { IArticulo, ITecnologia, IInmobiliaria, IMotor, IBusqueda } from '../interfaces';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';

@Injectable()

export class ProductoService {

    productos : (IArticulo | ITecnologia | IInmobiliaria | IMotor)[] = [];
    productosByUser : (IArticulo | ITecnologia | IInmobiliaria | IMotor)[] = [];
    productosFiltradosBusqueda : (IArticulo | ITecnologia | IInmobiliaria | IMotor)[] = [];
    maxId : number;
    usuarioKey : string;

    
    constructor(private _db: AngularFireDatabase, public afAuth: AngularFireAuth){

    }

    insertarProducto(producto : (IArticulo | ITecnologia | IInmobiliaria | IMotor)) {
        let ref = this._db.database.ref("productos");
        ref.push(producto);
        this.guardarProductos();
    }

    insertarBusqueda(busqueda: IBusqueda) {
        let ref = this._db.database.ref("busquedas");        
        ref.push(busqueda);        
    }

    getProductos() : firebase.database.Reference {
        let ref = this._db.database.ref("productos");
        return ref;
    }

    getProductosPorNombre(nombre: string) {
        this.productosFiltradosBusqueda = [];
        this.productosFiltradosBusqueda = this.productos.filter(x => x.nombre.toLowerCase().includes(nombre));
    }

    guardarProductos() {
        this.productos = [];
        let ref = this.getProductos();

        ref.once("value", snapshot => {
            snapshot.forEach(child => {
              let value = child.val();
              this.productos.push(value);
            })
          })
    }

    saveUniqueId() : number {
        this.maxId = -1;
        for(let i = 0; i < this.productos.length; i++){
            if(this.productos[i].id > this.maxId){
                this.maxId = this.productos[i].id;
            }
        }
        return this.maxId;
    }

    getProductosPorID(id : number) :  (IArticulo | ITecnologia | IInmobiliaria | IMotor) {        
        return this.productos.find(x => x.id === id);
    }

    getProductsByUser() {
       this.productosByUser = this.productos.filter(x => x.id_usuario === this.usuarioKey);
    }

    getLoggedUserFirebase() {
        this.afAuth.auth.onAuthStateChanged((user) => {
            if(user) {
                this.usuarioKey = user.uid;
            } else {
                // nada
            }
        })
    }

    async getKeyOfProductAsync(id : number) : Promise<string> {
        let ref = this._db.database.ref("productos");
        let key = "";

        await ref.once("value", snapshot => {
            snapshot.forEach(child => {
                let idProduct = child.val().id;

                if(idProduct === id) {
                    key = child.key;
                }           
            })
        })

        return key;
    }

    borrarArticulo(id : number) {
        let ref = this._db.database.ref("productos");

        ref.orderByChild('id').equalTo(id).once("value", snapshot => {
            snapshot.forEach(child => {
                let key = child.key;
                ref.child(key).remove();
            })
        })        
        this.guardarProductos();
    }

}