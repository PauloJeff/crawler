const axios = require('axios');
import * as cheerio from 'cheerio';
import { Product } from '../entities/product';

export default class WebCrawlerService {
  static shaveProduct = async (url: string) => {
    const response = await axios.get(url).catch(function (error) {
      if (error.response) {
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        console.log(error.request);
      } else {
        console.log('Error', error.message);
      }
      console.log(error.config);
    });
    var selector = cheerio.load(response.data);
    const data = JSON.parse(
      selector('script[type="application/ld+json"]').text()
    );

    const product = new Product(
      data.name,
      data.gtin13,
      data.brand.name,
      data.image,
      data.offers.price
    );

    return product;
  };
}
