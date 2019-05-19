import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequestHttpService {

  readonly HEADERS: HttpHeaders;
  // readonly JSON: string = "application/json;charset=UTF-8";
  // readonly JSON: string = "application/json;charset=UTF-8";
  // readonly JSON: string = "application/json;charset=UTF-8";

  constructor(private http: HttpClient) {
    this.HEADERS = new HttpHeaders().set('Content-Type', 'application/json;charset=UTF-8');
  }

  doPost(url: string, object: any, header: HttpHeaders = this.HEADERS): Observable<any> {
    // const json = JSON.stringify(object);
    // const headers = new HttpHeaders().set('Content-Type', 'application/json;charset=UTF-8');
    return this.http.post(url, object, { headers: header });
  }

  doGet(url: string, header: HttpHeaders = this.HEADERS): Observable<any> {
    return this.http.get(url, { headers: header });
  }

  doDelete(url: string, header: HttpHeaders = this.HEADERS): Observable<any> {
    return this.http.delete(url, { headers: header });
  }

  async doGetPromise(url: string, header: HttpHeaders = this.HEADERS): Promise<any> {
    return await this.http.get(url, { headers: header }).toPromise();
  }
  async doPostPromise(url: string, object: any, header?: HttpHeaders): Promise<any> {
    // const json = JSON.stringify(object);
    // const headers = new HttpHeaders().set('Content-Type', 'application/json;charset=UTF-8');
    return await this.http.post(url, object, { headers: header }).toPromise();
  }

  private getHeader(type: string) {
    // switch(type) {
    //   case 
    // }
  }
}
