import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSliderModule } from '@angular/material/slider';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { NgxTimerModule } from 'ngx-timer';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StupidButtonComponent } from './stupid-button/stupid-button.component';

@NgModule({
  declarations: [
    AppComponent,
    StupidButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
	  MatSliderModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    NgxTimerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
