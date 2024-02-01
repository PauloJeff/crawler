import { NextFunction, Request, Response } from 'express';
import WebCrawlerService from '../services/web-crawler.service';
import BadRequestError from '../errors/bad-request.error';

export class ProductsController {
  static getProduct = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const { url } = req.query;
    
    if (typeof url !== 'string') {
      throw new BadRequestError({code: 400, message: "Url is a string!", logging: true})
    }

    try {
      const result = await WebCrawlerService.shaveProduct(url);

      return res.status(200).send(result)
    } catch (err) {
      next(err)
    }
  };
}
