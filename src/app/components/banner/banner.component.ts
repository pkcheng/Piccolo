import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css'],
})
export class BannerComponent implements OnInit {
  @Input() result;
  calories;
  ingredients;

  constructor() {}

  ngOnInit(): void {
    this.calories = Math.round(this.result.recipe.calories);
    this.ingredients = this.result.recipe.ingredientLines;
  }
}
