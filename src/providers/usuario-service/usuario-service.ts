import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiProvider } from '../api/api';
import { Observable } from 'rxjs/Observable';

/*
  Generated class for the UsuarioServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UsuarioServiceProvider {

  private _url: string;
  private _http: HttpClient;
  private authState;
  private _usuarioLogado;

  constructor(private _api: ApiProvider) {
    this._http = this._api.http;
    this._url = this._api.url;
  }

  efetuarLoginUsuario(email: string, senha: string): Observable<any>{
    return this._http.get(`${this._url}/usuarios`)
    .do((usuario) => this._usuarioLogado = usuario);
  }

  get usuarioAtual(): any {
    return (this._usuarioLogado !== null) ? this._usuarioLogado : null;
  }
}
