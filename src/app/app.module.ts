import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
<<<<<<< HEAD
=======
import { TripsComponent } from './omarCom/trips/trips.component';
>>>>>>> mostafa

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    HomeComponent
=======
    HomeComponent,
    TripsComponent
>>>>>>> mostafa
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
