import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent implements OnInit {
  @Input() searchRecipe;
  keywords;

  constructor() {}

  ngOnInit(): void {}

  setKeywords = (event: any) => {
    this.keywords = event.target.value;
    console.log(this.keywords);
  };

  handleSubmit = (event: any) => {
    event.preventDefault();
    this.searchRecipe(this.keywords);
    console.log('Submit!');
  };
}
