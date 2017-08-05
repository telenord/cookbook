import {Injectable} from '@angular/core';
import {Recipe} from './recipe.model';

@Injectable()
export class RecipeService {
  recipes: Recipe[] = [
    new Recipe(
      'A Burger Recipe',
      'This is simply meat Burger',
      'https://im0-tub-ru.yandex.net/i?id=fba19d1dbd8b5fdec01a7f20d73f3871&n=33&h=215&w=338'
    ),
    new Recipe(
      'Sushi Recipe',
      'This is tasty Sushi',
      'https://im0-tub-ru.yandex.net/i?id=d11094122c87a054da92d6b8dd1bb0e4&n=33&h=215&w=416'
    )
  ];

  constructor() {
  }

  public getRecipes() {
    return this.recipes;
  }

  public getRecipe(index: number) {
    return this.recipes[index];
  }

}
