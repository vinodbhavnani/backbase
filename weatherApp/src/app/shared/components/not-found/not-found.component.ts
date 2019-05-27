import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent implements OnInit {
  title = 'Sorry, the page you are looking for could not be found';
  constructor() { }

  ngOnInit() {
  }

}
