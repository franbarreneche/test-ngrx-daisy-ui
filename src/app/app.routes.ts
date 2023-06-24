import { Routes } from '@angular/router';
import { ExpensesFeature } from './components/expenses-feature.component';

export const routes: Routes = [
  { path: 'expenses', component: ExpensesFeature },
  { path: '', redirectTo: 'expenses', pathMatch: 'full' }
];
