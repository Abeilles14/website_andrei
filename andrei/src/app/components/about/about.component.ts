import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  intro = {
    title: 'Isabelle Andre',
    subtitle: '3rd Year Electrical Engineering Student',
    content: 'University of British Columbia',
    image: 'assets/images/about_bkg6.jpg'
  };

  constructor() { }

  ngOnInit(): void {
  }

}
