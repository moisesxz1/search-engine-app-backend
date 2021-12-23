import { Injectable } from '@nestjs/common';
import axios from 'axios';
import {
  QueryParamsDTO,
  Result,
} from '../google-results/google-results.controller';

@Injectable()
export class BingResultsService {
  async bingResults(queryParams: QueryParamsDTO): Promise<Array<Result>> {
    const { keyword } = queryParams;
    const query = `https://serpapi.com/search.json?engine=bing&q=${keyword}&api_key=${process.env.SERP_API_KEY}`;

    const response = await axios.get(query);

    return response.data;
  }
}
