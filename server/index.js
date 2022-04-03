import dotenv from 'dotenv';
import express from 'express';
import {api} from './api';
import {API_ROUTES} from './constants/routes';

dotenv.config();

const server = express();

server.use(API_ROUTES.ROOT, api);

console.log('server is running on port:', process.env.PORT);
server.listen(process.env.PORT);

export default server;
