import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
import { S4Page } from '../s4/s4.page'; 

@Component({
  selector: 'app-s3',
  templateUrl: './s3.page.html',
  styleUrls: ['./s3.page.scss']
})

export class S3Page implements OnInit {

  runningRecords:Array<{
    activitydate: string,
    activitytime: string,
    distance: number,
      pacing: number,
    duration: number,
      stride: number,
       steps: number,
    calories: number,
     cadence: number}>;
  constructor(private router: Router) {
    console.log("s3 constructor");
    this.runningRecords = Array(0).fill(null);
    for (let i = 0,now = new Date(); i < 30/*adjust the number of records here*/ ; i++) { 
      let dist = this.gaussianRandom(8100, 500), 
      dura = this.gaussianRandom(42*60+16,5*60),
      step = this.gaussianRandom(7583, 200);
      let
      hour = now.toLocaleString('en-GB', {hour: '2-digit'}),
      minute = now.toLocaleString('en-GB', {minute: '2-digit'}),
      ampm = (+hour >12) ? "pm" : "am", 
      hourn = (+hour >12) ? +hour - 12 : +hour;
      let nextrecord = {
      activitydate: this.formatDate(now),
      activitytime: [hourn.toString(),("0"+minute).slice(-2)].join(":")+ampm,
      distance:        dist, /* unit:meter*/
      duration:      dura, /* unit: second*/
      pacing:       dura/dist, /* unit:second per meter*/
      steps:          step, /* unit: null*/
      stride:     dist/step, /* unit: meter*/
      calories:        723, /* kcal*/
      cadence:     step/dura /* unit:steps  per second*/
      } 
      this.runningRecords = this.runningRecords.concat(nextrecord)
      now.setDate(now.getDate() - 1);

    }
  }

  formatDate(date = new Date()) {
    const year = date.toLocaleString('en-GB', {year: 'numeric'});
    const month = date.toLocaleString('en-GB', {month: '2-digit'});
    const day = date.toLocaleString('en-GB', {day: '2-digit'});
  
    return [year, month, day].join('/');
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
    const url = this.router.serializeUrl(this.router.createUrlTree(['home']));
    window.open(url, '_self');
  } 
  checkDetails(i:number){
    const url = this.router.serializeUrl(this.router.createUrlTree(['s4'], { 
      queryParams: { 
        activitydate: this.runningRecords[i].activitydate,
        activitytime: this.runningRecords[i].activitytime ,
        distance: this.runningRecords[i].distance,
        duration: this.runningRecords[i].duration,
        pacing: this.runningRecords[i].pacing,
        stride: this.runningRecords[i].stride,
        steps: this.runningRecords[i].steps,
        calories: this.runningRecords[i].calories,
        cadence: this.runningRecords[i].cadence} }));
    window.open(url, '_self');
    /*this.router.navigate(['s4']);*/
  }
}
