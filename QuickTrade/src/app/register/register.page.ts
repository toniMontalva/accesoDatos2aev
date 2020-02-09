import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

    username : string = ""
    password : string = ""
    cpassword : string = ""

    constructor(public afAuth: AngularFireAuth, public toastController: ToastController, private router: Router) { }

    ngOnInit() {
    }

    async presentToastConfirmed() {
      const toast = await this.toastController.create({
        message: 'Usuario registrado.',
        duration: 2000
      });
      toast.present()
    }

    async presentToastPassDontMatch() {
      const toast = await this.toastController.create({
        message: 'Las contraseñas no coinciden',
        duration: 2000
      });
      toast.present()
    }

    async register() {
      const { username, password, cpassword } = this

      if(password !== cpassword) {
        this.presentToastPassDontMatch();
      }
      
      try {
        const res = await this.afAuth.auth.createUserWithEmailAndPassword(username + '@gmail.com', password);
        this.presentToastConfirmed();
        this.router.navigateByUrl('/login');
      } catch(err) {
          console.dir(err)
      }
      
    }

}
