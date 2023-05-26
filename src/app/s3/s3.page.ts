import { Component, OnInit, Input} from '@angular/core';
import { Router } from '@angular/router';  

@Component({
  selector: 's3',
  templateUrl: './s3.page.html',
  styleUrls: ['./s3.page.scss'],
})

export class S3Page implements OnInit {
  ob:Array<{
    activityTime: number,
    distance: number,
      pacing: number,
    duration: number,
      stride: number,
       steps: number,
    calories: number,
     cadence: number}>;
  constructor(private router: Router) {
    console.log("hi")
    this.ob = Array(0).fill(null);
    for (let i = 0; i < 10000; i++) {
      let a = {
      activityTime: i,
      distance:        1,
      duration:      1,
      pacing:        1,
      stride:     1,
      steps:          1,
      calories:        1,
      cadence:     1 }
      this.ob = this.ob.concat(a)
      }
  }

  



  ngOnInit() {
  }
  goBack() {  
    this.router.navigate(['home']);  
  }  
}