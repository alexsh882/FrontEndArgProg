import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Hys } from '../models/hys';

@Injectable({
  providedIn: 'root'
})
export class HysService {

  URL = environment.url + 'has/';


  constructor(private httpClient : HttpClient) { }

  public index () : Observable<Hys[]>{
    return this.httpClient.get<Hys[]>(this.URL);
  }

  public show(id: number) : Observable<Hys>{
      return this.httpClient.get<Hys>(this.URL + 'show/' + id)
  }

  public save(hys : Hys) : Observable<any> {
    console.log(hys);
    return this.httpClient.post<any>(this.URL, hys);

  }

  public update(id: any, hys: Hys) : Observable<any>{
    return this.httpClient.put<any>(this.URL + id + "/update", hys);
  }

  public delete(id: number) : Observable<any>{
    return this.httpClient.delete<any>(this.URL + id + "/delete");
  }
}
