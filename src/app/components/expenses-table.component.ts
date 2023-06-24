import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-expenses-table',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="card w-96 bg-neutral text-neutral-content">
      <div class="card-body items-center text-center">
        <h2 class="card-title">Cookies!</h2>
        <p>We are using cookies for no reason.</p>
        <div class="card-actions justify-end">
          <button class="btn btn-primary">Accept</button>
          <button class="btn btn-ghost">Deny</button>
        </div>
      </div>
    </div>
  `,
})
export class ExpensesTableComponent {

}
