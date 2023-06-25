import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-expenses-form',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="card bg-white text-white-content self-center shadow">
      <div class="card-body items-center text-center">
        <h2 class="card-title">Add New Expense</h2>
          <!-- Date -->
        <div class="form-control w-full max-w-xs">
          <label class="label">
            <span class="label-text">Date</span>
          </label>
          <input type="date" placeholder="Supermarket" class="input input-bordered w-full max-w-xs" />
        </div>
        <!-- Detail -->
        <div class="form-control w-full max-w-xs">
          <label class="label">
            <span class="label-text">Detail</span>
          </label>
          <input type="text" placeholder="Ex: Supermarket" class="input input-bordered w-full max-w-xs" />
        </div>
        <!-- Price -->
        <div class="form-control w-full max-w-xs">
          <label class="label">
            <span class="label-text">Price</span>
          </label>
          <input type="number" placeholder="Ex: 150" class="input input-bordered w-full max-w-xs" />
        </div>
        <!-- Add -->
        <button class="btn btn-block btn-neutral">Add</button>
    </div>
  `,
})
export class ExpensesFormComponent {

}
