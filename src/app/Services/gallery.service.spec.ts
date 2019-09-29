import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HttpClient, JsonpClientBackend } from '@angular/common/http';
import { GalleryService } from './gallery.service';

describe('Service: GalleryService', () => {
  let service: GalleryService;
  let httpTestingController: HttpTestingController;

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
    }]
  };
  beforeEach(() => {
    TestBed.configureTestingModule({
        imports: [HttpClientTestingModule],
        providers: [GalleryService, { provide: JsonpClientBackend }]
    });
    // Returns a service with the MockBackend so we can test with dummy responses
    service = TestBed.get(GalleryService);
    // Inject the http service and test controller for each test
    httpTestingController = TestBed.get(HttpTestingController);
  });
  afterEach(() => {
    // After every test, assert that there are no more pending requests.
    httpTestingController.verify();
  });
});
