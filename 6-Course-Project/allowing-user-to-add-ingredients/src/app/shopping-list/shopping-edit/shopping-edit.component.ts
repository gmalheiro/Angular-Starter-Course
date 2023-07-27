import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('inputName', {static: true}) inputName: ElementRef;
  @ViewChild('inputAmount', {static: true}) inputAmount: ElementRef;
  @Output() ingredientAdded = new EventEmitter<Ingredient>();

  constructor() { }

  ngOnInit() {
  }

  onIngredientAdded(){
    const ingredientName = this.inputName.nativeElement.value;
    const ingredientAmount = this.inputAmount.nativeElement.value;
    this.ingredientAdded.emit(new Ingredient(ingredientName,ingredientAmount));
  }

}
