const Koa = require('koa');
const app = new Koa();

const Router = require('koa-router');
const router = new Router();

const routers = require('../app/router/news');

const path = require('path');

let CONTROLLER_PATH = './app/controller';
const controllers = require('./core/load_controller')(path.resolve(process.cwd(), CONTROLLER_PATH));

app.router = router;

app.controller = controllers

routers(app);

app.use(router.routes());

app.listen(9000, () => {
    console.log('listenint port:9000');
});