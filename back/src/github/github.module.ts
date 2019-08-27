import { HttpModule, Module } from '@nestjs/common';
import { GithubController } from './controller';
import { GithubService } from './service';
import { GithubIntegration } from './integration';

@Module({
  imports: [HttpModule],
  controllers: [GithubController],
  providers: [GithubIntegration, GithubService],
})
export class GithubModule {}
