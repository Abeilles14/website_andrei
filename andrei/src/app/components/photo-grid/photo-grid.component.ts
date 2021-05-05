import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery'

@Component({
  selector: 'app-photo-grid',
  templateUrl: './photo-grid.component.html',
  styleUrls: ['./photo-grid.component.css']
})
export class PhotoGridComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let top = document.querySelector("#top");
    if (top) {
      top.scrollIntoView();
    }

  // $("#nanogallery2").nanogallery2( {
  //     items: [
  //       { src: '../../../../assets/projects/ios.PNG', srct: '/assets/projects/ios.PNG', title: 'Alt 1' },
  //       { src: '/assets/projects/ios.PNG', srct: '/assets/projects/ios.PNG', title: 'Alt 2' },
  //       { src: '/assets/projects/ios.PNG', srct: '/assets/projects/ios.PNG', title: 'Alt 3' }
  //     ]
  //   });
  }
}
