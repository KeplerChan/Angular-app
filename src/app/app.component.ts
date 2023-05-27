import { Component, Input} from '@angular/core';
import { S3Page } from './s3/s3.page';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

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
  constructor() {
    console.log("hi")
    this.ob = Array(0).fill(null);
    for (let i = 0; i < 10; i++) {    /*adjust the number of records here*/ 
      let dist = this.gaussianRandom(8100, 500), dura = this.gaussianRandom(42*60+16,5*60), stri = this.gaussianRandom(1.1,0.5);
      let nextrecord = {
      activitydate: this.formatDate(),
      activitytime: "9:00am",
      distance:        dist, /* unit:meter*/
      duration:      dura, /* unit: second*/
      pacing:       dura/dist, /* unit:second per meter*/
      stride:     stri, /* unit:meter*/
      steps:          dist/stri, /* unit: null*/
      calories:        723, /* kcal*/
      cadence:     dist/stri/dura /* unit:steps  per second*/
      } 
      this.ob = this.ob.concat(nextrecord)
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


}
