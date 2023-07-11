import { Component } from '@angular/core';
import {  Observable, interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrls: ['./uncommon-page.component.css']
})
export class UncommonPageComponent {

  //i18n Select
  public name: string = 'Jorge';
  public gender: 'male' | 'female' = 'male';
  public invitationMap = {
    'male': 'invitarlo',
    'female': 'invitarla'
  }

  //i18nPlural
  public clients: string[] = ['luis', 'wi', 'ken','yovani','andre','fabri']
  public clientsMap = {
    '=0': 'no tenemos ningun cliente esperando',
    '=1': 'tenemos 1 cliente esperando',
    '=2': 'tenemos 2 clientes esperando',
    'other': 'tenemos # clientes esperando'


  }
  

  //keyValue
  public person = {
    name: 'jorge',
    age: 34,
    address:'ayacucho,huamanga'

  }

    //Async Pipe
  
  public myObservableTimer:Observable<number> = interval(2000).pipe(
    tap(value => console.log('tap:', value))

  );

  public promiseValue: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('tenemos data en la promesa');
      console.log('tenemos data en la promesa');
      this.person.name='yuguito'
  },2000)
  })

  changeClient(): void { 
    this.name = 'melissa';
    this.gender= 'female';

  }

  deleteClient(): void {
  this.clients.shift();
  
  }

}
