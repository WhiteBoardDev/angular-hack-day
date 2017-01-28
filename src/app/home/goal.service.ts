import { Goal } from './goal'
import { Injectable } from '@angular/core';

@Injectable()
export class GoalService {

  getGoals(): Goal[]{

    return  [
      { completed: true, description: 'Make a form'},
      { completed: true, description: 'Mess around with routing'},
      { completed: false, description: 'Maybe make a web service call?'},
      { completed: false, description: 'firebase?'},
    ];
  }
}
