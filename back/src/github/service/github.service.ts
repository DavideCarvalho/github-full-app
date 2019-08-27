import { AxiosResponse } from 'axios';
import { GithubUser } from '../dto';
import { GithubIntegration } from '../integration';
import { GithubRepository } from '../dto/github-user-repositories-response.dto';
import { Injectable } from '@nestjs/common';
import {GithubProfile} from '../dto/github-profile-response.dto';

@Injectable()
export class GithubService {

  private githubBaseUrl = 'http://api.github.com/';
  private clientId = '82b76b8c9e720b934b35';
  private clientSecret = '682f8bd49900aef92ab07608fc9cd52dbd085216';
  private githubCredentials = `client_id=${this.clientId}&client_secret=${this.clientSecret}`;

  constructor(private readonly integration: GithubIntegration) {
  }

  async getGithubUsers({ since }: { since: number }): Promise<GithubUser[]> {
    const githubUsers = await this.integration.getGithubUsers({ since });
    return githubUsers.data;
  }

  async getUserDetails({ username }: { username: string }): Promise<GithubProfile> {
    const userDetails = await this.integration.getUserDetails({ username });
    return userDetails.data;
  }

  async getUserRepositories({ username }: { username: string }): Promise<GithubRepository[]> {
    const userRepositories = await this.integration.getUserRepositories({ username });
    return userRepositories.data;
  }
}
