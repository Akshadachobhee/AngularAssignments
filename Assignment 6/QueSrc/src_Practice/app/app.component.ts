import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent
 {
 StaticText = 'This is a static Text'
 DescriptionST = 'What is a static text? == Image result for what is meant by static text in angular Static text is display text that is not changed at run time.' 
 
 title : string = "This is a Text Field saved in .ts file"
 textField(val:string)
 {
  console.log(val)
 }
}
