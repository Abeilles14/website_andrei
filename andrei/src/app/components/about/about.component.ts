import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  navItems: Array<any> = [
    {
      name: 'About',
      desc: 'Here you are',
      rout: '/about'
    },
    {
      name: 'Projects',
      desc: 'My personal and collaborative project showcase',
      rout: '/projects'
    },
    {
      name: 'Archives',
      desc: 'My school notes, documents, and artwork',
      rout: '/documents'
    },
    {
      name: 'Resume',
      desc: 'See my resume and work experience here',
      rout: '/resume'
    },
    {
      name: 'Other',
      desc: 'Mountain running adventures, Music, and Martial Arts',
      rout: '/other'
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

  onClick() {
    let about = document.querySelector("#home-about");
    if (about) {
      about.scrollIntoView();
    }
  }
}
