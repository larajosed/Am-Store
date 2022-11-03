import { Action, on, createReducer } from '@ngrx/store';
import { ArticlesInCartNumberInterface } from './interface/update-shopping-car';
import { updateArticlesNumber } from './update.actions';

const initialState = new ArticlesInCartNumberInterface();

const fnReducer = createReducer(
    initialState,
    on(updateArticlesNumber, (state, updatedState) => ({ ...state, articlesQuantity: updatedState.articlesQuantity })),
);

export function articlesInCartReducer(state: ArticlesInCartNumberInterface | undefined, action: Action) {
    return fnReducer(state, action);
}