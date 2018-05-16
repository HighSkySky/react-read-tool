import axios from 'axios';
import cheerio from 'cheerio';

export interface IContent {
  bookTitle: string,
  chapter: string,
  title: string,
  content: string,
  nextId: string,
  lastId: string
}

function urlSplit(text: string): string {
  return text.split('.')[0];
}

async function getContent(id: string, type: string, chapter: string) {
  const url = `http://www.biquku.la/${type}/${id}/${chapter}.html`
  const result: IContent = await axios.get(url)
    .then((res) => {
      const html = res.data

      const $ = cheerio.load(html,{decodeEntities: false});
      const bookTitle = $('.con_top a').eq(1).text()
      const title = $('.bookname h1').eq(0).text();
      const content = <string>($('#content').html());
      const buttem = $('.bottem2 a');
      const nextId = urlSplit(buttem.eq(1).attr('href'));
      const lastId = urlSplit(buttem.eq(3).attr('href'));

      return {
        bookTitle,
        chapter,
        title,
        content,
        nextId,
        lastId
      }
    })
  return result;
}

export default getContent;