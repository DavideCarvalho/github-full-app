import {Component, OnInit} from '@angular/core';
import {GithubUsersListQuery} from './store/github-users-list.query';
import {take, tap} from 'rxjs/operators';
import {GithubUsersListService} from './store/github-users-list.service';
import {GithubUser} from './types/github-user';
import {Router} from '@angular/router';
import {GithubUserDetailsService} from '../../github-user/github-user-details/store/github-user-details.service';

@Component({
  selector: 'app-github-users-list',
  templateUrl: './github-users-list.component.html',
  styleUrls: ['./github-users-list.component.styl']
})
export class GithubUsersListComponent implements OnInit {

  public githubUsers$ = this.githubStoreQuery.selectGithubUsers();

  public currentPage$ = this.githubStoreQuery.selectCurrentPage();

  public loading$ = this.githubStoreQuery.selectLoading();

  constructor(private readonly githubStoreQuery: GithubUsersListQuery,
              private readonly githubStoreService: GithubUsersListService,
              private readonly githubUserDetailsService: GithubUserDetailsService,
              private readonly router: Router) {
  }

  ngOnInit() {
    this.githubStoreService.initGithubUsers();
  }

  goToPreviousPage() {
    this.currentPage$.pipe(
      take(1),
      tap((currentPage) => this.githubStoreService.goToPage({page: currentPage - 1}))
    ).subscribe();
  }

  goToNextPage() {
    this.currentPage$.pipe(
      take(1),
      tap((currentPage) => this.githubStoreService.goToPage({page: currentPage + 1}))
    ).subscribe();
  }

  goToUserDetails(githubUser: GithubUser) {
    this.router.navigate([`${githubUser.login}/details`]);
  }
}
