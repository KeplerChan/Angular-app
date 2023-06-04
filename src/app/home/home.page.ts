import { Component } from '@angular/core';
import { Router } from '@angular/router';  
import { NavController , AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {  


  username:string;
  password:string;
  constructor(private router: Router,
    public navCtrl: NavController,
    private alertController: AlertController) {
      this.username = "";
      this.password = "";
    }  

  login() {  
    
    if (this.username == "innpression" && this.password == "pw123"){ 
      const url = this.router.serializeUrl(this.router.createUrlTree(['s3']));
      window.open(url, '_self');
    
    }
    
    else{
      this.presentAlert();
    }
    
    
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Error',
      message: 'Username or password is incorrect',
      buttons: ['OK'],
    });

    await alert.present();
  }

}  