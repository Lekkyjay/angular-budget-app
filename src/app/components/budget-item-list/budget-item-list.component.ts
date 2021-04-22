import { Component, OnInit } from '@angular/core';
import { BudgetItem } from 'src/app/models/budget-item.model';
import { BudgetService } from 'src/app/services/budget.service';

@Component({
  selector: 'app-budget-item-list',
  templateUrl: './budget-item-list.component.html',
  styleUrls: ['./budget-item-list.component.css']
})
export class BudgetItemListComponent implements OnInit {

  budgetItems: BudgetItem[] = []
  
  constructor(private service: BudgetService) { }

  ngOnInit(): void {
    // this.service.budgetItems$.subscribe(items => {
    //   this.budgetItems = items
    //   this.budgetItems = this.service.items
    // })
    //This works without observable because angular's change detection mechnism detects eventhandler.
    //This getItems is initiated by a click event and angular follow tru and updates the template
    this.budgetItems = this.service.getItems()  
  }

}
