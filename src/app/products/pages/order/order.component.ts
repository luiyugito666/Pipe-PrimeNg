import { Component } from '@angular/core';
import { Color, Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'products-order',
  templateUrl: './order.component.html',
  styles: [
  ]
})
export class OrderComponent {
  public isUpperCase: boolean = false;
  public heroes: Hero[] = [
    {
      name: 'frankie',
      canFly: true,
    color:Color.blue},
    {
      name: 'sanji',
      canFly: true,
    color:Color.black},
    {
      name: 'luffy',
      canFly: false,
    color:Color.red},
    {
      name: 'zoro',
      canFly: false,
    color:Color.green},
    


  ]

  public orderBy?: keyof Hero;




  toggleUpperCase(): void { 
this.isUpperCase = !this.isUpperCase;

  }


  changeOrder(value: keyof Hero): void {
    this.orderBy = value;
  }
}
