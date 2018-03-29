import Router from 'koa-router';
import api from '../api';

const router = new Router;

router.use(async (ctx, next) => {
  // 检验参数
  const searchKey = ctx.query.searchKey;
  if (searchKey === undefined || searchKey.trim() === '') {
    ctx.body = { success: false, msg: 'param is error' };
  } else {
    await next();
  }
})

router.get('/', async ctx => {
  const searchKey = ctx.query.searchKey;
  try {
    const data = await api.search(searchKey);
    return ctx.body = { success: false, data };
  } catch (error) {
    return ctx.body = { success: false, data: 'server can\'t get return' };
  }
})

export default router;