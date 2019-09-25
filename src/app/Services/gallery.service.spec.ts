import { TestBed } from '@angular/core/testing';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { GalleryService } from './gallery.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClientJsonpModule, HttpBackend, JsonpClientBackend } from '@angular/common/http';

describe('GalleryService', () => {
  let httpMock: HttpTestingController;
  let service: GalleryService;
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
  // beforeEach(() => {
  //   // TODO: spy on other methods too
  //   httpClientSpy = jasmine.createSpyObj('HttpClient', ['jsonp']);
  // });
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      // Use the HttpBackend instead of the JsonpClientBackend
      providers: [GalleryService, { provide: JsonpClientBackend, useExisting: HttpBackend }]
    });

    service = TestBed.get(GalleryService);
    httpMock = TestBed.get(HttpTestingController);
  });
  beforeEach(() => TestBed.configureTestingModule({}));

  xit('should be created', () => {
    // tslint:disable-next-line:no-shadowed-variable
    expect(service).toBeTruthy();
  });

  xit('should be jsonp', () => {
    // tslint:disable-next-line:no-shadowed-variable
    const service: GalleryService = TestBed.get(GalleryService);
    service.getGalleryItems().subscribe(data => {
      expect(data).toEqual(res);
    });
    const req = httpMock.expectOne(request => request.url === 'http://localhost/');
    expect(req.request.method).toBe('JSONP');
  });
});
