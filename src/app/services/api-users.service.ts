import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiUsersService {

  urlBase = "https://jsonplaceholder.typicode.com/"

  constructor(private http: HttpClient) { }

  getUsuarios(){
    return this.http.get(this.urlBase + "users");
  }

  getUsuario(id: number){
    return this.http.get(this.urlBase + "users/" + id);    
  }
}
