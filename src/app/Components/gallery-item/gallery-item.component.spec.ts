import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryItemComponent } from './gallery-item.component';

describe('GalleryItemComponent', () => {
  let component: GalleryItemComponent;
  let fixture: ComponentFixture<GalleryItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GalleryItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleryItemComponent);
    component = fixture.componentInstance;
    component.item = {
      title: 'MQ Incubate is wide',
      link: 'https:\/\/www.flickr.com\/photos\/bigyahu\/48785880868\/',
      media: { m: 'https:\/\/live.staticflickr.com\/65535\/48785880868_57844b9c1e_m.jpg'},
      date_taken: '2019-09-24T15:22:06-08:00',
      description: ' test description',
      published: '2019-09-24T05:22:06Z',
      author: 'nobody@flickr.com ("bigyahu")',
      author_id: '44124455505@N01',
      tags: 'ifttt instagram'
    };
    fixture.detectChanges();
  });

  it('GalleryItemComponent should create', () => {
    expect(component).toBeTruthy();
  });

  it('GalleryItemComponent should check data exist', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.author').textContent).toContain('nobody@flickr.com ("bigyahu")');
    expect(compiled.querySelector('.tags').textContent).toContain('ifttt instagram');
  });
});
