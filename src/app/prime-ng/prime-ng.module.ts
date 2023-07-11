import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { MenubarModule } from 'primeng/menubar';
import { FieldsetModule } from 'primeng/fieldset';
import { PanelModule } from 'primeng/panel';




@NgModule({
 
  exports: [
   //MenuModule
    ButtonModule,
     CardModule,
    FieldsetModule,
    MenubarModule,
    PanelModule,
    
  ]
})
export class PrimeNgModule { }
