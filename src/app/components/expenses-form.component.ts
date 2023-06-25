import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { expenseActions } from '../store/expenses/expenses.actions';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-expenses-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <div class="card bg-white text-white-content self-center shadow">
      <div class="card-body items-center text-center">
        <h2 class="card-title">Add New Expense</h2>
        <form [formGroup]="form" (submit)="onAdd()">
          <!-- Date -->
          <div class="form-control w-full max-w-xs">
            <label class="label">
              <span class="label-text">Date</span>
            </label>
            <input formControlName="date" type="date" placeholder="Supermarket" class="input input-bordered w-full max-w-xs" />
          </div>
          <!-- Description -->
          <div class="form-control w-full max-w-xs">
            <label class="label">
              <span class="label-text">Description</span>
            </label>
            <input formControlName="description" type="text" placeholder="Ex: Supermarket" class="input input-bordered w-full max-w-xs" />
          </div>
          <!-- Price -->
          <div class="form-control w-full max-w-xs">
            <label class="label">
              <span class="label-text">Price</span>
            </label>
            <input formControlName="price" type="number" placeholder="Ex: 150" class="input input-bordered w-full max-w-xs" />
          </div>
          <!-- Add -->
          <div class="mt-2">
            <button class="btn btn-block btn-neutral" [disabled]="!form.valid">Add</button>
          </div>
        </form>
      </div>
    </div>
  `,
})
export class ExpensesFormComponent {
  protected form = this.fb.nonNullable.group({
    date: ['', Validators.required],
    description: ['', Validators.required],
    price: [0, Validators.required],
  });

  constructor(
    private readonly fb: FormBuilder,
    private readonly store: Store
  ) { }

  onAdd() {
    const value = this.form.getRawValue();
    this.store.dispatch(expenseActions.addExpense(value));
  }

}
