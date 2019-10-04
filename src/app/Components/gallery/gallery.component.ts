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
      this.title = data.title;
      this.fullData = data.items;
      if (this.fullData && this.fullData.length > 0 ) {
        this.fullData.splice(0, this.fullData.length).forEach(item => {
          this.galleryItems.push(item);
        });
      }
    });
  }
  updateScrollPos(e) {
    this.curScrollPos = e.pos;
    this.endReached = e.endReached;
    if (this.endReached) {
      if (this.fullData && this.fullData.length > 0 ) {
        this.fullData.splice(0, this.fullData.length).forEach(item => {
          this.galleryItems.push(item);
        });
      } else {
        this.getData();
      }
    }
  }

}
