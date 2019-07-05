import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  viewProviders: [Title],
  selector: 'mt-about',
  templateUrl: './about.component.html'
})
export class AboutComponent implements OnInit {

  constructor(title: Title) { 
    title.setTitle (':: Sobre ::');
  }

  ngOnInit() {
  }

}
