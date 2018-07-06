
import { Action } from '@ngrx/store/src/models';

export const ADD_INGREDIENT = 'ADD_INGREDIENT';

export class AddIngredient implements Action {
  readonly type = ADD_INGREDIENT;
  constructor(public payload) {}
}

export type ShoppingListActions = AddIngredient;
