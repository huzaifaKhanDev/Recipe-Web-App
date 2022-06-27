import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient";
import { ShoppinglistService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    {
      name: 'Laal Chafoor Rosh',
      description: 'Super-tender meat - just awesome!',
      imagePath: '../../assets/images/laal chafoor.jpg',
       ingredients : [
        {
          name: 'Lamb Meat',
          amount: 1
        },
        {
          name: 'Potatoes',
          amount: 10
        },
      ]


      // ingredients: { name: 'Lamb Meat', amount: 1}
    },
    {
      name: 'Chapli Kebab',
      description: 'A complete and delicious meal',
      imagePath: '../../assets/images/ck.jpg',
      ingredients :[
        {
        name: 'Beef Meat',
        amount: 1
        },
        {
        name: 'Tomatoes and Onions',
        amount: 2
        },
        {
        name: 'Animal Fat',
        amount: 1
        }
    ]
    },
  ];
  constructor(private shoppinglistService: ShoppinglistService){}

  getRecipes(){
    return this.recipes.slice();
  }
  addIngredientsToShoppinglist(ingredients: Ingredient[]){
    this.shoppinglistService.addIngredients(ingredients)
  }
}
