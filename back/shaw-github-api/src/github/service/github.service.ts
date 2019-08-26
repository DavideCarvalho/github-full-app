import { HttpService } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { GithubUsersResponse } from '../dto';
import { GithubIntegration } from '../integration';
import { GithubRepositoriesResponse } from '../dto/github-user-repositories-response.dto';

export class GithubService {

  private githubBaseUrl = 'http://api.github.com/';
  private clientId = '82b76b8c9e720b934b35';
  private clientSecret = '682f8bd49900aef92ab07608fc9cd52dbd085216';
  private githubCredentials = `client_id=${this.clientId}&client_secret=${this.clientSecret}`;

  constructor(private readonly integration: GithubIntegration) {
  }

  async getGithubUsers({ since }: { since: number }): Promise<AxiosResponse<GithubUsersResponse[]>> {
    return this.integration.getGithubUsers({ since });
  }

  async getUserDetails({ username }: { username: string }): Promise<AxiosResponse<GithubUsersResponse[]>> {
    return this.integration.getUserDetails({ username });
  }

  async getUserRepositories({ username }: { username: string }): Promise<AxiosResponse<GithubRepositoriesResponse[]>> {
    return this.integration.getUserRepositories({ username });
  }
}
