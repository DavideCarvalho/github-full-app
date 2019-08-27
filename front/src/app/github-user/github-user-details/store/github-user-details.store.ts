import {Injectable} from '@angular/core';
import {Store, StoreConfig} from '@datorama/akita';
import {GithubUser} from '../../../github-users/github-users-list/types/github-user';

export interface GithubUserDetailsState {
  githubUser: GithubUser;
}

export function createInitialState(): GithubUserDetailsState {
  return {
    githubUser: null,
  };
}

@Injectable({providedIn: 'root'})
@StoreConfig({name: 'github-user-details'})
export class GithubUserDetailsStore extends Store<GithubUserDetailsState> {

  constructor() {
    super(createInitialState());
  }

}

