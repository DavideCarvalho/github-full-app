import {Injectable} from '@angular/core';
import {Query} from '@datorama/akita';
import {GithubUsersListState, GithubUsersListStore} from './github-users-list.store';
import {Observable} from 'rxjs';
import {GithubUser} from '../types/github-user';

@Injectable({providedIn: 'root'})
export class GithubUsersListQuery extends Query<GithubUsersListState> {

  constructor(protected store: GithubUsersListStore) {
    super(store);
  }

  selectGithubUsers(): Observable<GithubUser[]> {
    return this.select('githubUsers');
  }

  selectCurrentPage(): Observable<number> {
    return this.select('currentPage');
  }

}
