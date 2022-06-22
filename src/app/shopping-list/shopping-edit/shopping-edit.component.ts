import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient';
import { ShoppinglistService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
@ViewChild('nameInput') nameInputRef: ElementRef | undefined;
@ViewChild('amountInput') amountInputRef: ElementRef | undefined;
  constructor(private shoppinglistService: ShoppinglistService) { }

  ngOnInit(): void {
  }
  onAddItem(){
    const ingName = this.nameInputRef?.nativeElement.value;
    const ingAmount = this.amountInputRef?.nativeElement.value;
    const newIngredient: Ingredient = {
      name: ingName,
      amount: ingAmount
    };
    this.shoppinglistService.addIngredient(newIngredient);
  }

}
