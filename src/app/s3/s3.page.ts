import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';  

@Component({
  selector: 'app-s3',
  templateUrl: './s3.page.html',
  styleUrls: ['./s3.page.scss']
})

export class S3Page implements OnInit {



  @Input()  ap = '';

  ll = "ok";

  ob:Array<{
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
    this.ob = Array(0).fill(null);
    for (let i = 0,now = new Date(); i < 30/*adjust the number of records here*/ ; i++) { 
      let dist = this.gaussianRandom(8100, 500), 
      dura = this.gaussianRandom(42*60+16,5*60), 
      stri = this.gaussianRandom(1.1,0.5);
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
      stride:     stri, /* unit:meter*/
      steps:          dist/stri, /* unit: null*/
      calories:        723, /* kcal*/
      cadence:     dist/stri/dura /* unit:steps  per second*/
      } 
      this.ob = this.ob.concat(nextrecord)
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
    this.router.navigate(['home']);  
  } 
  checkDetails(){

    this.router.navigate(['s4'])
  }
}