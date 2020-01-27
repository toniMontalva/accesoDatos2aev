import { Component, OnInit } from '@angular/core';
import { IArticulo, ITecnologia, IInmobiliaria, IMotor} from '../interfaces';
import { ProductoService } from '../services/producto.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.page.html',
  styleUrls: ['./listado.page.scss'],
})
export class ListadoPage implements OnInit {

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

  constructor(private _productoService : ProductoService) { }

  ngOnInit() {    
    //this._productoService.productos = [];
    //this._productoService.guardarProductos();
    this.productos = this._productoService.productos;
  }

}
