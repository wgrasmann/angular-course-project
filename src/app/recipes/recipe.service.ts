import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';

@Injectable()
export class RecipeService {

  private recipes: Recipe[] = [
    new Recipe(
      'Tasty Schnitzel',
      'This is simply a test',
      'https://c.pxhere.com/photos/50/03/beirut_power_supply_snack-1375814.jpg!d',
      [
        new Ingredient('Meat', 1),
        new Ingredient('French Fries', 20)
      ]),
    new Recipe(
      'Big Fat Burger',
      'This is not simply a test',
      'https://www.daringgourmet.com/wp-content/uploads/2014/03/Schnitzel-7_edited.jpg',
      [
        new Ingredient('Buns', 2),
        new Ingredient('Meat', 1)
      ])
  ];

  constructor() { }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

}
