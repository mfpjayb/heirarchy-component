import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NodeComponent } from './node/node.component';
import { NodeListComponent } from './node-list/node-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NodeComponent,
    NodeListComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
