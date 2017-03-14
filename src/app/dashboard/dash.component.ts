import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ClassGenerica} from '../config/config';


@Component({
    selector: 'my-dashboard',
    templateUrl: 'app/dashboard/templates/dashboard.component.html',
})



export class DashboardComponent extends ClassGenerica implements OnInit {

  constructor() { 
    super();
  } 


    ngOnInit(): void {

    }



}


