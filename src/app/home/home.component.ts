import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  viewProviders: [Title],
  selector: 'mt-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  constructor(title: Title) {
    title.setTitle(':: Meat ::');
  }

  ngOnInit() {
  }

}
