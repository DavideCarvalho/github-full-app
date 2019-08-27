import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';
import {GithubRepository} from '../types/github-user-repository';

export interface GithubUserRepositoriesState {
   repositories: GithubRepository[];
}

export function createInitialState(): GithubUserRepositoriesState {
  return {
    repositories: []
  };
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'github-user-repositories', resettable: true })
export class GithubUserRepositoriesStore extends Store<GithubUserRepositoriesState> {

  constructor() {
    super(createInitialState());
  }

}

