import mongoose = require('mongoose');
import { bookSchema } from '../lib/mongo';

import { IBook } from '../api/book';
import { IContent } from '../api/content';

const Book = mongoose.model('Book', bookSchema);

export async function findBook(id: string, type: string) {
  let book = await new Promise((resolve, reject) => {
    Book.findOne({ id, type }, { _id: 0, chapters: {$slice: 1}, content: 0 }, (err, book) => {
      if (err) throw new Error('db find fail');
      book ? resolve(book) : resolve()
    });
  });
  return book;
}

export async function findChapters(id: string, type: string) {
  let chapters = await new Promise((resolve, reject) => {
    Book.findOne({ id, type }, 
      { selectTime: 1, chapters: 1, _id: 0 }, 
      (err, data) => {
        if (err) throw new Error('db find fail');
        data ? resolve(data) : resolve()
      });
  });
  return chapters;
}

export async function findContent(id: string, type: string, chapter: string) {
  let result = await new Promise((resolve, reject) => {
    Book.findOne({ id, type, "contents.id": chapter },
    { "contents.$": 1, _id: 0 },
      (err, data) => {
        if (err) throw new Error('db find fail');
        data ? resolve(data) : resolve()
    });
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
    // Book.
    Book.updateOne({ id, type }, 
      { $push: { contents: data }},
      { upsert: true },
      (err) => { 
        console.log(err)
        if (err) throw new Error('db update fail');
        resolve();
      }
    )
  });
}


