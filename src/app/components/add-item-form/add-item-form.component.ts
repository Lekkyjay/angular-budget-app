import { Component, OnInit } from '@angular/core';
import { BudgetService } from 'src/app/services/budget.service';

@Component({
  selector: 'app-add-item-form',
  templateUrl: './add-item-form.component.html',
  styleUrls: ['./add-item-form.component.css']
})

export class AddItemFormComponent implements OnInit {

  isNewItem: boolean = true

  constructor(public service: BudgetService) { }

  ngOnInit(): void {
    this.service.resetFormGroup()
  }

  onSubmit() {
    this.service.addItem(this.service.form.value)
    this.service.resetFormGroup()
    // console.log(this.service.form.value);
  }

}
