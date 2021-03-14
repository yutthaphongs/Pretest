import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../shared/categories.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(public service: CategoriesService) { }
  title = 'WebAppQuestion2';
  fillter: string = '';

  ngOnInit(): void {
    this.service.getCategoriesAll()
  }

  onSearch($event) {
    this.service.getCategoriesFillter(this.fillter);
  }

}
