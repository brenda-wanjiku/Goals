import { Component, OnInit, Output, EventEmitter  } from '@angular/core'; 
import { HttpClient } from '@angular/common/http';
import { Quote } from '../quote-class/quote';
import { GoalService } from '../goal-service/goal.service';
import { AlertService } from '../alert-service/alert.service';
import { Goal } from '../goal';
import { QuoteRequestService } from '../quote-http/quote-request.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css'],
  providers :[GoalService, AlertService]
})
export class GoalComponent implements OnInit {


  goals:Goal[];
  alertService:AlertService;
  quote:Quote;

  
  goToUrl(id){
    this.router.navigate(['/goals',id])
  } /** toggle function */

  /**completeGoal(isComplete, index){
    if (isComplete) {
      this.goals.splice(index,1);
    }
  } 
      --- removes goal if accomplished -----  
  */

 deleteGoal(index){
  let toDelete = confirm(`Are you sure you want to delete ${this.goals[index].name}`)

  if (toDelete){
    this.goals.splice(index,1)
    this.alertService.alertMe("Goal has been deleted")
  }
}

addNewGoal(goal){
  let goalLength = this.goals.length;
  goal.id = goalLength+1;
  goal.completeDate = new Date(goal.completeDate)
  this.goals.push(goal) /** form adds new goals */
}

constructor( goalService : GoalService, alertService:AlertService, private http:HttpClient, private quoteService:QuoteRequestService, private router:Router) {
  this.goals = goalService.getGoals()
  this.alertService = alertService;
}


  ngOnInit() {
    this.quoteService.quoteRequest()
    this.quote = this.quoteService.quote
  }




}


