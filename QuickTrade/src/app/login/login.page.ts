import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../services/producto.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  //user_name : string;

  constructor(private _productoService : ProductoService) { }

  ngOnInit() {
    this._productoService.guardarProductos();
  }

  saveLoggedUser(user_name : string) {
    let res = this._productoService.getLoggedUser(user_name);
  }

}
