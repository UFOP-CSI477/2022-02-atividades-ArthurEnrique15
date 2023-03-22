import express, { Request, Response, NextFunction } from 'express';
import 'dotenv/config';
import 'reflect-metadata';
import 'express-async-errors';

import cors from 'cors';

import '../db-config';

import { router } from './routes';
import { AppError } from './errors/app-error';

const app = express();

app.use(cors());

app.use(express.json());

app.use(router);

app.use(
  (error: Error, request: Request, response: Response, next: NextFunction) =>
    response.status(error instanceof AppError ? 400 : 500).json({
      status: 'error',
      message: error.message,
    }),
);

export { app };
