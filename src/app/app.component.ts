import { Component, OnInit } from '@angular/core';
import { BudgetService } from './services/budget.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {

  total: number
  
  constructor(private service: BudgetService) { }

  ngOnInit(): void {
    this.total = this.service.getTotal()    //this gets initial total value when page first loads
    this.service.budgetTotal$.subscribe(total => this.total = total)  //This reacts to later value updates
  }
  
}
