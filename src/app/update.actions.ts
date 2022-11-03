import { createAction, props } from '@ngrx/store';
import { ArticlesInCartNumberInterface } from './interface/update-shopping-car';

export const updateArticlesNumber = createAction('[ArticlesInCart] Update number', props<ArticlesInCartNumberInterface>());
