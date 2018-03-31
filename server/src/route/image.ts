import Router from 'koa-router';
import fs from 'fs';
import path from 'path';
import config from '../config';
import api from '../api';

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
});

router.get('/', async ctx => {
  const { id, type } = ctx.query;
  let image: any;
  let imagePath = path.resolve(config.imagePath, `./${type}-${id}.jpg`);
  try {
    // 判断本地是否存在这张图片
    image = await new Promise((resolve, reject) => {
      fs.readFile(imagePath, (error: Error, data) => {
        if (error) reject(error);
        resolve(data);
      });
    });
  } catch (error) {
    try {
      // 本地不存在图片，尝试从目标网站抓取图片
      image = await api.getImage(type, id);
      await new Promise((resolve, reject) => {
        fs.writeFile(imagePath, image, (error: Error) => {
          if (error) reject(error);
          resolve()
        })
      })
    } catch (error) {
      // 抓取图片失败，使用通用备份图片
      imagePath = path.resolve(config.imagePath, 'nocover.jpg');
      image = await new Promise((resolve, reject) => {
        fs.readFile(imagePath, (error: Error, data) => {
          if (error) {
            reject(error);
            return ctx.body = { success: false, msg: 'server can\'t return' };
          }
          resolve(data);
        });
      });
    }
  } finally {
    ctx.set('Content-Type', 'image/jpeg')
    ctx.set("Cache-Control", `max-age=${config.updateTime}`);
    ctx.body = image
  }
});

export default router;

