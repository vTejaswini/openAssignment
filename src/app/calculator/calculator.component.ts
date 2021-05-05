import { Component, OnInit } from '@angular/core';
import { Options} from '@angular-slider/ngx-slider';
// import { fa fa  } from '@fortawesome/fontawesome-svg-core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  disabled = false;
  invert = false;
  // max = 300000;
  // min = 100000;
  value = 0;
  value1 = 0;
  constructor() { }

  ngOnInit(): void {
  }
  // title = 'ngx-slider';
  options: Options = {
      floor: 100000,
      ceil: 300000
  };
  options1: Options = {
    disabled: false,
    hidePointerLabels: true,
    hideLimitLabels : true,
    minLimit: 10000,
    maxLimit:50000,
    ceil:50000
};


}
