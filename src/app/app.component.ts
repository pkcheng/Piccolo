import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  search = 'tempura';
  results = [];
  APP_ID = '329dd704';
  APP_KEY = '563498b387a335ca8ca3163dd93d1e95';
  loading = true;

  constructor() {
    this.fetchRecipes();
  }

  fetchRecipes = async () => {
    this.loading = true;
    const response = await fetch(
      `https://api.edamam.com/search?q=${this.search}&app_id=${this.APP_ID}&app_key=${this.APP_KEY}&to=12`
    );
    const data = await response.json();
    this.results = data.hits;
    this.loading = false;
    console.log(data.hits);
  };

  searchRecipe = (keyword) => {
    this.search = keyword;
    this.fetchRecipes();
  };
}
