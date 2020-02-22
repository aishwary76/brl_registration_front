import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { analyzeAndValidateNgModules } from '@angular/compiler';


@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  data: any;

  constructor(private http: HttpClient) { }

  registerUrl = 'https://brl-register.herokuapp.com/api/brl/register/candidate';
  postregister(data) {
    return this.http.post(this.registerUrl, data );
  }
}
