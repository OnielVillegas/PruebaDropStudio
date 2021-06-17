import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListUsersComponent } from './list-users/list-users.component';
import { UserInfoComponent } from './user-info/user-info.component';

const routes: Routes = [  
  {path: '', component: ListUsersComponent},
  {path: 'info', component: UserInfoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
