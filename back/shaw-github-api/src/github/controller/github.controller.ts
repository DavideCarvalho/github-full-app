import { Controller, Get, Param, Query } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { GithubService } from '../service';
import { GithubUsersResponse } from '../dto';
import { GithubRepositoriesResponse } from '../dto/github-user-repositories-response.dto';

@Controller('/api/users')
export class GithubController {
  constructor(private readonly service: GithubService) {
  }

  @Get()
  async getGithubUsers(@Query('since') since: number): Promise<AxiosResponse<GithubUsersResponse[]>> {
    return this.service.getGithubUsers({ since });
  }

  @Get(':username/details')
  async getUserDetails(@Param('username') username: string): Promise<AxiosResponse<GithubUsersResponse[]>> {
    return this.service.getUserDetails({ username });
  }

  @Get(':username/repos')
  async getUserRepositories(@Param('username') username: string): Promise<AxiosResponse<GithubRepositoriesResponse[]>> {
    return this.service.getUserRepositories({ username });
  }
}
