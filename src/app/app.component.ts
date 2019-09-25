import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  navList = ['Menu Item 1', 'Menu Item 2', 'Menu Item 3', 'Menu Item 4']
  lightTheme = true;

  selected :any;
  
  select(item) {
    this.selected = item; 
  };

  isActive(item) {
    return this.selected === item;
  };


}
