import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PersonListComponent } from './person-list/person-list.component';
import { DetailPersonComponent } from './detail-person/detail-person.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { EditPersonComponent } from './edit-person/edit-person.component';
import { DeletePersonComponent } from './delete-person/delete-person.component';

@NgModule({
  declarations: [AppComponent, PersonListComponent, DetailPersonComponent, EditPersonComponent, DeletePersonComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [BrowserModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
