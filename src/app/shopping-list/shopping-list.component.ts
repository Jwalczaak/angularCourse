import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../recipes/ingredients.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[];
  constructor(private shoppinglist: ShoppingListService) {}

  ngOnInit(): void {
    this.ingredients = this.shoppinglist.getIngredients();
    this.shoppinglist.ingredientsChanged.subscribe(
      (ingredients: Ingredient[]) => {
        this.ingredients = ingredients;
      }
    );
  }
}
