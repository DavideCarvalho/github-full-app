import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';
import {GithubUser} from '../types/github-user';

export interface GithubUsersListState {
   githubUsers: GithubUser[];
}

export function createInitialState(): GithubUsersListState {
  return {
    githubUsers: []
  };
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'github-users-list' })
export class GithubUsersListStore extends Store<GithubUsersListState> {

  constructor() {
    super(createInitialState());
  }

}

