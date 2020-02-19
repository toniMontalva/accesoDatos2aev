import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../services/producto.service';
import { IArticulo, ITecnologia, IInmobiliaria, IMotor , IBusqueda} from '../interfaces';

@Component({
  selector: 'app-search-product',
  templateUrl: './search-product.page.html',
  styleUrls: ['./search-product.page.scss'],
})
export class SearchProductPage implements OnInit {

  valorIntroducido: string = "";
  productos : (IArticulo | ITecnologia | IInmobiliaria | IMotor)[] = [];
  constructor(private _productoService : ProductoService) { }

  ngOnInit() {
  }

  buscarProducto() {
      this._productoService.getProductosPorNombre(this.valorIntroducido);
      this.productos = this._productoService.productosFiltradosBusqueda;      
      this._productoService.insertarBusqueda(this.valorIntroducido);
      this.valorIntroducido = "";
  }

}
