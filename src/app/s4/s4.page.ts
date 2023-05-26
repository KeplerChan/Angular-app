import { Component } from '@angular/core';
import { Router } from '@angular/router';  

@Component({
  selector: 'app-s4',
  templateUrl: './s4.page.html',
  styleUrls: ['./s4.page.scss'],
})
export class S4Page {

  constructor(private router: Router) { }

  goBack() {  
    this.router.navigate(['s3']);  
  } 
}
