import { NextFunction, Request, Response } from 'express';
import { CustomError } from '../errors/custom.error';
import { isCelebrateError } from 'celebrate';

const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof CustomError) {
    const { statusCode, errors, logging } = err;
    if (logging) {
      console.error(
        JSON.stringify(
          {
            code: err.statusCode,
            errors: err.errors,
            stack: err.stack,
          },
          null,
          2
        )
      );
    }

    return res.status(statusCode).send({ errors });
  }

  if (isCelebrateError(err)) {
    let data = {};
    for (const [segment, joiError] of err.details.entries()) {
      joiError.details.forEach((err) => {
        const obj = buildObjWithValue(
          err.path.map((item) => item.toString()),
          err.message
        );
        data = mergeDeep(data, obj);
      });
    }
    return res.status(400).json(data);
  }

  console.error(JSON.stringify(err, null, 2));
  return res
    .status(500)
    .send({ errors: [{ message: 'Something went wrong' }] });
};

const buildObjWithValue = (paths: string[], value = '') => {
  return paths.reduceRight(
    (acc, item, index) => ({
      [item]: index === paths.length - 1 ? value : acc,
    }),
    {}
  );
};

const isObject = (item: any) => {
  return item && typeof item === 'object' && !Array.isArray(item);
};

const mergeDeep = (target: any, source: any) => {
  let output = Object.assign({}, target);
  if (isObject(target) && isObject(source)) {
    Object.keys(source).forEach((key) => {
      if (isObject(source[key])) {
        if (!(key in target)) {
          Object.assign(output, { [key]: source[key] });
        } else {
          output[key] = mergeDeep(target[key], source[key]);
        }
      } else {
        Object.assign(output, { [key]: source[key] });
      }
    });
  }
  return output;
};

export default errorHandler