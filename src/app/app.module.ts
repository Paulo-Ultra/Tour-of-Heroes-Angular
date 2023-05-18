import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    //@angular
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule, // <-- import the FormsModule antes de usar binding do [(ngModel)] no html

    //app
    AppRoutingModule,
    CoreModule // <-- import the CoreModule after BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
