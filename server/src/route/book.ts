import Router from 'koa-router';
import api from '../api';
import { saveBook, findBook } from '../models/Book';
import { IBook } from '../api/book';
import config from '../config';

const router = new Router();

const regex = /^[0-9]+$/;

router.use(async (ctx, next) => {
  const { id, type } = ctx.query;
  // 参数校验
  if (!(regex.test(id) && regex.test(type))) {
    return ctx.body = { success: false, msg: 'param is error' };
  } else {
    await next();
  }
})

router.get('/', async ctx => {
  const { id, type } = ctx.query;
  try {
    // 搜索数据库中是否存在书籍
    let data = await findBook(id, type);
    if (data) {
      // 数据库中存在,则判断写入的时间是否超过预设时间
      const nowTime = new Date().getTime();
      const { selectTime } = <IBook>data;
      if (nowTime - Number(selectTime) < config.updateTime) {
        // 时间符合，直接返回查询内容
        return ctx.body = { success: true, data, from: 'db' };
      } else {
        // 时间不符合，从网络上抓取内容
        try {
          let data = await api.getBook(id, type);
          await saveBook(data);
          return ctx.body = { success: true, data, from: 'net' };
        } catch (error) {
          // 网络抓取失败，依旧返回数据库内容
          return ctx.body = { success: true, data, from: 'db' };
        }
      }
    } else {
      // 数据库中不存在，直接从网络抓取，存数据库并返回
      let data = await api.getBook(id, type);
      await saveBook(data);
      return ctx.body = { success: true, data, from: 'net' };
    }
  } catch (err) {
    return ctx.body = { success: false, data: 'server con\'t return' };
  }
})

export default router;