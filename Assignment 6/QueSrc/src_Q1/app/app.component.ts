import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent
 {
 StaticText = 'Marvellous Infosystem'
 textField(val:string)
 {
  console.log(val)
 }
}
