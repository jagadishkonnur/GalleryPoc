import { Gallery } from './../../Models/gallery.model';
import { GalleryService } from './../../Services/gallery.service';
import { Component, OnInit, HostListener, ElementRef } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  title: string;
  galleryItems: Gallery[] = [];
  fullData: Gallery[] = [];
  curScrollPos = 0;
  endReached = false;
  debug: boolean;
  constructor(private galleryService: GalleryService) {

  }

  ngOnInit() {
    this.debug = false;
    this.getData();
  }
  getData() {
    this.galleryService.getGalleryItems().subscribe((data: any) => {
      console.log(data);
      this.title = data.title;
      this.fullData = data.items;
      console.log('1st call:', this.fullData.length);
      if (this.fullData.length >= 4 ) {
        this.fullData.splice(0, 4).forEach(item => {
          this.galleryItems.push(item);
        });
      }
    });
  }
  updateScrollPos(e) {
    // console.log(e);
    this.curScrollPos = e.pos;
    this.endReached = e.endReached;
    if (this.endReached) {
      // this.customLoad = true;
      console.log('Reached End');
      if (this.fullData.length >= 4) {
        // this.galleryItems = this.fullData.splice(0,4);
        this.fullData.splice(0, 4).forEach(item => {
          this.galleryItems.push(item);
        });
      } else {
        this.getData();
      }
    }
  }

}
