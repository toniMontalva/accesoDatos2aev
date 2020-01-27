import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductoService } from '../services/producto.service';
import { IArticulo, IInmobiliaria, IMotor, ITecnologia } from '../interfaces';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.page.html',
  styleUrls: ['./product-details.page.scss'],
})
export class ProductDetailsPage implements OnInit {

  id : number;
  producto : (IArticulo | IInmobiliaria | IMotor | ITecnologia);
  hogar : boolean = false;
  tecnologico : boolean = false;
  motor : boolean = false;
  inmobiliario : boolean = false;  

  constructor(private _productoService : ProductoService, private _activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.id = +this._activatedRoute.snapshot.paramMap.get('id');
    this.producto = this._productoService.getProductosPorID(this.id);

    if(this.producto.categoria.toLowerCase() === "motor"){
      this.motor = true;
    } else if(this.producto.categoria.toLowerCase() === "tecnologia") {
      this.tecnologico = true;
    } else if(this.producto.categoria.toLowerCase() === "inmobiliaria") {
      this.inmobiliario = true;
    } else {
      this.hogar = true;
    }
  }

}
