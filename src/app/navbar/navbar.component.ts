import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public activeRoute:string = "";

  constructor(private router: Router){}

  ngOnInit(): void {
     this.router.events.subscribe((event) => {
       if (event instanceof NavigationEnd) {
          this.activeRoute = this.router.url;
       }
     });
  }

}
