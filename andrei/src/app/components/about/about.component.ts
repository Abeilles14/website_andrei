import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  navIndex: Array<any> = [
    {
      name: 'About',
      rout: '/about'
    },
    {
      name: 'Projects',
      rout: '/projects'
    },
    {
      name: 'Archives',
      rout: '/documents'
    },
    {
      name: 'Resume',
      rout: '/resume'
    },
    {
      name: 'Other',
      rout: '/other'
    }
  ]

  navItems: Array<any> = [
    {
      name: 'About',
      rout: '/about'
    },
    {
      name: 'Projects',
      rout: '/projects'
    },
    {
      name: 'Archives',
      rout: '/documents'
    },
    {
      name: 'Resume',
      rout: '/resume'
    },
    {
      name: 'Other',
      rout: '/other'
    }
  ]


  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navTo(page) {
    this.router.navigate([page.rout]);
  }
}
