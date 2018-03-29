import path from 'path';

const config = {
  port: 8080,
  mongodb: 'mongodb://localhost/read',
  imagePath: path.resolve(__dirname, '../image'),
  updateTime: 60 * 60 * 1000
};

export default config;