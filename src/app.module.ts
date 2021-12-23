import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GoogleResultsModule } from './modules/google-results/google-results.module';
import { BingResultsModule } from './modules/bing-results/bing-results.module';

@Module({
  imports: [GoogleResultsModule, BingResultsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
