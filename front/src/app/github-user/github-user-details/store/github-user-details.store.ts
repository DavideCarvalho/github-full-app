import {Injectable} from '@angular/core';
import {Store, StoreConfig} from '@datorama/akita';
import {GithubProfile} from '../types/github-profile';

export interface GithubUserDetailsState {
  githubUser: GithubProfile;
}

export function createInitialState(): GithubUserDetailsState {
  return {
    githubUser: null,
  };
}

@Injectable({providedIn: 'root'})
@StoreConfig({name: 'github-user-details', resettable: true})
export class GithubUserDetailsStore extends Store<GithubUserDetailsState> {

  constructor() {
    super(createInitialState());
  }

}

