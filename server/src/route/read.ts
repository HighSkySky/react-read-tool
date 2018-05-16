import Router from 'koa-router';
import api from '../api';
import { saveContent, findContent } from '../models/Book';  

const router = new Router();

const regex = /^[0-9]+$/;

router.use(async (ctx, next) => {
  const { id, type, chapter } = ctx.query;
  // 参数校验
  if (!(regex.test(id) && regex.test(type) && regex.test(chapter))) {  
    return ctx.body = { success: false, msg: 'param is error' };
  } else {
    await next();
  }
});

router.get('/', async ctx => {
  const { id, type, chapter } = ctx.query;
  try {
    // 搜索数据库中是否有章节
    let data = await findContent(id, type, chapter);
    if (data) {
      // 数据库中存在，则直接返回内容
      return ctx.body = { success: true, data, form: 'db' };
    } else {
      // 数据库中不存在，从网络抓取内容
      let data = await api.getContent(id, type, chapter);
      await saveContent(id, type, data);
      return ctx.body = { success: true, data, form: 'net' };
    }
  } catch (error) {
    return ctx.body = { success: false, data: 'server con\'t return '};
  }
});

export default router;