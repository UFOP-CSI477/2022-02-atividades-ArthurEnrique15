import express from 'express';
import 'dotenv/config';
import 'reflect-metadata';

import '../db-config';

import { router } from './routes';
const app = express();

app.use(express.json());

app.use(router);
export { app };
