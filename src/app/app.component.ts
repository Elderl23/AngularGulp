import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { ClassGenerica} from './config/config';

@Component({
  selector: 'app',
  templateUrl: 'app/templates/base.component.html',
})
export class AppComponent extends ClassGenerica{

	constructor(private router: Router){
		super();
	}
}