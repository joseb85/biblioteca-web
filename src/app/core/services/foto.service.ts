import { Libro } from './../models/libro.model';
import { HttpHeaders } from '@angular/common/http';
import { REQUEST } from './../utils/server.constants';
import { Injectable } from '@angular/core';
import { RequestHttpService } from './request-http.service';
import { Observable } from 'rxjs';
import { from } from 'rxjs';
import { concatMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FotoService {

  private array: number[] = [];
  readonly HEADERS: HttpHeaders;
  readonly BASE: string = REQUEST.libro.foto;
  prometiendo = false;

  constructor(private requestHttpService: RequestHttpService) {
    this.HEADERS = new HttpHeaders().set('Content-Type', 'application/octet-stream;charset=UTF-8');
  }

  public async getFoto(id: number): Promise<any> {
    return await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(id)
      }, 3000);
    });
    // this.array.push(id);
    // return await this.requestHttpService.doGetPromise(this.BASE + id, this.HEADERS);
  }
}
