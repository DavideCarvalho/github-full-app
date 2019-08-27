import {Injectable} from '@angular/core';
import {ID} from '@datorama/akita';
import {HttpClient} from '@angular/common/http';
import {GithubUserDetailsStore} from './github-user-details.store';
import {tap} from 'rxjs/operators';
import {GithubUser} from '../../../github-users/github-users-list/types/github-user';
import {environment} from '../../../../environments/environment';

@Injectable({providedIn: 'root'})
export class GithubUserDetailsService {

  constructor(private githubUserDetailsStore: GithubUserDetailsStore,
              private http: HttpClient) {
  }

  setGithubUserByUsername({githubUser}: { githubUser: GithubUser }) {
    this.githubUserDetailsStore.update((state) => ({...state, githubUser}));
  }
}
