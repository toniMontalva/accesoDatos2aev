import { Injectable } from '@angular/core';
import { IArticulo, ITecnologia, IInmobiliaria, IMotor, IUsuario } from '../interfaces';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable()

export class ProductoService {

    productos : (IArticulo | ITecnologia | IInmobiliaria | IMotor)[] = [];
    productosByUser : (IArticulo | ITecnologia | IInmobiliaria | IMotor)[] = [];
    maxId : number;
    usuario : IUsuario;
    usuarioKey : string;
    
    constructor(private _db: AngularFireDatabase){

    }

    insertarProducto(producto : (IArticulo | ITecnologia | IInmobiliaria | IMotor)) {
        let ref = this._db.database.ref("productos");
        ref.push(producto);
        this.guardarProductos();
    }

    getProductos() : firebase.database.Reference {
        let ref = this._db.database.ref("productos");
        return ref;
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

    getLoggedUser(user_name : string) {
        let ref = this._db.database.ref("usuarios");
        this.usuarioKey = null;

        ref.once("value", snapshot => {
            snapshot.forEach(child => {
                let nomUser = child.val().nombreUsuario;                
                if(user_name === nomUser) {
                    this.usuario = child.val();
                    this.usuarioKey = child.key;                       
                }
            })
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