import { Component, HostBinding, OnInit, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations'

@Component({
  selector: 'app-welcome-component',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
  animations: [
    trigger('openClose', [
      // ...
      state('open', style({
        opacity: 1
      })),
      state('closed', style({
        opacity: 0,
      })),
      transition('closed => open', [
        animate('4s')
      ]),
    ]),
  ],
})
export class WelcomeComponent implements AfterViewInit {
  title = 'Welcome to the Weather App';
  buttonText = 'Continue to the site';
  isOpen = false;
  constructor(private cdr: ChangeDetectorRef) {}
  toggle() {
    this.isOpen = !this.isOpen;
  }

  ngAfterViewInit() {
    this.toggle();
    this.cdr.detectChanges();
  }
}
