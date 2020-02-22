import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { from } from 'rxjs';


/*const appRoutes: Routes = [
  {
    path: 'thank-you',
    component: ThankYouComponent
  }
];*/

@NgModule({
  declarations: [
    AppComponent,

  ],


  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    /*RouterModule.forRoot(
      appRoutes
    )*/
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
