import { ExpensesState } from "./expenses/expenses.state";

export interface AppState {
  expenses?: ExpensesState;
}
