import Koa from 'koa';
import http from 'http'

import config from './config';
import router from './route';

const app = new Koa();

app.use(router.routes());
app.use(router.allowedMethods());

const server = http.createServer(app.callback())
server.listen(config.port, () => 
  console.log('server is starting at localhost:', config.port)
);