import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'andrei';
  //icon = 'menu';

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

  // changeIcon(){
  //   if(this.icon == 'menu'){
  //     this.icon = 'close';
  //   } else {
  //     this.icon = 'menu';
  //   }
  // }

  constructor(private router: Router){ }

  ngOnInit(){
    this.router.navigate(['/about']);
  }

  navTo(page){
    this.router.navigate([page.rout]);
  }

}
