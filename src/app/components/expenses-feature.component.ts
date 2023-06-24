import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpensesKpisComponent } from './expenses-kpis.component';
import { ExpensesTableComponent } from './expenses-table.component';
import { ExpensesFormComponent } from './expenses-form.component';

@Component({
  selector: 'app-test1',
  standalone: true,
  imports: [CommonModule, ExpensesKpisComponent, ExpensesTableComponent, ExpensesFormComponent],
  template: `
    <div class="flex flex-col h-screen items-center justify-center gap-4 bg-gray-100">
      <app-expenses-kpis />
      <app-expenses-table />
      <app-expenses-form />
    </div>
  `
})
export class ExpensesFeature {}
