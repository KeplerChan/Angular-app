import { Component, OnInit, Input} from '@angular/core';
import { Router } from '@angular/router';  

@Component({
  selector: 'apps3',
  templateUrl: './s3.page.html',
  styleUrls: ['./s3.page.scss'],
})

export class S3Page implements OnInit {
  
  constructor(private router: Router){

  }

  ngOnInit() {
  }
  goBack() {  
    this.router.navigate(['home']);  
  }  
}
