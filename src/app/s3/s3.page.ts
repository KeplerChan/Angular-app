import { Component, OnInit, Input} from '@angular/core';
import { Router } from '@angular/router';  

@Component({
  selector: 'apps3',
  templateUrl: './s3.page.html',
  styleUrls: ['./s3.page.scss'],
})

export class S3Page implements OnInit {

  ob:Array<{activityTime: number,
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
        distance:        this.gaussianRandom(8100, 500),
        duration:      this.gaussianRandom(42*60+16,5*60),
        pacing:        1,
        stride:      this.gaussianRandom(1.1,0.5),
        steps:          1,
        calories:        723,
        cadence:     1 }
      this.ob = this.ob.concat(a)

    }
  }
  gaussianRandom(mean=0, stdev=1) {
    let u = 1 - Math.random(); // Converting [0,1) to (0,1]
    let v = Math.random();
    let z = Math.sqrt( -2.0 * Math.log( u ) ) * Math.cos( 2.0 * Math.PI * v );
    // Transform to the desired mean and standard deviation:
    return z * stdev + mean;
  }
  ngOnInit() {
  }
  goBack() {  
    this.router.navigate(['home']);  
  }  
}