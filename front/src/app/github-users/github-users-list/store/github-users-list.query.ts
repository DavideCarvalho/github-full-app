import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import { GithubUsersListStore, GithubUsersListState } from './github-users-list.store';

@Injectable({ providedIn: 'root' })
export class GithubUsersListQuery extends Query<GithubUsersListState> {

  constructor(protected store: GithubUsersListStore) {
    super(store);
  }

}
