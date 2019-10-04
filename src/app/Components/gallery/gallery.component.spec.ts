import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryComponent } from './gallery.component';
import { GalleryItemComponent } from './../gallery-item/gallery-item.component';
import { GalleryService } from 'src/app/Services/gallery.service';
import { Observable, of } from 'rxjs';

describe('GalleryComponent', () => {
  let component: GalleryComponent;
  let fixture: ComponentFixture<GalleryComponent>;
  const res = {
    title: 'Uploads from everyone',
    link: 'https:\/\/www.flickr.com\/photos\/',
    description: '',
    modified: '2019-09-24T05:22:06Z',
    generator: 'https:\/\/www.flickr.com',
    items: [{
      title: 'MQ Incubate is wide',
      link: 'https:\/\/www.flickr.com\/photos\/bigyahu\/48785880868\/',
      media: { m: 'https:\/\/live.staticflickr.com\/65535\/48785880868_57844b9c1e_m.jpg'},
      date_taken: '2019-09-24T15:22:06-08:00',
      description: ' test description',
      published: '2019-09-24T05:22:06Z',
      author: 'nobody@flickr.com ("bigyahu")',
      author_id: '44124455505@N01',
      tags: 'ifttt instagram'
    },
    {
      title: 'MQ Incubate is wide',
      link: 'https:\/\/www.flickr.com\/photos\/bigyahu\/48785880868\/',
      media: { m: 'https:\/\/live.staticflickr.com\/65535\/48785880868_57844b9c1e_m.jpg'},
      date_taken: '2019-09-24T15:22:06-08:00',
      description: ' test description',
      published: '2019-09-24T05:22:06Z',
      author: 'nobody@flickr.com ("bigyahu")',
      author_id: '44124455505@N01',
      tags: 'ifttt instagram'
    },
    {
      title: 'MQ Incubate is wide',
      link: 'https:\/\/www.flickr.com\/photos\/bigyahu\/48785880868\/',
      media: { m: 'https:\/\/live.staticflickr.com\/65535\/48785880868_57844b9c1e_m.jpg'},
      date_taken: '2019-09-24T15:22:06-08:00',
      description: ' test description',
      published: '2019-09-24T05:22:06Z',
      author: 'nobody@flickr.com ("bigyahu")',
      author_id: '44124455505@N01',
      tags: 'ifttt instagram'
    },
    {
      title: 'MQ Incubate is wide',
      link: 'https:\/\/www.flickr.com\/photos\/bigyahu\/48785880868\/',
      media: { m: 'https:\/\/live.staticflickr.com\/65535\/48785880868_57844b9c1e_m.jpg'},
      date_taken: '2019-09-24T15:22:06-08:00',
      description: ' test description',
      published: '2019-09-24T05:22:06Z',
      author: 'nobody@flickr.com ("bigyahu")',
      author_id: '44124455505@N01',
      tags: 'ifttt instagram'
    },
    {
      title: 'MQ Incubate is wide',
      link: 'https:\/\/www.flickr.com\/photos\/bigyahu\/48785880868\/',
      media: { m: 'https:\/\/live.staticflickr.com\/65535\/48785880868_57844b9c1e_m.jpg'},
      date_taken: '2019-09-24T15:22:06-08:00',
      description: ' test description',
      published: '2019-09-24T05:22:06Z',
      author: 'nobody@flickr.com ("bigyahu")',
      author_id: '44124455505@N01',
      tags: 'ifttt instagram'
    },
    {
      title: 'MQ Incubate is wide',
      link: 'https:\/\/www.flickr.com\/photos\/bigyahu\/48785880868\/',
      media: { m: 'https:\/\/live.staticflickr.com\/65535\/48785880868_57844b9c1e_m.jpg'},
      date_taken: '2019-09-24T15:22:06-08:00',
      description: ' test description',
      published: '2019-09-24T05:22:06Z',
      author: 'nobody@flickr.com ("bigyahu")',
      author_id: '44124455505@N01',
      tags: 'ifttt instagram'
    },
    {
      title: 'MQ Incubate is wide',
      link: 'https:\/\/www.flickr.com\/photos\/bigyahu\/48785880868\/',
      media: { m: 'https:\/\/live.staticflickr.com\/65535\/48785880868_57844b9c1e_m.jpg'},
      date_taken: '2019-09-24T15:22:06-08:00',
      description: ' test description',
      published: '2019-09-24T05:22:06Z',
      author: 'nobody@flickr.com ("bigyahu")',
      author_id: '44124455505@N01',
      tags: 'ifttt instagram'
    },
    {
      title: 'MQ Incubate is wide',
      link: 'https:\/\/www.flickr.com\/photos\/bigyahu\/48785880868\/',
      media: { m: 'https:\/\/live.staticflickr.com\/65535\/48785880868_57844b9c1e_m.jpg'},
      date_taken: '2019-09-24T15:22:06-08:00',
      description: ' test description',
      published: '2019-09-24T05:22:06Z',
      author: 'nobody@flickr.com ("bigyahu")',
      author_id: '44124455505@N01',
      tags: 'ifttt instagram'
    }]
  };
  const MockGalleryService = {
    getGalleryItems(): Observable<any> {
      return of(res);
    }
  };
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GalleryComponent, GalleryItemComponent ],
      providers: [{provide: GalleryService, useValue: MockGalleryService }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('GalleryComponent should create', () => {
    expect(component).toBeTruthy();
  });

  it('GalleryComponent initially all items has to be loaded', () => {
    expect(component.galleryItems.length).toBe(res.items.length);
  });

  it('GalleryComponent should check data exist', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.text-center').textContent).toContain(res.title);
  });

  it('GalleryComponent should check data exist after scroll', () => {
    const compiled = fixture.debugElement.nativeElement;
    window.scrollTo(0, 700);
    fixture.detectChanges();
    expect(compiled.querySelector('.text-center').textContent).toContain(res.title);
  });
});
