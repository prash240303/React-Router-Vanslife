const { createRequestHandler } = require("vercel-serverless-functions");
const { default: NotFound } = require("../PageNotFound404");

module.exports = createRequestHandler({
  async render(req) {
    return {
      status: 404,
      headers: {
        "Content-Type": "text/html",
      },
      body: renderToStaticMarkup(<NotFound />),
    };
  },
});
