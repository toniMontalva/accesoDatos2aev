import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductoService } from '../services/producto.service';
import { IArticulo, IInmobiliaria, IMotor, ITecnologia } from '../interfaces';

@Component({
  selector: 'app-modify-product',
  templateUrl: './modify-product.page.html',
  styleUrls: ['./modify-product.page.scss'],
})
export class ModifyProductPage implements OnInit {

  id : number;
  producto : (IArticulo | IInmobiliaria | IMotor | ITecnologia);
  key : string;

  hogar : boolean = false;
  motor: boolean = false;
  inmobiliaria : boolean = false;
  tecnologia : boolean = false;
  // Propiedades de todos los artículos
  nombre : string;
  precio : number;
  descripcion : string;
  // Si es categoría tecnología
  estado : string;
  // Si es categoría inmobiliaria
  metros_cuadrados : number;
  banyos : number;
  habitaciones : number;
  localidad : string;
  // Si es categoría motor
  tipo_vehiculo : string;
  km : number;
  anyo : number;

  constructor(private _productoService : ProductoService, private _activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.id = +this._activatedRoute.snapshot.paramMap.get('id');
    this.producto = this._productoService.getProductosPorID(this.id);
    this.nombre = this.producto.nombre;
    this.precio = this.producto.precio;
    this.descripcion = this.producto.descripcion; 

    let categoria = this.producto.categoria.toLowerCase();
    if(categoria === "motor") {       
      this.motor = true;
    } else if(categoria ==="hogar"){
      this.hogar = true;
    } else if(categoria === "inmobiliaria"){
      this.inmobiliaria = true;
    } else {
      this.tecnologia = true;
    }

    //this.key = this._productoService.getKeyOfProduct(this.id);
  }

  modificarProducto() {    
    /*let ref = this._productoService.getProductos();
    this.key = null;
    ref.once("value", snapshot => {
      snapshot.forEach(child => {
        let idUser = child.val().id;
        console.log("id recuperado " + idUser);
        console.log("y producto id es " + this.producto.id);

        if(idUser === this.producto.id) {
            this.key = child.key;
        }
        console.log("la key es " + this.key);
      })
    })*/    
    this._productoService.getKeyOfProductAsync(this.producto.id).then((key) => {
      this.key = key;
    
      this.producto.descripcion = this.descripcion;
      this.producto.nombre = this.nombre;
      this.producto.precio = this.precio;

      console.log("la key es " + this.key + " y la categoria " + this.producto.categoria);

      if(this.producto.categoria == "hogar"){
        let ref = this._productoService.getProductos();
        console.log("entro en la categoria hogar");
        ref.child(this.key).set({
          id: this.producto.id,
          id_usuario: this.producto.id_usuario,
          nombre: this.producto.nombre,
          precio: this.producto.precio,
          descripcion: this.producto.descripcion,
          categoria: this.producto.categoria
        })
      } else if (this.tecnologia){
          let ref = this._productoService.getProductos();
          ref.child(this.key).set({
            id: this.producto.id,
            id_usuario: this.producto.id_usuario,
            nombre: this.producto.nombre,
            precio: this.producto.precio,
            descripcion: this.producto.descripcion,
            categoria: this.producto.categoria,
            estado: this.estado
          })
      } else if(this.inmobiliaria){ 
          let ref = this._productoService.getProductos();
          ref.child(this.key).set({
            id: this.producto.id,
            id_usuario: this.producto.id_usuario,
            nombre: this.producto.nombre,
            precio: this.producto.precio,
            descripcion: this.producto.descripcion,
            categoria: this.producto.categoria,
            metros_cuadrados: this.metros_cuadrados,
            banyos: this.banyos,
            habitaciones: this.habitaciones,
            localidad: this.localidad
          })
      } else if(this.motor) {
            let ref = this._productoService.getProductos();
            ref.child(this.key).set({
              id: this.producto.id,
              id_usuario: this.producto.id_usuario,
              nombre: this.producto.nombre,
              precio: this.producto.precio,
              descripcion: this.producto.descripcion,
              categoria: this.producto.categoria,
              tipo_vehiculo: this.tipo_vehiculo,
              km: this.km,
              anyo: this.anyo
            })
      }
    })
  }
}