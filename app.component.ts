import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  // Normal CSS Class Names
  myCSSClass1 ="TextColor  TextStyle"

// Array Of CSs Class Names
myCSSClass2 =["TextColor",  "TextStyle"]
  
// Array Of CSs Class Names
myCSSClass3 ={'TextColor':true,  'TextStyle':false}

// Variable and Method Return Class
isDisabled = false;
myCSSClass4 ={'TextColor':this.isDisabled,  'TextStyle':this.getStyle()}

getStyle(): boolean{
  return true;
}





// Attribute Binding

src="https://images.unsplash.com/photo-1629690064827-3d09b603edc7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=308&q=80";
width=50;


// Style Binding

Name="Vinit Suryarao";
TestStyle="color:red;";

}
