import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {GithubUsersComponent} from './github-users/github-users.component';
import {GithubUsersListComponent} from './github-users/github-users-list/github-users-list.component';
import {NG_ENTITY_SERVICE_CONFIG} from '@datorama/akita-ng-entity-service';
import {AkitaNgDevtools} from '@datorama/akita-ngdevtools';
import {AkitaNgRouterStoreModule} from '@datorama/akita-ng-router-store';
import {environment} from '../environments/environment';
import {HttpClientModule} from "@angular/common/http";
import { GithubUserComponent } from './github-user/github-user.component';
import { GithubUserDetailsComponent } from './github-user/github-user-details/github-user-details.component';
import { ProfileStatsComponent } from './github-user/github-user-details/profile-stats/profile-stats.component';
import { ProfilePersonalInformationComponent } from './github-user/github-user-details/profile-personal-information/profile-personal-information.component';
import { GithubUserRepositoriesComponent } from './github-user/github-user-repositories/github-user-repositories.component';
import { RepositoryCardComponent } from './github-user/github-user-repositories/repository-card/repository-card.component';

@NgModule({
  declarations: [
    AppComponent,
    GithubUsersComponent,
    GithubUsersListComponent,
    GithubUserComponent,
    GithubUserDetailsComponent,
    ProfileStatsComponent,
    ProfilePersonalInformationComponent,
    GithubUserRepositoriesComponent,
    RepositoryCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    environment.production ? [] : AkitaNgDevtools.forRoot(),
    AkitaNgRouterStoreModule.forRoot()
  ],
  providers: [{provide: NG_ENTITY_SERVICE_CONFIG, useValue: {baseUrl: 'https://jsonplaceholder.typicode.com'}}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
