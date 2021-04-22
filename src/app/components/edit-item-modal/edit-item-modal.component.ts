import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BudgetItem } from 'src/app/models/budget-item.model';
import { BudgetService } from 'src/app/services/budget.service';

@Component({
  selector: 'app-edit-item-modal',
  templateUrl: './edit-item-modal.component.html',
  styleUrls: ['./edit-item-modal.component.css']
})
export class EditItemModalComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<EditItemModalComponent>,
    @Inject(MAT_DIALOG_DATA) public item: BudgetItem,
    public service: BudgetService) { 
      this.service.initializeFormGroup(this.item)
      console.log('item:', this.item);
    }

  ngOnInit(): void {
  }

  onSubmit() {
    this.service.updateItem(this.service.form.value)
    this.service.form.reset();
    this.dialogRef.close();
  }
}
