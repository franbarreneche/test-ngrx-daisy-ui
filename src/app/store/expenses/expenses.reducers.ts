import { ActionReducer, createReducer, on } from '@ngrx/store';
import { ExpensesState, initialState, adapter } from './expenses.state';
import { expenseActions } from './expenses.actions';

export const expenseReducers: ActionReducer<ExpensesState> = createReducer(
  initialState,
  on(expenseActions.addExpense, (state, { date, description, price }) =>
    adapter.addOne({ id: Date.now().toString(), date, description, price }, state)),
  on(expenseActions.deleteExpense, (state, { id }) =>
    adapter.removeOne(id, state))
);
