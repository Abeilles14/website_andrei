import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser'

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
    let top = document.querySelector("#top");
    if (top) {
      top.scrollIntoView();
    }
  }

}
