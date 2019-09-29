import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-gallery-item',
  templateUrl: './gallery-item.component.html',
  styleUrls: ['./gallery-item.component.scss'],
  encapsulation: ViewEncapsulation.None

})
export class GalleryItemComponent implements OnInit {
@Input() item: any;
  constructor() { }

  ngOnInit() {
  }

}
