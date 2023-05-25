import { Component } from '@angular/core';
import { Router } from '@angular/router';  

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {  
  constructor(private router: Router) {}  
  
  gotoS3() {  
    this.router.navigate(['s3']);  
  }  /*https://www.javatpoint.com/ionic-navigation-and-routing*/

}  