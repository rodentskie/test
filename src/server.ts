import 'reflect-metadata';
import dotenv from 'dotenv';
import { Server } from 'http';
import * as db from './data/index';
import cors from 'cors';
import express from 'express';

dotenv.config();
let server: Server;

const start = async () => {
  const app = express();
  app.use(cors());

  await db.start();

  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));

  const port = process.env.PORT || 5000;

  app.get('/', (req, res) => res.status(200).send('Welcome to the test.'));

  server = app.listen(port, () => {
    console.log(`🚀⚙️  Server ready at http://localhost:${port}`);
  });

  return server;
};

const stop = async () => {
  await new Promise((resolve) => server.close(resolve));
  await db.stop();
};

export { start, stop };
