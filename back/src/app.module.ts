import { HttpModule, Module } from '@nestjs/common';
import { GithubModule } from './github';

@Module({
  imports: [GithubModule, HttpModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
