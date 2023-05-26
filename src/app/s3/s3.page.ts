import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
@Component({
  selector: 'app-s3',
  templateUrl: './s3.page.html',
  styleUrls: ['./s3.page.scss'],
})

export class S3Page implements OnInit {
  ob: Array<{activityTime: number,
    distance:      number,
    pacing:       number,
    duration:     number,
    stride:         number,
    steps:        number,
    calories:     number,
    cadence:       number}>;
  constructor() {
    this.ob = Array(9).fill(RunningRecord); 
  }

  ngOnInit() {
  }

}

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