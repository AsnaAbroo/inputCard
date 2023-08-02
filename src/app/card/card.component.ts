import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  name=''
  age=0
  getData(n:string)
  {
    this.name=n
  }
  
  getAge(a:any)
  {
    this.age=a;

    
  }

  counter(aa:string){
    this.age++;


  }
 
}
