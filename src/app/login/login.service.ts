import { Headers, Http, Response, RequestOptions} from '@angular/http';
import { Injectable } from '@angular/core';

import { Clogin } from './login';
import { Path } from '../interfaces/path';
import { PathService} from '../config/config';


// Statics
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';


// Add the RxJS Observable operators.
//import './rxjs-operators';
import { Observable }     from 'rxjs/Observable';

// clase de servicio que puede ser compartido por muchos componentes.

//servicio que devuelve promesa a el Componente
@Injectable()
export class LoginService implements Path{
  constructor(private http:Http){
  }

  path;


  login (username: string, password: string): Observable<Clogin> {

    this.path = PathService.path+'api-token-auth/';
    
    return this.http.post(
              this.path,
              { username,password }
            )
            .map(this.extractData)
            .catch(this.handleError);
  }

  private extractData(res: Response) {
    let body = res.json();
    sessionStorage.setItem('token', body.token);
    return body || { };
  }


  private handleError (error: Response | any) {
  // In a real world app, we might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      // const err = body.error || JSON.stringify(body);
      // errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
      errMsg = body.non_field_errors[0];
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    return Observable.throw(errMsg);
  }


}


