const db = require('./server/db');
const app = require('./server/app');
const http = require('http');

const port = process.env.PORT || 3000;
const seed = !!process.env.SEED;

db.seed(seed)
.then(() => http.createServer(app)
.listen(port, () => console.log(`listening on port ${port}`)));
