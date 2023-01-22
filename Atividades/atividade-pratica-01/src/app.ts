import express from 'express';
import 'dotenv/config';
import 'reflect-metadata';

import '../db-config';

const app = express();

app.use(express.json());

export { app };