require("marko/node-require");
const template = require("../view/marko.marko");
class News {
    async list(ctx, next) {
        ctx.type = "html";
        ctx.body = template.stream({
          name: "Frank",
          count: 30,
          colors: ["red", "green", "blue"]
        });
    }
}

module.exports = News;