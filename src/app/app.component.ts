import {
  AfterViewInit,
  Component,
  ElementRef,
  ViewChild
} from '@angular/core';
import { from, fromEvent, of } from 'rxjs';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  @ViewChild('btn') button: ElementRef;

  // Point out the versions used
  // Modify the code below as desired
  items$ = of(1, 2, 3, 4, 5);
  items2$ = of([1, 2, 3, 4, 5]);
  items3$ = from([1, 2, 3, 4, 5]);

  constructor() {
    this.items$.subscribe(item => console.log('of()', item));
    // this.items2$.subscribe(item => console.log('of([])', item));
    // this.items3$.subscribe(item => console.log('from([])', item));
  }

  ngAfterViewInit() {
    const items4$ = fromEvent(this.button.nativeElement, 'click');
    items4$.subscribe((event: MouseEvent) => 
      console.log('fromEvent', `x: ${event.x} #clicks: ${event.detail}`));
  }
}
