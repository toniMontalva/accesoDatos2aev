import { Component, OnInit } from '@angular/core';
import {IArticulo, ITecnologia, IMotor, IInmobiliaria} from '../interfaces';
import { ProductoService } from '../services/producto.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-user-products',
  templateUrl: './user-products.page.html',
  styleUrls: ['./user-products.page.scss'],
})
export class UserProductsPage implements OnInit {

  productos : (IArticulo | ITecnologia | IInmobiliaria | IMotor)[] = [];

  constructor(private _productoService : ProductoService, public toastController: ToastController) { }

  ngOnInit() {
    this._productoService.productosByUser = [];
    this._productoService.getProductsByUser();
    this.productos = this._productoService.productosByUser;   
  }

  showMotor() {
    this.refrescarArray();
    this.productos = this.productos.filter(x => x.categoria === 'motor');
  }

  showHogar() {
    this.refrescarArray();
    this.productos = this.productos.filter(x => x.categoria === 'hogar');
  }

  showInmobiliaria() {
    this.refrescarArray();
    this.productos = this.productos.filter(x => x.categoria === 'inmobiliaria');
  }

  showTecnologia() {
    this.refrescarArray();
    this.productos = this.productos.filter(x => x.categoria === 'tecnologia');
  }

  refrescarArray() {
    this.productos = this._productoService.productosByUser;
  }

  borrarArticulo(id : number) {
    this._productoService.borrarArticulo(id);
    this.presentToastProductListing();
    this.refrescarArray();
  }

  async presentToastProductListing() {
    const toast = await this.toastController.create({
      message: 'Articulo borrado',
      duration: 2000
    });
    toast.present()
  }

}
