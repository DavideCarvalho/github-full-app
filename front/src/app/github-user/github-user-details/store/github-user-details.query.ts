import {Injectable} from '@angular/core';
import {Query} from '@datorama/akita';
import {GithubUserDetailsState, GithubUserDetailsStore} from './github-user-details.store';
import {Observable} from 'rxjs';
import {GithubUser} from '../../../github-users/github-users-list/types/github-user';

@Injectable({providedIn: 'root'})
export class GithubUserDetailsQuery extends Query<GithubUserDetailsState> {

  constructor(protected store: GithubUserDetailsStore) {
    super(store);
  }

  selectGithubUser(): Observable<GithubUser> {
    return this.select('githubUser');
  }

}
