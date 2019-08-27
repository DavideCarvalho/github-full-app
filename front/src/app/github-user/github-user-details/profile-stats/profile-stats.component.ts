import {Component, Input, OnInit} from '@angular/core';
import {GithubUser} from '../../../github-users/github-users-list/types/github-user';
import {GithubProfile} from '../types/github-profile';

@Component({
  selector: 'app-profile-stats',
  templateUrl: './profile-stats.component.html',
  styleUrls: ['./profile-stats.component.styl']
})
export class ProfileStatsComponent implements OnInit {

  @Input() githubUser: GithubProfile;

  constructor() { }

  ngOnInit() {
  }

}
