import { Router, Request, Response } from 'express';
import product from './product';

const routes = Router();

routes.use('/product', product);
/**
 * #swagger.parameters['query'] = {
 *  in: 'query'
 *  description: 'Get a url'
 *  schema: {
 *    $ref: #/definitions
 *  }
 * }
 */

export default routes;
