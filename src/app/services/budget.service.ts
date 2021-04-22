import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BudgetItem } from '../models/budget-item.model';
import { v4 as uuidv4 } from 'uuid';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BudgetService {

  total: number = 0

  //This turns out to be uneccessary.
  // private budgetItems = new BehaviorSubject<BudgetItem[]>([])
  // budgetItems$ = this.budgetItems.asObservable()

  private budgetTotal = new BehaviorSubject<number>(null)
  budgetTotal$ = this.budgetTotal.asObservable()

  items = [
    {id: '1', description: 'Web design', amount: 550},
    {id: '2', description: 'Farm products', amount: 550},
    {id: '3', description: 'Ecommerce Training', amount: 550},
    {id: '4', description: 'Travel', amount: -550},
    {id: '5', description: 'Shopping', amount: -550}
  ]

  constructor() { }

  form: FormGroup = new FormGroup({
    id: new FormControl(null),
    amount: new FormControl('', Validators.required),
    description: new FormControl('', Validators.email),
  });

  resetFormGroup() {
    this.form.setValue({
      id: null,
      amount: '',
      description: '',
    });
  }

  initializeFormGroup(item: BudgetItem) {
    this.form.setValue({
      id: item.id,
      amount: item.amount,
      description: item.description,
    });
  }

  getItems() {
    return this.items
  }

  addItem(item) {
    this.items.push({
      id: uuidv4(),
      amount: item.amount,
      description: item.description,
    });
    // this.budgetItems.next(this.items)      //This turns out to be uneccessary.
    this.getTotal()
  }

  updateItem(item) {
    const objIndex = this.items.findIndex((obj => obj.id == item.id))
    this.items[objIndex] = item
    // this.budgetItems.next(this.items)
    this.getTotal()
  }

  deleteItem(item) {
    let index = this.items.indexOf(item);
    this.items.splice(index, 1);
    // this.budgetItems.next(this.items)
    this.getTotal()
  }

  getTotal() {
    this.total = this.items.reduce((acc, curr) => acc + curr.amount, 0)
    this.budgetTotal.next(this.total)
    return this.total
  }

}
