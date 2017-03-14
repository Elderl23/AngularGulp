import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Headers, RequestOptions} from '@angular/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { Path } from '../interfaces/path';
import { Token } from '../interfaces/token';
import { ConfG, Login} from '../interfaces/ConfGeneral';

export const PathService: Path = {    
    path: "http://127.0.0.1:8000/" 
};


export class ClassGenerica implements Login, ConfG{
  title;
  showMenu;
  all;save;edit;deleteC;
  activateLoading;
  constructor(){
    this.title = 'Tystab -- Angular2';

    if(this.token){
        this.showMenu = true;
    }

    this.loading(false);
  }
  protected loading(parameter): void{
    this.activateLoading= parameter;
  }
  protected activate(All,save,edit,deleteC): void{
    this.all = All;
    this.save = save;
    this.edit = edit;
    this.deleteC = deleteC;
  }

}
export class HeaderOptions extends ClassGenerica implements Token{
	token;
  headersT;
  	constructor() {
      super();
      this.isToken();
  	}

    protected isToken(): boolean{
      if(sessionStorage.getItem('token') != null){
        return true;
      }else{
        return false;
      }
    }

  	headersfunct(): any{
      if(this.token != null){
        this.headersT = new Headers({'Content-Type': 'application/json','Authorization': "Token "+this.token});
      }else{
        this.headersT = new Headers({'Content-Type': 'application/json'});
      }
    	let options = new RequestOptions({ headers: this.headersT });

    	return options;
  	}
}

@Injectable()
export class AuthGuard extends HeaderOptions implements CanActivate {
    constructor() { 
      super();
    }

    closeSession(): void{
        sessionStorage.removeItem('token');
    }

    canActivate() {
      return super.isToken();
    }
}
