import {Injectable} from '@angular/core';
import {Recipe} from './recipe.model';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  recipes: Recipe[] = [
    new Recipe(
      'A Burger Recipe',
      'This is simply meat Burger',
      'https://im0-tub-ru.yandex.net/i?id=fba19d1dbd8b5fdec01a7f20d73f3871&n=33&h=215&w=338',
      [
        new Ingredient('Meat', 1),
        new Ingredient('Bread', 2),
      ]
    ),
    new Recipe(
      'Sushi Recipe',
      'This is tasty Sushi',
      'https://im0-tub-ru.yandex.net/i?id=d11094122c87a054da92d6b8dd1bb0e4&n=33&h=215&w=416',
      [
        new Ingredient('Rice', 3),
        new Ingredient('Salmon', 1),
        new Ingredient('Vakame', 300) ,
      ]
    )
  ];

  constructor(private slService: ShoppingListService) {
  }

  public getRecipes() {
    return this.recipes;
  }

  public getRecipe(index: number) {
    return this.recipes[index];
  }
  public addToShoppingList(items){
    this.slService.addIngredients(items);
  }

}
