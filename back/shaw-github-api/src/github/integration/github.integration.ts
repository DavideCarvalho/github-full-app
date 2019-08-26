import { HttpService } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { GithubUsersResponse } from '../dto';
import { GithubRepositoriesResponse } from '../dto/github-user-repositories-response.dto';

export class GithubIntegration {

  private githubBaseUrl = 'http://api.github.com/';
  private clientId = '82b76b8c9e720b934b35';
  private clientSecret = '682f8bd49900aef92ab07608fc9cd52dbd085216';
  private githubCredentials = `client_id=${this.clientId}&client_secret=${this.clientSecret}`;

  constructor(private readonly http: HttpService) {
  }

  async getGithubUsers({ since }: { since: number }): Promise<AxiosResponse<GithubUsersResponse[]>> {
    return this.http.get<GithubUsersResponse[]>(`${this.githubBaseUrl}users?since=${since}`, {
      params: {
        since,
      },
    }).toPromise();
  }

  async getUserDetails({ username }: { username: string }) {
    return this.http.get<GithubUsersResponse[]>(`${this.githubBaseUrl}users/${username}${this.githubCredentials}`).toPromise();
  }

  async getUserRepositories({ username }: { username: string }) {
    return this.http.get<GithubRepositoriesResponse[]>(`${this.githubBaseUrl}users/${username}/repos${this.githubCredentials}`).toPromise();
  }
}
