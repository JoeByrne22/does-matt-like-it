const port = process.env.port || 4000;
const dbUri = process.env.MONGODB_URI || 'mongodb://localhost/DoesMattLikeIt';
const secret = process.env.SECRET || 'doesMattLikeIt';

module.exports = {
  port, dbUri, secret
};
