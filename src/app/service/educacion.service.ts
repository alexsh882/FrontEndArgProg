import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Educacion } from '../models/educacion';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {

  URL = 'http://localhost:8080/educacion/';


  constructor(private httpClient: HttpClient) { }

  public index(): Observable<Educacion[]> {
    return this.httpClient.get<Educacion[]>(this.URL);
  }

  public show(id: number): Observable<Educacion> {
    return this.httpClient.get<Educacion>(this.URL + '/show/' + id)
  }

  public save(educacionEducacion: Educacion): Observable<any> {
    console.log(educacionEducacion);
    return this.httpClient.post<any>(this.URL, educacionEducacion);

  }

  public update(id: any, educacionEducacion: Educacion): Observable<any> {
    return this.httpClient.put<any>(this.URL + id + "/update", educacionEducacion);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.URL + id + "/delete");
  }
}
