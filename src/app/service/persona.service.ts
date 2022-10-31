import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Persona } from '../models/persona.model';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  // url = 'https://backend-ruizdiazalejandro-ap.herokuapp.com/personas/';
  url =  environment.url +'personas/';


  

  constructor(private httpClient: HttpClient) { }

  public show(id: number) : Observable<Persona>{
    return this.httpClient.get<Persona>(this.url  + id );
  }

  public update(id: any, persona: Persona) : Observable<any>{
    return this.httpClient.put<any>(this.url + id + "/update", persona);
  }
}
