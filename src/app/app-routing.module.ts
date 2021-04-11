import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UsersComponent } from './components/users/users.component'
import { AboutComponent } from './components/pages/about/about.component'

const routes: Routes = [
  { path : '', component: UsersComponent},
  { path : 'about', component: AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
