import { Controller, Get, Query } from '@nestjs/common';
import {
  QueryParamsDTO,
  Result,
} from '../google-results/google-results.controller';
import { BingResultsService } from './bing-results.service';

@Controller()
export class BingResultsController {
  constructor(private readonly bingResultsService: BingResultsService) {}

  @Get('bing-results')
  async bingResults(
    @Query() queryParams: QueryParamsDTO,
  ): Promise<Array<Result>> {
    return await this.bingResultsService.bingResults(queryParams);
  }
}
