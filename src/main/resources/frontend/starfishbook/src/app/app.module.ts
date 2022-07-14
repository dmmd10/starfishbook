import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxColorsModule } from 'ngx-colors';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PublicRoutingModule } from './public/public-routing.module';
import { IonicModule, IonicRouteStrategy  } from '@ionic/angular';
import { RouteReuseStrategy } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
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
    FormsModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule,
    BrowserAnimationsModule],
    providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],  
  bootstrap: [AppComponent],
})
export class AppModule { }