import Router from 'koa-router';
import api from '../api';

const router = new Router;

router.use(async (ctx, next) => {
  // 检验参数
  const key = ctx.query.key;
  if (key === undefined || key.trim() === '') {
    ctx.body = { success: false, msg: 'param is error' };
  } else {
    await next();
  }
})

router.get('/', async ctx => {
  const key = ctx.query.key;
  try {
    const data = await api.search(key);
    return ctx.body = { success: true, data };
  } catch (error) {
    return ctx.body = { success: false, data: 'server can\'t get return' };
  }
})

export default router;