import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

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
                <th>Detail</th>
                <th>Amount</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr *ngFor="let expense of expenses" class="hover:bg-gray-100">
                <th>{{ expense.date | date}}</th>
                <td>{{ expense.detail  }}</td>
                <td>{{ expense.price | currency:'USD':true }}</td>
                <td><button class="btn btn-neutral btn-xs">delete</button></td>
              </tr>
            </tbody>
          </table>
        </div>

      </div>
    </div>
  `,
})
export class ExpensesTableComponent {
  expenses = [
    {
      date: '2023-06-21',
      detail: 'Panaderia',
      price: 450,
    },
    {
      date: '2023-06-22',
      detail: 'Verdulería',
      price: 1450,
    },{
      date: '2023-06-23',
      detail: 'Supermercado',
      price: 3274,
    },
    {
      date: '2023-06-24',
      detail: 'Paddel',
      price: 950,
    }

  ];

}
