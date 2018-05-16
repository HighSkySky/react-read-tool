import mongoose from 'mongoose';
import config from '../config';

mongoose.connect(config.mongodb);

const db = mongoose.connection;

db.on('error', () => {
  throw new Error('connect mongodb fail');
});

db.on('open', () => {
  console.log('connect mongodb success');
});


export const bookSchema = new mongoose.Schema({
  id: { type: 'string', required: true },
  type: { type: 'string', required: true },
  title: { type: 'string', required: true },
  author: { type: 'string', required: true },
  style: { type: 'string', required: true },
  intro: { type: 'string', required: true },
  updateTime: { type: 'string', required: true },
  selectTime: { type: 'string', required: true },
  lastestChapter: { type: 'string', required: true },
  chapters: [{
    _id: false,
    id: { type: 'string', required: true },
    title: { type: 'string', required: true },
  }],
  contents: [{
    _id: false,
    chapter: { type: 'string', required: true },
    title: { type: 'string', required: true },
    content: { type: 'string', required: true  },
    nextId: { type: 'string', required: true  },
    lastId: { type: 'string', required: true  },
  }]
}, { versionKey:false })
