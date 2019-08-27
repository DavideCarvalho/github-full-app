import {Component, OnDestroy} from '@angular/core';
import {GithubUserDetailsStore} from './github-user-details/store/github-user-details.store';
import {GithubUserRepositoriesStore} from './github-user-repositories/store/github-user-repositories.store';

@Component({
  selector: 'app-github-user',
  templateUrl: './github-user.component.html',
  styleUrls: ['./github-user.component.styl']
})
export class GithubUserComponent implements OnDestroy {

  constructor(private readonly userDetailStore: GithubUserDetailsStore,
              private readonly userRepositoriesStore: GithubUserRepositoriesStore) {
  }

  ngOnDestroy() {
    this.userDetailStore.reset();
    this.userRepositoriesStore.reset();
  }

}
