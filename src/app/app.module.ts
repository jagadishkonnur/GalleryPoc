import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GalleryItemComponent } from './Components/gallery-item/gallery-item.component';
import { GalleryComponent } from './Components/gallery/gallery.component';
import { ScrollTracker } from './Directives/ScrollTracker.directive';

@NgModule({
  declarations: [
    AppComponent,
    GalleryItemComponent,
    GalleryComponent,
    ScrollTracker
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientJsonpModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
