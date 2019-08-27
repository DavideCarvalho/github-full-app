import { Controller, Get, Param, Query } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { GithubService } from '../service';
import { GithubUser } from '../dto';
import { GithubRepository } from '../dto/github-user-repositories-response.dto';

@Controller('/api/users')
export class GithubController {
  constructor(private readonly service: GithubService) {
  }

  @Get()
  async getGithubUsers(@Query('since') since: number): Promise<GithubUser[]> {
    return this.service.getGithubUsers({ since });
  }

  @Get(':username/details')
  async getUserDetails(@Param('username') username: string): Promise<AxiosResponse<GithubUser[]>> {
    return this.service.getUserDetails({ username });
  }

  @Get(':username/repos')
  async getUserRepositories(@Param('username') username: string): Promise<AxiosResponse<GithubRepository[]>> {
    return this.service.getUserRepositories({ username });
  }
}
