import { Directive, HostListener, Output, EventEmitter} from '@angular/core';

  @Directive({
    selector: '[scrollTracker]',
  })
  export class ScrollTracker {
    @Output() scrolled = new EventEmitter<any>();

    @HostListener('scroll', ['$event'])
    onScroll(event) {
      // do tracking
      // console.log('scrolled', event.target.scrollTop);
      // Listen to click events in the component
      const tracker = event.target;
      let endReached = false;
      const limit = tracker.scrollHeight - tracker.clientHeight;
      console.log('Tracking: ', limit, Math.round(event.target.scrollTop));
      if (Math.round(event.target.scrollTop) === limit) {
        endReached = true;
      }

      this.scrolled.emit({
        pos: event.target.scrollTop,
        endReached
      });
    }
  }
