import { Router, query } from 'express';
import { ProductsController } from '../controller/products.controller';
const { celebrate, Joi, errors, Segments } = require('celebrate');

const router = Router();
router.get(
  '/',
  celebrate(
    {
      [Segments.QUERY]: {
        url: Joi.string().uri().not(0).required(),
      },
    },
    {
      messages: {
        'string.empty': '{{#label}} cant be empty!',
        'any.required': '{{#label}} is a required field for this operation',
        'string.uri': '{{#label}} not is a url valid',
      },
    }
  ),
  ProductsController.getProduct
);

export default router;
