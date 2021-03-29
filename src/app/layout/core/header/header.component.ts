import { Component, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import * as $ from 'jquery';
import { Router } from '@angular/router';
import { DefaultComponent } from '../../default/default.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  opened = false;
  constructor(private router: Router, @Inject(DOCUMENT) document) { }

  ngOnInit(): void {
  }
  toggleOpened() {
   
    // this.opened = !this.opened;
    // const ele = document.getElementById('main-contents');
    // if (this.opened) {
    //   ele.style.marginLeft = '250px';
    // } else {
    //   ele.style.marginLeft = '0px';
    // }
  }
  logout() {
    this.router.navigate(['/']);
  }

}
