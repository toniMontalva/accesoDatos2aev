import { Component } from '@angular/core';
import { IArticulo, ITecnologia, IInmobiliaria, IMotor } from '../interfaces';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  /*hogar : boolean = false;
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

  articulos : (IArticulo | ITecnologia | IInmobiliaria | IMotor)[] = [];*/

  constructor() {}

  /*categoria_Hogar() : void {
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
          "id" : this.articulos.length+1,
          "precio" : this.precio,
          "descripcion" : this.descripcion,
          "categoria" : "hogar"
       };
       this.articulos.push(artHogar);
    } else if (this.tecnologia){
        let artTecnologia : ITecnologia = {
          "id" : this.articulos.length+1,
          "precio" : this.precio,
          "descripcion" : this.descripcion,
          "estado" : this.estado,
          "categoria" : "tecnologia"
        };
        this.articulos.push(artTecnologia);
        //console.log(artTecnologia.estado);
    } else if(this.inmobiliaria){
        let artInmobiliaria : IInmobiliaria = {
          "id" : this.articulos.length+1,
          "precio" : this.precio,
          "descripcion" : this.descripcion,
          "metros_cuadrados" : this.metros_cuadrados,
          "banyos" : this.banyos,
          "habitaciones" : this.habitaciones,
          "localidad" : this.localidad,
          "categoria" : "inmobiliaria"         
        };
        this.articulos.push(artInmobiliaria);
    } else if(this.motor) {
        let artMotor : IMotor = {
          "id" : this.articulos.length+1,
          "precio" : this.precio,
          "descripcion" : this.descripcion,
          "tipo_vehiculo" : this.tipo_vehiculo,
          "km" : this.km,
          "anyo" : this.anyo,
          "categoria" : "motor"     
        };
        this.articulos.push(artMotor);
        //console.log(artMotor.tipo_vehiculo);
    }

    console.log("Añadido articulo");    
  
  } */
}
