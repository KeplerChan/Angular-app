import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
@Component({
  selector: 'app-s3',
  templateUrl: './s3.page.html',
  styleUrls: ['./s3.page.scss'],
})

export class S3Page implements OnInit {

  constructor() { 
  }

  ngOnInit() {
  }

}
/*
export class runningRecord {
  /* https://stackoverflow.com/questions/25582882/javascript-math-random-normal-distribution-gaussian-bell-curve *
  gaussianRandom(mean=0, stdev=1) {
    let u = 1 - Math.random(); // Converting [0,1) to (0,1]
    let v = Math.random();
    let z = Math.sqrt( -2.0 * Math.log( u ) ) * Math.cos( 2.0 * Math.PI * v );
    // Transform to the desired mean and standard deviation:
    return z * stdev + mean;
  }

  runningRecord: RunningRecord = {
    activityTime: Date.now();
    distance: gaussianRandom(mean=8100, stdev=500);/* in unit of meters/
    duration: gaussianRandom(mean=42*60+16, stdev=5*60);
    pacing: duration/distance;
    stride:  gaussianRandom(mean=1.1, stdev=0.5)
    steps: Math.floor(distance/Stride);
    calories: 723;
    cadence: steps/(duration/60);

  }
}


export class RunningRecord {

  activityTime: number;
  distance:     number;
  duration:      number;
  pacing:       number;
  duration:     number;
  stride         number;
  steps:        number;
  calories:     number;
  cadence       number;
  
}
*/
export class RunningRecord {

  gaussianRandom(mean=0, stdev=1) {
    let u = 1 - Math.random(); // Converting [0,1) to (0,1]
    let v = Math.random();
    let z = Math.sqrt( -2.0 * Math.log( u ) ) * Math.cos( 2.0 * Math.PI * v );
    // Transform to the desired mean and standard deviation:
    return z * stdev + mean;
  }

  activityTime: number;
  distance:      number;
  pacing:       number;
  duration:     number;
  stride:         number;
  steps:        number;
  calories:     number;
  cadence:       number;
  
  constructor() {
    this.activityTime = 1;
    this.distance= this.gaussianRandom(8100, 500);
    this.duration= this.gaussianRandom(42*60+16,5*60);
    this.pacing = this.duration/this.distance;
    this.stride=  this.gaussianRandom(1.1,0.5);
    this.steps = Math.floor(this.distance/this.stride);
    this.calories = 723
    this.cadence =  this.steps/(this.duration/60);

   }
}