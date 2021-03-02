import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements OnInit {

  constructor() { }

  public loaderAnim = true;
  public hideLoader(){
      this.loaderAnim = false
  }
  ngOnInit(): void {
    setTimeout(()=>{
      this.hideLoader()
    },5000)
  }

}
