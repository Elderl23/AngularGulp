import { Component, OnInit} from '@angular/core';
import { Router, RouterLink} from '@angular/router';

import { AuthGuard} from '../config/config';



@Component({
  	selector: 'my-menu',
  	templateUrl: 'app/menu/templates/menu.component.html',
})



export class MenuComponent extends AuthGuard{
  constructor(private router: Router){
    super();
  }

  onLogout() {
    this.closeSession();
    this.router.navigate(['./login']);
  }



}
