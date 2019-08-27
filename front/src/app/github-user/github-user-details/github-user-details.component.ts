import {Component, OnInit} from '@angular/core';
import {GithubUserDetailsQuery} from './store/github-user-details.query';
import {ActivatedRoute} from '@angular/router';
import {GithubUserDetailsService} from './store/github-user-details.service';

@Component({
  selector: 'app-github-user-details',
  templateUrl: './github-user-details.component.html',
  styleUrls: ['./github-user-details.component.styl']
})
export class GithubUserDetailsComponent implements OnInit {

  githubUser$ = this.githubUserDetailsQuery.selectGithubUser();

  constructor(private readonly githubUserDetailsQuery: GithubUserDetailsQuery,
              private readonly githubUserDetailsService: GithubUserDetailsService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    const username = this.route.snapshot.params.username;
    this.githubUserDetailsService.getGithubUserByUsername({ username });
  }

}
