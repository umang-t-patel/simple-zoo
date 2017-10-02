import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app.routing';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BlocksComponent } from './components/blocks/blocks.component';
import { ListComponent } from './components/list/list.component';
import { HomeComponent } from './components/home/home.component';
import { AnimalDescriptionComponent } from './components/animal-description/animal-description.component';
import { SortByPipe } from './utilities/sort-by.pipe';

@NgModule({
  declarations: [
    AppComponent,
    BlocksComponent,
    ListComponent,
    HomeComponent,
    AnimalDescriptionComponent,
    SortByPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
