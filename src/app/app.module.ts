import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BukuComponent } from './buku/buku.component';
import { BukuAddComponent } from './buku/buku-add/buku-add.component';
import { BukuListComponent } from './buku/buku-list/buku-list.component';
import {HoverHighlightDirective} from './hover-highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    BukuComponent,
    BukuAddComponent,
    BukuListComponent,
    HoverHighlightDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
