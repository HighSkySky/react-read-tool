import axios from 'axios';
import cheerio from 'cheerio';
import url from 'url';

interface IChapter {
  id: string,
  title: string,
  content?: string,
  nextId?: string,
  lastId?: string
}

export interface IBook {
  id: string,
  type: string,
  style: string,
  title: string,
  author: string,
  updateTime: string,
  lastestChapter: string,
  intro: string,
  selectTime: number,
  chapters: IChapter[]
}

function stringSplit(text: string):string {
  return text.split('：')[1];
}

function urlSplit(text: string): string {
  return text.split('.')[0];
}

async function getBook(id: string, type:string) {
  const url = `http://www.biquku.la/${type}/${id}`

  const result = await axios.get(url)
    .then((res) => {
      const html = res.data
      const $ = cheerio.load(html)

      let style = ''
      const styleMatch = $('.con_top').text().match(/>\s?([\s\S]*)\s>/)
      if (styleMatch) {
        style = styleMatch[1];
      } else {
        throw new Error('parse html fail');
      }

      const title = $('#info h1').text();
      const htmlInfo = $('#info p');
      const author = stringSplit(htmlInfo.eq(0).text());
      const updateTime = stringSplit(htmlInfo.eq(2).text());
      const lastestChapter = stringSplit(htmlInfo.eq(3).text());
      const intro = $('#intro p').eq(0).text();
      const selectTime = new Date().getTime();

      const chapters = []
      const lists = $('#list a')
      for (let i = 0; i < lists.length; i++) {
        const item = lists.eq(i)
        const chapter = {
          id: urlSplit(item.attr('href')),
          title: item.text()
        }
        chapters.push(chapter)
      }

      const result: IBook = {
        id,
        type,
        style,
        title,
        author,
        updateTime,
        lastestChapter,
        chapters,
        intro,
        selectTime
      }

      return result
    })
    .catch((err) => {
      throw new Error(err)
    })

  return result
}

export default getBook;