import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DefaultComponent} from './default/default.component';
import {LoginComponent} from './user/login/login.component';
import {SignupComponent} from './user/signup/signup.component';


const routes: Routes = [
  {
    path: 'default',
    component: DefaultComponent,
    children: [
      {path: 'login', component: LoginComponent},
      {path: 'signup', component: SignupComponent}
    ]
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
