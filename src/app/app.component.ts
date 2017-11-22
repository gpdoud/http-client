import { Component, OnInit } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  template: `<p>app-root</p>`,
  styles: []
})
export class AppComponent {
  title = 'app';

  users;

  constructor(private svc: AppService /*, private http: HttpClient */) {}

  ngOnInit(): void {
    // console.log("OnInit");
    // this.http.get("http://prs.doudsystems.com/Users/List")
    //   .subscribe(data => {
    //     this.users = data;
    //     console.log(this.users);
    //   });
    this.svc.List().subscribe(data => {
      this.users = data;
      console.log(this.users);
    });
    
  }
}
