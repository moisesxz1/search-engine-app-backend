import { Controller, Get, Query } from '@nestjs/common';
import { GoogleResultsService } from './google-results.service';

export interface QueryParamsDTO {
  keyword: string;
}

export interface Result {
  title: string;
}

@Controller()
export class GoogleResultsController {
  constructor(private readonly googleResultsService: GoogleResultsService) {}

  @Get('google-results')
  async googleResults(
    @Query() queryParams: QueryParamsDTO,
  ): Promise<Array<Result>> {
    return await this.googleResultsService.googleResults(queryParams);
  }
}
