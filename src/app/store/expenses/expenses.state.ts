import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Expense } from 'src/app/types/expense';

export interface ExpensesState extends EntityState<Expense> {
  loading: [];
}

export const selectId = ({ id }: Expense) => id;

export const sortComparer = (a: Expense, b: Expense): number => a.id.localeCompare(b.id);

export const adapter: EntityAdapter<Expense> = createEntityAdapter({ selectId, sortComparer });

export const initialState: ExpensesState = adapter.getInitialState({ loading: [] });
