import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  ob:Array<{activityTime: number,
    distance:      number,
    pacing:       number,
    duration:     number,
    stride:         number,
    steps:        number,
    calories:     number,
  cadence:       number}>;
  constructor() {
    this.ob = Array(10000).fill({
      activityTime: 1,
      distance:      this.gaussianRandom(8100, 500),
      duration:       this.gaussianRandom(42*60+16,5*60),
      pacing:     1,
    stride:         this.gaussianRandom(1.1,0.5),
    steps:        1,
    calories:     723,
    cadence:       1
    });
  }
  gaussianRandom(mean=0, stdev=1) {
    let u = 1 - Math.random(); // Converting [0,1) to (0,1]
    let v = Math.random();
    let z = Math.sqrt( -2.0 * Math.log( u ) ) * Math.cos( 2.0 * Math.PI * v );
    // Transform to the desired mean and standard deviation:
    return z * stdev + mean;
  }
}
