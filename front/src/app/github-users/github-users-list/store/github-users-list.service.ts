import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {GithubUsersListStore} from './github-users-list.store';
import {tap} from 'rxjs/operators';
import {GithubUser} from '../types/github-user';

@Injectable({providedIn: 'root'})
export class GithubUsersListService {

  private clientId = '82b76b8c9e720b934b35';
  private clientSecret = '682f8bd49900aef92ab07608fc9cd52dbd085216';

  constructor(private githubUsersListStore: GithubUsersListStore,
              private http: HttpClient) {
  }

  initGithubUsers() {
    return this.http.get<GithubUser[]>('https://api.com').pipe(tap(githubUsers => {
      this.githubUsersListStore.update((state) => ({...state, githubUsers}));
    }));
  }
}
