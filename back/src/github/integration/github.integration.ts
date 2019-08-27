import { HttpService, Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { GithubUser } from '../dto';
import { GithubRepository } from '../dto/github-user-repositories-response.dto';

@Injectable()
export class GithubIntegration {

  private githubBaseUrl = 'http://api.github.com/';
  private clientId = '82b76b8c9e720b934b35';
  private clientSecret = '682f8bd49900aef92ab07608fc9cd52dbd085216';
  private githubCredentials = `client_id=${this.clientId}&client_secret=${this.clientSecret}`;

  constructor(private readonly http: HttpService) {
  }

  async getGithubUsers({ since }: { since: number }): Promise<AxiosResponse<GithubUser[]>> {
    return this.http.get<GithubUser[]>(`${this.githubBaseUrl}users?since=${since}&per_page=10`, {
      params: {
        since,
      },
    }).toPromise();
  }

  async getUserDetails({ username }: { username: string }) {
    return this.http.get<GithubUser[]>(`${this.githubBaseUrl}users/${username}${this.githubCredentials}`).toPromise();
  }

  async getUserRepositories({ username }: { username: string }): Promise<AxiosResponse<GithubRepository[]>> {
    return this.http.get<GithubRepository[]>(`${this.githubBaseUrl}users/${username}/repos${this.githubCredentials}`).toPromise();
  }
}
