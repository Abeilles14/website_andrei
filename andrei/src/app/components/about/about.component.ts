import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  intro = {
    title: 'Isabelle Andre',
    subtitle: 'Electrical Engineering Student',
    content: 'University of British Columbia',
    image: 'assets/images/about_bkg.jpg'
  };

  constructor() { }

  ngOnInit(): void {
  }

}
