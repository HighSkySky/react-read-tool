import mongoose = require('mongoose');
import { bookSchema } from '../lib/mongo';

import { IBook } from '../api/book';
import { IContent } from '../api/content';

interface IContents {
  title: string,
  contents: Array<IContent>
}

const Book = mongoose.model('Book', bookSchema);

export async function findBook(id: string, type: string) {
  let book = await new Promise((resolve, reject) => {
    Book.findOne({ id, type }, { _id: 0, chapters: {$slice: 1}, contents: 0 }, (err, book) => {
      if (err) throw new Error('db find fail');
      book ? resolve(book) : resolve()
    });
  });
  return book;
}

export async function findChapters(id: string, type: string) {
  let chapters = await new Promise((resolve, reject) => {
    Book.findOne({ id, type }, 
      { selectTime: 1, chapters: 1, _id: 0, id: 1, type: 1, title: 1 }, 
      (err, data) => {
        if (err) throw new Error('db find fail');
        data ? resolve(data) : resolve()
      });
  });
  return chapters;
}

export async function findContent(id: string, type: string, chapter: string) {
  let result = await new Promise((resolve, reject) => {
    Book.findOne({ id, type, "contents.chapter": chapter },
    { "contents.$": 1, _id: 0, title: 1 },
      (err, data: IContents) => {
        if (err) throw new Error('db find fail');
    })
    .lean()
    .then((data: IContents) => { 
      data ? resolve({ ...data.contents[0], bookTitle: data.title }) : resolve()
    })
  });
  return result;
}

export async function saveBook(data: IBook) {
  const { id, type } = data;
  await new Promise((resolve, reject) => {
    Book.updateOne({ id, type }, data, 
      { upsert: true }, (err) => {
      if (err) throw new Error('db update fail');
      resolve();
    });
  });
}

export async function saveContent(id: string, type: string, data: IContent) {
  await new Promise((resolve, reject) => {
    // Book
    const { bookTitle, ...value } = data
    Book.updateOne({ id, type, title: bookTitle }, 
      { $push: { contents: value }},
      { upsert: true },
      (err) => { 
        if (err) throw new Error('db update fail');
        resolve();
      }
    )
  });
}


