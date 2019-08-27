import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import { GithubUserRepositoriesStore, GithubUserRepositoriesState } from './github-user-repositories.store';

@Injectable({ providedIn: 'root' })
export class GithubUserRepositoriesQuery extends Query<GithubUserRepositoriesState> {

  constructor(protected store: GithubUserRepositoriesStore) {
    super(store);
  }

  selectGithubUserRepositories() {
    return this.select('repositories');
  }

}
