const next = require('next')
const Koa = require('koa')
const Router = require('koa-router')
const KoaBody = require('koa-body')
const { db } = require('./db')
db()
const { dev } = require('./dev')
const Api = require('./api')

const port = parseInt(process.env.PORT, 10) || 3000
const app = next({ dev })
const handle = app.getRequestHandler()


app
      .prepare()
      .then(() => {
            const server = new Koa()
            const router = new Router()

            server.use(KoaBody())

            router.use('', Api.routes())

            router.get('/angles', async ctx => {
                  await app.render(ctx.req, ctx.res, '/angles', ctx.query)
                  ctx.respond = false
            })

            router.get('/station', async ctx => {
                  await app.render(ctx.req, ctx.res, '/station', ctx.query)
            })

            router.get('*', async ctx => {
                  await handle(ctx.req, ctx.res)
                  ctx.respond = false
            })

            server.use(async (ctx, next) => {
                  ctx.res.statusCode = 200
                  await next()
            })

            server.use(router.routes())
                  .use(router.allowedMethods())

            server.listen(port, () => {
                  console.log(`> Ready on http://localhost:${port}`)
            })
      })