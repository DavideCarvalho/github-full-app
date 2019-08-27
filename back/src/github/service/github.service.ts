import { AxiosResponse } from 'axios';
import { GithubUser } from '../dto';
import { GithubIntegration } from '../integration';
import { GithubRepository } from '../dto/github-user-repositories-response.dto';
import { Injectable } from '@nestjs/common';

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

  async getUserDetails({ username }: { username: string }): Promise<AxiosResponse<GithubUser[]>> {
    return this.integration.getUserDetails({ username });
  }

  async getUserRepositories({ username }: { username: string }): Promise<AxiosResponse<GithubRepository[]>> {
    return this.integration.getUserRepositories({ username });
  }
}
