import { Module } from '@nestjs/common';
import { GithubController } from './controller';
import { GithubService } from './service';
import { GithubIntegration } from './integration';

@Module({
  imports: [],
  controllers: [GithubController],
  providers: [GithubService, GithubIntegration],
})
export class GithubModule {}
