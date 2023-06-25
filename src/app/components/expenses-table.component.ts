import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { expenseActions } from '../store/expenses/expenses.actions';
import { selectExpenses } from '../store/expenses/expenses.selectors';

@Component({
  selector: 'app-expenses-table',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="card bg-white text-white-content shadow">
      <div class="card-body items-center">

        <div class="overflow-x-auto">
          <table class="table">
            <!-- head -->
            <thead>
              <tr>
                <th>Date</th>
                <th>description</th>
                <th>Amount</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr *ngFor="let expense of expenses | async" class="hover:bg-gray-100">
                <th>{{ expense.date | date}}</th>
                <td>{{ expense.description  }}</td>
                <td>{{ expense.price | currency:'USD':'symbol-narrow' }}</td>
                <td>
                  <button class="btn btn-secondary btn-xs" (click)="onDelete(expense.id)">delete</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

      </div>
    </div>
  `,
})
export class ExpensesTableComponent {
  protected expenses = this.store.select(selectExpenses);

  constructor(private readonly store: Store) { }

  onDelete(id: string) {
    this.store.dispatch(expenseActions.deleteExpense({ id }));
  }

}
