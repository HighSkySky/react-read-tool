import Router from 'koa-router';
import search from './search';
import book from './book';
import chapter from './chapter';
import read from './read';
import image from './image';

const router = new Router();
router.use('/search', search.routes());
router.use('/book', book.routes());
router.use('/chapter', chapter.routes());
router.use('/read', read.routes());
router.use('/image', image.routes());

export default router;