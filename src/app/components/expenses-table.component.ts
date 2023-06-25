import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Expense } from '../types/expense';
import { Store } from '@ngrx/store';
import { expenseActions } from '../store/expenses/expenses.actions';

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
              <tr *ngFor="let expense of expenses" class="hover:bg-gray-100">
                <th>{{ expense.date | date}}</th>
                <td>{{ expense.description  }}</td>
                <td>{{ expense.price | currency:'USD':true }}</td>
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
  expenses: Expense[] = [
    {
      id: "asdf1",
      date: '2023-06-21',
      description: 'Panaderia',
      price: 450,
    },
    {
      id: "asdf2",
      date: '2023-06-22',
      description: 'Verdulería',
      price: 1450,
    },
    {
      id: "asdf3",
      date: '2023-06-23',
      description: 'Supermercado',
      price: 3274,
    },
    {
      id: "asdf4",
      date: '2023-06-24',
      description: 'Paddel',
      price: 950,
    }

  ];

  constructor(private readonly store: Store) { }

  onDelete(id: string) {
    this.store.dispatch(expenseActions.deleteExpense({ id }));
  }

}
