import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './components/partials/header/header.component';
import {HomeComponent} from './components/pages/home/home.component';
import {RatingModule} from "ng-starrating";
import { StarComponent } from './shared/star/star.component';
import {ConvertToSpacesPipe} from "./shared/star/convert-to-spaces.pipe";
import { SearchComponent } from './components/partials/search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    StarComponent,
    ConvertToSpacesPipe,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    /*RatingModule,*/
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
