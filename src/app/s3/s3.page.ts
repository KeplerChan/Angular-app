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
    for (let i = 0; i < 10; i++) {
      let dist = this.gaussianRandom(8100, 500), dura = this.gaussianRandom(42*60+16,5*60), stri = this.gaussianRandom(1.1,0.5);
      let nextrecord = {
      activityTime: i,
      distance:        dist/1000, /* unit:km*/
      duration:      dura/60, /* unit:min*/
      pacing:       dura/60 /dist*1000, /* unit:min per km*/
      stride:     stri, /* unit:meter*/
      steps:          dist/stri, /* unit: null*/
      calories:        723, /* kcal*/
      cadence:     dist/stri/dura*60 /* unit:steps  per min*/
      } 
      this.ob = this.ob.concat(nextrecord)
    }
  }
  gaussianRandom(mean=0, stdev=1) {
    let u = 1 - Math.random(); // Converting [0,1) to (0,1]
    let v = Math.random();
    let z = Math.sqrt( -2.0 * Math.log( u ) ) * Math.cos( 2.0 * Math.PI * v );
    return z * stdev + mean;
  }

  ngOnInit() {
  }
  goBack() {  
    this.router.navigate(['home']);  
  } 
  goS4(){
    
  }
}