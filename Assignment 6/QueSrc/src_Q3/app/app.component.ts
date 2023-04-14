import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  //templateUrl: './app.component.html',
  template: `
  
  <h1 style="color:blue;">{{title}}</h1>
  <input type="text" 
  value="Text Field"
  />
  `
})
export class AppComponent
 {
 title = 'Marvellous Infosystem';
}
