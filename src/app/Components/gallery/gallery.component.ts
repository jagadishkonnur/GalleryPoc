import { Gallery } from './../../Models/gallery.model';
import { GalleryService } from './../../Services/gallery.service';
import { Component, OnInit, HostListener, ElementRef } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  count: number = 1;
  title: string;
  galleryItems: Gallery[] = [];
  fullData: Gallery[] = [];
  constructor(public el: ElementRef, private galleryService: GalleryService) {

  }
  @HostListener('window:scroll', [])
    onScroll(): void {
      if (this.bottomReached()) {
        console.log('Yes');
        this.count++;
        console.log('count before:', this.galleryItems.length);
        // tslint:disable-next-line:max-line-length
        if ((this.count * 3) <= this.fullData.length) {
          this.galleryItems = this.fullData.slice(0, this.count*3);
        }
        console.log('count after:', this.galleryItems.length);
      }
    }
    bottomReached(): boolean {
      return (window.scrollY + 150 > window.innerHeight);
      // return (window.innerHeight + window.scrollY) >= 350;
      // return (window.innerHeight + window.scrollY) >= document.body.offsetHeight;
    }
  ngOnInit() {
    this.galleryService.getGalleryItems().subscribe((data: any) => {
      console.log(data);
      this.title = data.title;
      this.fullData = data.items;
      console.log('1st call:', this.fullData.length);
      this.galleryItems = data.items.splice(0, this.count*3 );
    });
  }

}
