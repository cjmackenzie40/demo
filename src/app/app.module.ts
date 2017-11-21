import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CakeListComponent } from './cake-list/cake-list.component';
import { CakeItemComponent } from './cake-item/cake-item.component';
import { CakeService } from './cake.service';


@NgModule({
  declarations: [
    AppComponent,
    CakeListComponent,
    CakeItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [CakeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
