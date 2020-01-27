import { Component, OnInit } from '@angular/core';
import { IArticulo, ITecnologia, IInmobiliaria, IMotor } from '../interfaces';
import { ProductoService } from '../services/producto.service';


@Component({
  selector: 'app-insertar',
  templateUrl: './insertar.page.html',
  styleUrls: ['./insertar.page.scss'],
})
export class InsertarPage implements OnInit {  

  hogar : boolean = false;
  motor: boolean = false;
  inmobiliaria : boolean = false;
  tecnologia : boolean = false;
  categoria_Seleccionada : boolean = false;
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

  productos : (IArticulo | ITecnologia | IInmobiliaria | IMotor)[] = [];

  numElementos : number;

  constructor(private _productoService : ProductoService) { }

  ngOnInit() {
    this.numElementos = this._productoService.saveUniqueId();
  }

  categoria_Hogar() : void {
    if(this.inmobiliaria == true || this.motor == true || this.tecnologia == true){
      this.inmobiliaria = false;
      this.motor = false;
      this.tecnologia = false;
    }
    this.hogar = true;
    this.categoria_Seleccionada = true;
  }

  categoria_Motor() : void {
    if(this.inmobiliaria == true || this.hogar == true || this.tecnologia == true){
      this.inmobiliaria = false;
      this.hogar = false;
      this.tecnologia = false;
    }
    this.motor = true;
    this.categoria_Seleccionada = true;
  }

  categoria_Inmobiliaria() : void {
    if(this.motor == true || this.hogar == true || this.tecnologia == true){
      this.motor = false;
      this.hogar = false;
      this.tecnologia = false;
    }
    this.inmobiliaria = true;
    this.categoria_Seleccionada = true;
  }

  categoria_Tecnologia() : void {
    if(this.motor == true || this.hogar == true || this.inmobiliaria == true){
      this.motor = false;
      this.hogar = false;
      this.inmobiliaria = false;
    }
    this.tecnologia = true;
    this.categoria_Seleccionada = true;
  }

  insertar() {
    if(this.hogar){
       let artHogar : IArticulo = {
          "id" : this.numElementos + 1,
          "id_usuario" : this._productoService.usuarioKey,
          "nombre" : this.nombre,
          "precio" : this.precio,
          "descripcion" : this.descripcion,
          "categoria" : "hogar"
       };
       this._productoService.insertarProducto(artHogar);
    } else if (this.tecnologia){
        let artTecnologia : ITecnologia = {
          "id" : this.numElementos + 1,
          "id_usuario" : this._productoService.usuarioKey,
          "nombre" : this.nombre,
          "precio" : this.precio,
          "descripcion" : this.descripcion,
          "estado" : this.estado,
          "categoria" : "tecnologia"
        };
        this._productoService.insertarProducto(artTecnologia);
    } else if(this.inmobiliaria){
        let artInmobiliaria : IInmobiliaria = {
          "id" : this.numElementos + 1,
          "id_usuario" : this._productoService.usuarioKey,
          "nombre" : this.nombre,
          "precio" : this.precio,
          "descripcion" : this.descripcion,
          "metros_cuadrados" : this.metros_cuadrados,
          "banyos" : this.banyos,
          "habitaciones" : this.habitaciones,
          "localidad" : this.localidad,
          "categoria" : "inmobiliaria"         
        };
        this._productoService.insertarProducto(artInmobiliaria);
    } else if(this.motor) {
        let artMotor : IMotor = {
          "id" : this.numElementos + 1,
          "id_usuario" : this._productoService.usuarioKey,
          "nombre" : this.nombre,
          "precio" : this.precio,
          "descripcion" : this.descripcion,
          "tipo_vehiculo" : this.tipo_vehiculo,
          "km" : this.km,
          "anyo" : this.anyo,
          "categoria" : "motor"     
        };
        this._productoService.insertarProducto(artMotor);        
    }
  }
}
