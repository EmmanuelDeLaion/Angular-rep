import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Personajes } from 'src/interfaces/personajes';

@Injectable({
  providedIn: 'root'
})
export class PersonajesService {

  baseUrl: string = "https://dragon-ball-super-api.herokuapp.com/api/"

  constructor(
    public httpClient: HttpClient
  ) { }

  getPersonajes(): Observable<any>{
    return this.httpClient.get<any>(`${this.baseUrl}characters`);
  }

  getPersonajeName(name: string):Observable<any>{
    return this.httpClient.get(`${this.baseUrl}characters/${name}`);
  }

}
