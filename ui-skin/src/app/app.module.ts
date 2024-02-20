import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './components/viewers/card/card.component';
import { ContentListComponent } from './components/groups/content-list/content-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    ContentListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
