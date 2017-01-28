import { Component } from '@angular/core';
import { GoalService } from './goal.service'

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  //styleUrls: ['./app.component.css']
})
export class HomeComponent {
  constructor(private goalService: GoalService){}
  title = 'Angular Hack Day @Google!';
 }
