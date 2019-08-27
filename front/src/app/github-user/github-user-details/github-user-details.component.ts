import {Component, OnInit} from '@angular/core';
import {GithubUserDetailsQuery} from './store/github-user-details.query';

@Component({
  selector: 'app-github-user-details',
  templateUrl: './github-user-details.component.html',
  styleUrls: ['./github-user-details.component.styl']
})
export class GithubUserDetailsComponent implements OnInit {

  githubUser$ = this.githubUserDetailsQuery.selectGithubUser();

  constructor(private readonly githubUserDetailsQuery: GithubUserDetailsQuery) {
  }

  ngOnInit() {
  }

}
