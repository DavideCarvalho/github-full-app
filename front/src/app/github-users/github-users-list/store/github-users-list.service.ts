import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {GithubUsersListStore} from './github-users-list.store';
import {catchError, take, tap} from 'rxjs/operators';
import {GithubUser} from '../types/github-user';
import {environment} from '../../../../environments/environment';
import {of} from "rxjs";

@Injectable({providedIn: 'root'})
export class GithubUsersListService {
  private api = `${environment.apiUrl}/api/users`;

  constructor(private githubUsersListStore: GithubUsersListStore,
              private http: HttpClient) {
  }

  initGithubUsers() {
    this.githubUsersListStore.setLoading(true);
    this.http.get<GithubUser[]>(
      `${this.api}?since=0`).pipe(
      take(1),
      tap(githubUsers => {
        this.githubUsersListStore.update((state) => ({...state, githubUsers, currentPage: 0}));
      }),
      tap(() => this.githubUsersListStore.setLoading(false)),
      catchError((err: HttpErrorResponse) => {
        this.githubUsersListStore.setLoading(false);
        this.githubUsersListStore.setError<HttpErrorResponse>(err);
        return of('');
      })
    ).subscribe();
  }

  goToPage({page}: { page: number }) {
    this.githubUsersListStore.setLoading(true);
    this.http.get<GithubUser[]>(
      `${this.api}?since=${page * 10}`).pipe(
      take(1),
      tap(githubUsers => {
        this.githubUsersListStore.update((state) => ({...state, githubUsers, currentPage: page}));
      }),
      tap(() => this.githubUsersListStore.setLoading(false)),
      catchError((err: HttpErrorResponse) => {
        this.githubUsersListStore.setLoading(false);
        this.githubUsersListStore.setError<HttpErrorResponse>(err);
        return of('');
      }),
    ).subscribe();
  }
}
