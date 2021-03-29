import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UserAccountService } from './user-account.service';

@Component({
  selector: 'app-user-account',
  templateUrl: './user-account.component.html',
  styleUrls: ['./user-account.component.css']
})
export class UserAccountComponent implements OnInit {
  booksar: any = [];

  constructor(private userservice: UserAccountService,private httpService:HttpClient) { }

  ngOnInit(): void {
    this.getbooks();
  }

  getbooks() {
    this.httpService.get('./assets/Json/books.json').subscribe(data => {
      console.log(data);
      this.booksar = data;
    });
  }
}
