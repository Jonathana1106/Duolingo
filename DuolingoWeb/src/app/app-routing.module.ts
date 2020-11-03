import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './Home/home/home.component';
import { AdminComponent } from './Admin/admin/admin.component';
import { AdminlrComponent } from './Admin/adminlr/adminlr.component';
import { UserComponent } from './Users/user/user.component';
import { UserlrComponent } from './Users/userlr/userlr.component';


const routes: Routes = [
  {
    path: '', redirectTo: '/Home', pathMatch: 'full'
  },

  {
    path: 'Home', component: HomeComponent
  },

  {
    path: 'Admin', pathMatch: 'prefix',
    children: [
      { path: 'AdminLR', pathMatch: 'prefix', component: AdminlrComponent },
      { path: '', component: AdminComponent }
    ]
  },

  {
    path: 'Users', pathMatch: 'prefix',
    children: [
      { path: 'UserLR', pathMatch: 'prefix', component: UserlrComponent },
      { path: '', component: UserComponent }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
