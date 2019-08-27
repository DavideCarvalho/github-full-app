import {Component, Input, OnInit} from '@angular/core';
import {GithubProfile} from '../types/github-profile';

@Component({
  selector: 'app-profile-personal-information',
  templateUrl: './profile-personal-information.component.html',
  styleUrls: ['./profile-personal-information.component.styl']
})
export class ProfilePersonalInformationComponent implements OnInit {

  @Input() githubUser: GithubProfile;

  constructor() { }

  ngOnInit() {
  }

}
