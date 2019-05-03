import { Component } from '@angular/core';
import { data } from '../../../Common/validation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hello-world';

  public testFunction(string){
    console.log(string);
    let res = data.valid1("ABC",1);
    if(res.Success == false){
    alert(res.Message);
    }
  }
}
