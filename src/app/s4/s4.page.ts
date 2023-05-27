import { Component, Input} from '@angular/core';
import { Router } from '@angular/router';  

@Component({
  selector: 'apps4',
  templateUrl: './s4.page.html',
  styleUrls: ['./s4.page.scss']
})
export class S4Page {

  @Input() runningsummary = 'hi';

  constructor(private router: Router) { }

  goBack() {  
    this.router.navigate(['s3']);  
  } 
}
