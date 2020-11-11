import { Injectable } from '@angular/core';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  url: string;
  authUrl: string;
  http: HttpClient;
  headers: HttpHeaders;
  params: HttpParams;

  constructor(http: HttpClient) {
    this.url = 'http://localhost:3000/';
    this.params = new HttpParams();
    this.headers = new HttpHeaders();
    this.http = http;
  }

  setParams(key: string, value: string) {
    this.params = this.params.set(key, value);
  }

  clearAllHeaders() {
    this.headers = new HttpHeaders();
  }

  setHeader(key: string, value: string) {
    this.headers.append(key, value);
  }
}
