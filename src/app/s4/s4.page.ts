import { Component, Input,OnInit } from '@angular/core';
import { Router } from '@angular/router';  

@Component({
  selector: 'app-s4',
  templateUrl: './s4.page.html',
  styleUrls: ['./s4.page.scss']
})
export class S4Page {
  @Input() rs: string ="a";

  constructor(private router: Router) { 
    console.log("s4 constructor");
    console.log(this.rs);
  }

  goBack() {  
    this.router.navigate(['s3']);  
  } 
}
