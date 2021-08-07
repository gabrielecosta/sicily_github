import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  showFiller: Boolean = false;
  showMenu = false;
  displayNav = 'none'

  constructor() { }

  ngOnInit(): void {
  }

  show():void {
    if(this.showMenu) {
      this.showMenu = false
      this.displayNav = 'none'
    } else {
      this.showMenu = true
      this.displayNav = 'block'
    }
  }

}
