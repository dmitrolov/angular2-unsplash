import { Component, OnInit } from '@angular/core';
import {UnsplashService} from '../core/unsplash.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor( public unsplashService: UnsplashService) {

  }
  queryTitle: string;
  ngOnInit() {
    this.getImages('popular', 1);
  }
  getImages(title, page) {
    console.log(this.unsplashService);
    this.unsplashService.getImages(title, page);
    this.unsplashService.queryTitle = title;
  }

}
