import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.css']
})
export class DocumentsComponent implements OnInit {
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

