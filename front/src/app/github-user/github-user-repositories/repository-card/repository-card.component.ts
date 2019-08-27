import {Component, Input, OnInit} from '@angular/core';
import {GithubRepository} from '../types/github-user-repository';

@Component({
  selector: 'app-repository-card',
  templateUrl: './repository-card.component.html',
  styleUrls: ['./repository-card.component.styl']
})
export class RepositoryCardComponent implements OnInit {

  @Input() repository: GithubRepository;

  constructor() { }

  ngOnInit() {
  }

}
