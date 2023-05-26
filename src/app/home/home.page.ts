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
    /*
    if (this.username == "solos" && this.password == "pw123"){ */
      this.router.navigate(['s3']); 
    /*
    }
    else{
      this.presentAlert();
    }
    */
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Error',
      message: 'Username or password is incorrect',
      buttons: ['OK'],
    });

    await alert.present();
  }
  
  /*https://www.javatpoint.com/ionic-navigation-and-routing*/

}  