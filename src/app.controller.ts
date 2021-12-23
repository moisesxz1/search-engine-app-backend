import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('google-results')
  async googleResults(@Query() queryParams: any): Promise<any> {
    return await this.appService.googleResults(queryParams);
  }

  @Get('bing-results')
  async bing(@Query() queryParams: any): Promise<any> {
    return await this.appService.bingResults(queryParams);
  }
}
