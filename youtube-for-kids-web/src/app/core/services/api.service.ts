import { Injectable } from '@angular/core';
import { Headers, Http, Response, RequestOptions, RequestOptionsArgs, URLSearchParams } from '@angular/http';
import { Router } from '@angular/router';

import { Observable } from 'rxjs/Rx';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';

import { RequestService } from './request.service';

@Injectable()
export class ApiService {

  private apiKey: { key: string };
  private apiUrl: string;

  constructor(
    protected http: Http,
    private router: Router,
    private request: RequestService,
  ) {
    this.apiUrl = 'https://www.googleapis.com/youtube/v3/';
    this.apiKey = { key: 'AIzaSyBpK_20kvNKW4KjACyDUwI_8oLjZM92owc' };
  }

  public delete<T>(url: string, options?: RequestOptionsArgs): Observable<T> {
    options = { ...options };

    return this.http.delete(`${this.apiUrl}${url}`, options)
      .map(this.extractData)
      .catch(error => this.handleError(error));
  }

  public get<T>(url: string, options?: RequestOptionsArgs): Observable<T> {
    options = {
      ...options,
      ...(options && options.params && this.request.getParams(this.apiKey, options.params as URLSearchParams) || {}),
    };

    return this.http.get(`${this.apiUrl}${url}`, options)
      .map(this.extractData)
      .catch(error => this.handleError(error));
  }

  public patch<T>(url: string, body: any, options?: RequestOptionsArgs): Observable<T> {
    options = { ...options };

    return this.http.patch(`${this.apiUrl}${url}`, body, options)
      .map(this.extractData)
      .catch(error => this.handleError(error));
  }

  public post<T>(url: string, body: any, options?: RequestOptionsArgs): Observable<T> {
    options = { headers: this.request.getJsonHeader(options ? options.headers : undefined), ...options };

    return this.http.post(`${this.apiUrl}${url}`, body, options)
      .map(this.extractData)
      .catch(error => this.handleError(error));
  }

  public put<T>(url: string, body: any, options?: RequestOptionsArgs): Observable<T> {
    options = { ...options };

    return this.http.put(`${this.apiUrl}${url}`, body, options)
      .map(this.extractData)
      .catch(error => this.handleError(error));
  }

  private extractData = (res: Response): any => res.json() || {};

  private handleError(error: Response) {
    console.error('Ha ocurrido un error', error);
    let body: any;
    try {
      body = this.extractData(error);
    } catch { }
    return Observable.of([]);
  }

}
