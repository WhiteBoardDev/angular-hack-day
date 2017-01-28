import { Component } from '@angular/core';

@Component({
  selector: 'data-binding',
  templateUrl: './databinding.component.html',

  //styleUrls: ['./app.component.css']
})
export class DataBindingComponent {
  controllerNumber=0;
  firstNumber=1;
  secondNumber=2;


  incrementControllerNumber(){
    this.controllerNumber++;
  }
}
