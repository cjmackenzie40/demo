import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Response } from '@angular/http';
import { Subject, Observable } from 'rxjs/Rx';
import { ICake } from './cake.model';
//import 'rxjs/add/operator/map';

@Injectable()
export class CakeService {

  constructor(private http: Http) { }

  private readonly root: string = 'http://ec2-52-209-201-89.eu-west-1.compute.amazonaws.com:5000/api/';

  getCakes(): Observable<ICake[]> {
    return this.http.get(this.root + 'cakes').map((response: Response) => {
      return <ICake[]>response.json();
    }).catch(this.handleError);
  }

  private handleError(error: Response) {
    return Observable.throw(error.statusText);
  }

}