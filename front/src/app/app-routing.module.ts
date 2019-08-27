import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {GithubUsersComponent} from './github-users/github-users.component';
import {GithubUserComponent} from './github-user/github-user.component';


const routes: Routes = [
  {
    path: '',
    component: GithubUsersComponent,
  },
  {
    path: ':username/details',
    component: GithubUserComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
