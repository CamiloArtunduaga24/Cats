import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../services/service.service';
import { RootCats } from '../interfaces/cats.interface';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{

  cats:any;

  constructor(private readonly apyService:ServiceService) {
  }

  ngOnInit(){
    this.getCats();
  }

  getCats() {
    this.apyService.getApi().subscribe(res => {
      this.cats = res;
      console.log(res);
      
    })
  }
}
