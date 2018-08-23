import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ApiProvider {

  private _url: string = 'http://localhost:3000';

  constructor(private _http: HttpClient) {
  }

  get url() {
    return this._url;
  }
  get http() {
    return this._http;
  }
}
