import { TestBed, inject } from '@angular/core/testing';
import { HttpClientJsonpModule, HttpBackend, JsonpClientBackend } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { GalleryService } from './gallery.service';

describe('GalleryService', () => {
  let service: GalleryService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      // Use the HttpBackend instead of the JsonpClientBackend
      providers: [GalleryService, { provide: JsonpClientBackend, useExisting: HttpBackend }]
    });

    service = TestBed.get(GalleryService);
    httpMock = TestBed.get(HttpTestingController);
  });

  describe('#getGalleryItems', () => {
    it('should return an Observable<any>', () => {
      const dummyData = { id: 1 };

      service.getGalleryItems().subscribe(data => {
        expect(data).toEqual(dummyData);
      });
      // Pass a function to the expectOne method
      const req = httpMock.expectOne(request => request.url === service.sourceUrl);
      expect(req.request.method).toBe('JSONP');
      req.flush(dummyData);
    });
  });
});
