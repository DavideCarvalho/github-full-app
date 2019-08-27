import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {GithubUserDetailsStore} from './github-user-details.store';
import {catchError, take, tap} from 'rxjs/operators';
import {GithubUser} from '../../../github-users/github-users-list/types/github-user';
import {environment} from '../../../../environments/environment';
import {of} from 'rxjs';
import {GithubProfile} from '../types/github-profile';

@Injectable({providedIn: 'root'})
export class GithubUserDetailsService {

  private api = `${environment.apiUrl}/api/users/`;

  constructor(private githubUserDetailsStore: GithubUserDetailsStore,
              private http: HttpClient) {
  }

  getGithubUserByUsername({username}: { username: string }) {
    this.githubUserDetailsStore.setLoading(true);
    this.http.get<GithubProfile>(
      `${this.api}${username}/details`).pipe(
      take(1),
      tap(githubUser => {
        this.githubUserDetailsStore.update(state => ({...state, githubUser}));
      }),
      tap(() => this.githubUserDetailsStore.setLoading(false)),
      catchError((err: HttpErrorResponse) => {
        this.githubUserDetailsStore.setLoading(false);
        this.githubUserDetailsStore.setError<HttpErrorResponse>(err);
        return of('');
      })
    ).subscribe();
  }
}
