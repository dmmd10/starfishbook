import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxColorsModule } from 'ngx-colors';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PublicRoutingModule } from './public/public-routing.module';
import { IonicModule, IonicRouteStrategy  } from '@ionic/angular';
import { RouteReuseStrategy } from '@angular/router';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(),
    AppRoutingModule, 
    HttpClientModule, 
    ReactiveFormsModule, 
    NgxColorsModule,
    PublicRoutingModule ,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    ],
    providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],  
  bootstrap: [AppComponent],
})
export class AppModule { }