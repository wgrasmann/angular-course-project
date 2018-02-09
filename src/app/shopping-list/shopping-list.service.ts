import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class ShoppingListService {

  ingredientsChanged = new Subject<Ingredient[]>();
  startedEditing = new Subject<number>();

  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatos', 5)
  ];

  constructor() { }

  getIngredients() {
    return this.ingredients.slice();
  }

  getIngredient(index: number) {
    return this.ingredients[index];
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.emitOnChange();
  }

  addIngredients(ingredients: Ingredient[]) {
    // spread operator: change array into list
    this.ingredients.push(...ingredients);
    this.emitOnChange();
  }

  updateIngredient(index: number, newIngredient: Ingredient) {
    this.ingredients[index] = newIngredient;
    this.emitOnChange();
  }

  deleteIngredient(index: number) {
    this.ingredients.splice(index, 1);
    this.emitOnChange();
  }

  emitOnChange() {
    this.ingredientsChanged.next(this.ingredients.slice());
  }

}
