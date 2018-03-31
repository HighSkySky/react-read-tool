import axios from 'axios';

async function getImage(type: string, id: string) {
  const apiUri = `http://www.biquku.la/d/image/${type}/${id}/${id}s.jpg`
  const result = await axios.get(apiUri, {
      responseType: 'arraybuffer'
    })
    .then((res) => {
      if (res.headers && (res.headers['content-type'] === 'image/jpeg')) {
        return res.data;
      } else {
        throw new Error('can\'t get image');
      }
    });

  return result;
}

export default getImage;