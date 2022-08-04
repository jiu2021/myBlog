const app = require('./app');
const dev_port = 8888;
const serve_port = 8889;
const port = serve_port;
app.listen(port, () => {
  console.log(`http://localhost:${port}`);
})