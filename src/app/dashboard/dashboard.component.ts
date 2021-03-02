import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  public section = 0
  public choosePanel1(){
    this.section = 1
  }
  public choosePanel2(){
    this.section = 2
  }
  public choosePanel3(){
    this.section = 3
  }
  public choosePanel4(){
    this.section = 4
  }
  ngOnInit(): void {
  }

}
