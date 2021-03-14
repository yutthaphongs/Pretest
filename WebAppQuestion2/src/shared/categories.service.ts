import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private http: HttpClient) { }
  readonly baseURL = "https://api.publicapis.org/categories";
  categories:string[] = [];

  getCategoriesAll() {
    this.http.get(this.baseURL)
      .toPromise()
      .then(res =>this.categories = res as string[]);
  }

  getCategoriesFillter(param: string) {
    if(param === '') {
      this.getCategoriesAll();
    }
    else
    {
      this.http.get(this.baseURL)
      .toPromise()
      .then(res =>this.categories = (res as string[]).filter(f => f.toLocaleLowerCase() === param.toLocaleLowerCase()));
    }
  }
}
