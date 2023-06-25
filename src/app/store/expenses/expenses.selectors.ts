import { createFeatureSelector, createSelector, MemoizedSelector } from '@ngrx/store';
import { AppState } from '../state';
import { ExpensesState } from './expenses.state';
import { Expense } from 'src/app/types/expense';

export const selectExpensesFeature: MemoizedSelector<AppState, ExpensesState> = createFeatureSelector<ExpensesState>('expenses');

export const selectExpenses: MemoizedSelector<AppState, Expense[]> = createSelector(
  selectExpensesFeature,
  ({ entities }: ExpensesState): Expense[] => Object.values(entities) as Expense[]
);

export const selectTotalExpenses: MemoizedSelector<AppState, number> = createSelector(
  selectExpenses,
  (expenses) => expenses.reduce((acc, expense) => acc + expense.price, 0)
);

export const selectMeanExpenses: MemoizedSelector<AppState, number> = createSelector(
  selectExpenses,
  (expenses) => {
    if(expenses.length === 0) return 0;
    return expenses.reduce((acc, expense) => acc + expense.price, 0) / expenses.length;
   }
);

export const selectMedianExpenses: MemoizedSelector<AppState, number> = createSelector(
  selectExpenses,
  (expenses) => {
    if(expenses.length === 0) return 0;
    const sorted = expenses.sort((a, b) => a.price > b.price ? 1 : (a.price === b.price) ? 0 : -1);
    const mean = sorted[Math.floor(sorted.length / 2)].price;
    return mean;
  }
);

export const selectKpis: MemoizedSelector<AppState, {total: number, mean: number, median: number}> = createSelector(
  selectTotalExpenses,
  selectMeanExpenses,
  selectMedianExpenses,
  ( total, mean, median) => ({total, mean, median})
);
