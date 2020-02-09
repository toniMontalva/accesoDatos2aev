import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../services/producto.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  username : string = "";
  password: string = "";

  constructor(private _productoService : ProductoService, public afAuth: AngularFireAuth, public toastController: ToastController, private router: Router) { }

  ngOnInit() {
    this._productoService.guardarProductos();
  }

  async presentToastUserNotFound() {
    const toast = await this.toastController.create({
      message: 'Usuario no encontrado',
      duration: 2000
    });
    toast.present()
  }

  async presentToastIncorrectPassword() {
    const toast = await this.toastController.create({
      message: 'Contraseña Incorrecta',
      duration: 2000
    });
    toast.present()
  }

  async presentToastWelcomeUser() {
    const toast = await this.toastController.create({
      message: '¡Hola ' + this.username + "!",
      duration: 2000
    });
    toast.present()
  }

  saveLoggedUser() {
    //let res = this._productoService.getLoggedUser(this.username);    
    this._productoService.getLoggedUserFirebase();
  }

  goToHomePage() {
    this.saveLoggedUser();
    this.presentToastWelcomeUser();
    this.router.navigateByUrl('/home');
  }

  async login() {
    const { username, password} = this;
    try {
      const res = await this.afAuth.auth.signInWithEmailAndPassword(username + '@gmail.com', password);
      this.goToHomePage();
    } catch(err) {
        console.dir(err)
        if(err.code === "auth/user-not-found") {
          this.presentToastUserNotFound();
        } else if(err.code === "auth/wrong-password") {
          this.presentToastIncorrectPassword();
        }
    }
  }

}
