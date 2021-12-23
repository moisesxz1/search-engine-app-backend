import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class AppService {
  async googleResults(queryParams: any): Promise<any> {
    const { keyword } = queryParams;
    const response = await axios.get(
      `https://serpapi.com/search.json?engine=google&q=${keyword}&api_key=2d45d5d19555d93e861c45fe7912e1dfd1cebc37e8f3575e289318c3ef4a91e7`,
    );

    return response.data;
  }

  async bingResults(queryParams: any): Promise<any> {
    const { keyword } = queryParams;
    const response = await axios.get(
      `https://serpapi.com/search.json?engine=bing&q=${keyword}&api_key=2d45d5d19555d93e861c45fe7912e1dfd1cebc37e8f3575e289318c3ef4a91e7`,
    );

    return response.data;
  }
}
