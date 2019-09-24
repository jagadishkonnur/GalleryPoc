import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GalleryComponent } from './Components/gallery/gallery.component';

const routes: Routes = [
  { path: '', component: GalleryComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
