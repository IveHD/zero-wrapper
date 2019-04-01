const glob = require('glob');
const Router = require('koa-router');
const router = new Router();

module.exports = (router_path, app) => {
    glob.sync(router_path + '/**/*.js').forEach(e => {
        require(e)(app);
    });
    app.user(router.routes());
    return app => {
        app.router = router;
        routers.forEach(app);
        app.user(router.routes());
        return app.router;
    }
}