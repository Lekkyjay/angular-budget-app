import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BudgetItem } from 'src/app/models/budget-item.model';
import { BudgetService } from 'src/app/services/budget.service';
import { EditItemModalComponent } from '../edit-item-modal/edit-item-modal.component';

@Component({
  selector: 'app-budget-item-card',
  templateUrl: './budget-item-card.component.html',
  styleUrls: ['./budget-item-card.component.css']
})
export class BudgetItemCardComponent implements OnInit {

  @Input() item: BudgetItem;

  constructor(private service: BudgetService, private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  onEdit(item) {
    const dialogRef = this.dialog.open(EditItemModalComponent, {width: '580px', data: item });

    dialogRef.afterClosed().subscribe(result => {
      console.log('dialog closed', result);      
    })
  }

  onDelete(item) {
    this.service.deleteItem(item)
  }

}
