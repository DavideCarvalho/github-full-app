import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {GithubUserRepositoriesStore} from './github-user-repositories.store';
import {catchError, take, tap} from 'rxjs/operators';
import {of} from 'rxjs';
import {environment} from '../../../../environments/environment';
import {GithubRepository} from '../types/github-user-repository';

@Injectable({providedIn: 'root'})
export class GithubUserRepositoriesService {

  private api = `${environment.apiUrl}/api/users/`;

  constructor(private githubUserRepositoriesStore: GithubUserRepositoriesStore,
              private http: HttpClient) {
  }

  getUserRepositories({username}: { username: string }) {
    this.githubUserRepositoriesStore.setLoading(true);
    this.http.get<GithubRepository[]>(
      `${this.api}${username}/repos`).pipe(
      take(1),
      tap(repositories => {
        this.githubUserRepositoriesStore.update(state => ({...state, repositories}));
      }),
      tap(() => this.githubUserRepositoriesStore.setLoading(false)),
      catchError((err: HttpErrorResponse) => {
        this.githubUserRepositoriesStore.setLoading(false);
        this.githubUserRepositoriesStore.setError<HttpErrorResponse>(err);
        return of('');
      })
    ).subscribe();
  }
}
