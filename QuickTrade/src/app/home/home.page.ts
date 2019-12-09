import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  hogar : boolean = false;
  motor: boolean = false;
  inmobiliaria : boolean = false;
  tecnologia : boolean = false;
  categoria_Seleccionada : boolean = false;

  constructor() {}

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
}
