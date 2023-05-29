import { Component, Input,OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';  

@Component({
  selector: 'app-s4',
  templateUrl: './s4.page.html',
  styleUrls: ['./s4.page.scss']
})
export class S4Page implements OnInit {  

  activitydate= '';
    activitytime= '';
    distance= 0;
      pacing= 0;
    duration= 0;
      stride= 0;
       steps= 0;
    calories= 0;
     cadence= 0;
  constructor(private router: Router,
    private route: ActivatedRoute) { 
    console.log("s4 constructor");
  }
  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.activitydate = params['activitydate'];
      this.activitytime = params['activitytime'];
      this.distance = params['distance']
      this.pacing = params['pacing']
      this.duration = params['duration']
      this.stride = +(params['stride']*10).toFixed(0)/10
      this.steps = +(params['steps']/10).toFixed(1)*10
      this.calories = params['calories']
      this.cadence = params['cadence']
    });
  }
  goBack() {  
    const url = this.router.serializeUrl(this.router.createUrlTree(['s3']));
    window.open(url, '_self');
  } 
}