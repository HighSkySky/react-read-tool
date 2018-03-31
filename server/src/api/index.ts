import axios from 'axios';

import search from './search';
import getBook from './book';
import getContent from './content';
import getImage from './image';

// 设置请求的最长时间
axios.defaults.timeout = 5000;

export default {
  search,
  getBook,
  getContent,
  getImage
};
