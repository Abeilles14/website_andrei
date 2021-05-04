import { Component, OnInit } from '@angular/core';

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
  }
}
