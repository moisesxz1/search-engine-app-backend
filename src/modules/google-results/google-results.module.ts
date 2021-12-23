import { Module } from '@nestjs/common';
import { GoogleResultsController } from './google-results.controller';
import { GoogleResultsService } from './google-results.service';

@Module({
  imports: [],
  controllers: [GoogleResultsController],
  providers: [GoogleResultsService],
})
export class GoogleResultsModule {}
