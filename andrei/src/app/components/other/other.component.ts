import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-other',
  templateUrl: './other.component.html',
  styleUrls: ['./other.component.css']
})
export class OtherComponent implements OnInit {

  navItems: Array<any> = [
    {
      name: 'Photography Grid',
      desc: 'My favourite shots without context',
      rout: '/photo-grid'
    }
  ]

  constructor(private router: Router) { }

  ngOnInit(): void {
    let top = document.querySelector("#top");
    if (top) {
      top.scrollIntoView();
    }
  }

  navTo(page) {
    this.router.navigate([page.rout]);
  }

}
