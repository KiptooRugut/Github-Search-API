import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DisplayComponent } from './display/display.component';
import { FormComponent } from './form/form.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { TimeCountPipe } from './time-count.pipe';
import { ColorDirective } from './color.directive';
import { NavbarComponent } from './navbar/navbar.component';

import { HttpClientModule } from '@angular/common/http';
import {SearchGithubService} from './search-github/search-github.service';

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
    HttpClientModule
  ],
  providers: [SearchGithubService],
  bootstrap: [AppComponent]
})
export class AppModule { }
