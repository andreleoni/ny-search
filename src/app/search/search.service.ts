import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class SearchService {
  private url: string = "https://api.nytimes.com/";
  private token: string = "e41340415ca74c11a80f315136bfb1f5";

  constructor(private http: Http) { }

  getArticles(query){
    return this.http.get(this.url + '/svc/search/v2/articlesearch.json?q='+ query +'&api-key=' + this.token)
      .map(res => res.json());
  }
}
