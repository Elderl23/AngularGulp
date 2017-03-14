import {Routes, RouterModule} from "@angular/router";
import {ModuleWithProviders} from "@angular/core";

import { LoginComponent } from './login/login.component';
//import { DashboardComponent } from './dashboard/dash.component';


const appRoutes: Routes = [
    {
    	path: '',
    	redirectTo: 'login',
    	pathMatch: 'full'
    },
    {
    	path: 'login',
    	component: LoginComponent
    },
    //{path: 'about', component: AboutComponent, data: {title: 'About'}}
];


export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes, { useHash: true });
export const appRoutingProviders: any[] = [];
