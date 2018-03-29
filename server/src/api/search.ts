import axios from 'axios';
import cheerio from 'cheerio';
import querystring from 'querystring';

const selectUrl = 'http://www.biquku.la/modules/article/search.php';

export interface IBook {
  id: string,
  type: string,
  title: string,
  author: string,
  lastestChapter: string,
  updateTime: string
}

async function search(key: string) {
  const params = {
    searchkey: key
  };
  const results = await axios.post(selectUrl, querystring.stringify(params))
    .then((res) => {
      const html = res.data;
      const results = [];

      // 使用cheerio解析dom
      const $ = cheerio.load(html);
      const list = $('.grid tr');
      for (let i = 1; i < list.length; i++) {
        const items = $('td', list[i]);

        const regex = /\/(\d+)\/(\d+)/;
        const idString = $('a', items.eq(0)).attr('href');
        let id = '';
        let type = '';
        const macthResult = idString.match(regex)
        if (macthResult) {
          [, type, id] = macthResult;
        } else {
          throw new Error('parse html fail');
        }


        const title = $('a', items.eq(0)).text();
        const lastestChapter = $('a', items.eq(1)).text();
        const author = items.eq(2).text();
        const updateTime = items.eq(3).text();

        const book: IBook = {
          id,
          type,
          title,
          author,
          lastestChapter,
          updateTime,
        };

        results.push(book);
      }

      return results;
    })

  return results;
}

export default search;