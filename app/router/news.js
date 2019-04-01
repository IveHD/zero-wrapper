module.exports = app => {
    const { router, controller } = app;
    router.get('/news', controller.news.list);
    router.get('/about', (ctx, next) => {
        ctx.body = 'hello about';
    });
}