import {Component, OnInit} from '@angular/core';
import {GithubUserRepositoriesQuery} from './store/github-user-repositories.query';
import {GithubUserRepositoriesService} from './store/github-user-repositories.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-github-user-repositories',
  templateUrl: './github-user-repositories.component.html',
  styleUrls: ['./github-user-repositories.component.styl']
})
export class GithubUserRepositoriesComponent implements OnInit {

  repositories$ = this.githubUserRepositoriesQuery.selectGithubUserRepositories();

  constructor(private readonly githubUserRepositoriesQuery: GithubUserRepositoriesQuery,
              private readonly githubUserRepositoriesService: GithubUserRepositoriesService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    const username = this.route.snapshot.params.username;
    this.githubUserRepositoriesService.getUserRepositories({username});
  }

}
