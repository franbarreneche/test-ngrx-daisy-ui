import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { Expense } from 'src/app/types/expense';

export const expenseActions = createActionGroup({
  source: 'Expenses',
  events: {
    'Add Expense': props<Omit<Expense, 'id'>>(),
    'Delete Expense': props<{ id: string }>(),
  },
});
