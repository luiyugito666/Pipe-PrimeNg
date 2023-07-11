import { SharedModule } from './shared/shared.module';
import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { TimelineModule } from 'primeng/timeline';
//configuracion del local de la app
import localEsPE from '@angular/common/locales/es-PE'
import localFrCA from '@angular/common/locales/fr-CA'

import { registerLocaleData } from '@angular/common';

registerLocaleData(localEsPE);
registerLocaleData(localFrCA);
@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    RippleModule,
    TimelineModule,
    BrowserAnimationsModule,
    SharedModule,
    
  ],
  providers: [

    {
      provide:LOCALE_ID,useValue:'es-PE'

    }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
