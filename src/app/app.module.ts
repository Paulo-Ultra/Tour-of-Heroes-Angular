import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    //@angular
    BrowserModule,
    BrowserAnimationsModule, // <-- import the FormsModule antes de usar binding do [(ngModel)] no html
    HttpClientModule,

    //app
    AppRoutingModule,
    CoreModule // <-- import the CoreModule after BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
