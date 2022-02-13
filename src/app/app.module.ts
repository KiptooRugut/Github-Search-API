import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DisplayComponent } from './display/display.component';
import { FormComponent } from './form/form.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { TimeCountPipe } from './time-count.pipe';
import { ColorDirective } from './color.directive';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    DisplayComponent,
    FormComponent,
    NotFoundComponent,
    TimeCountPipe,
    ColorDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
