const app = require('./app');
const dev_port = 8000;
const serve_port = 8889;
const port = dev_port;
app.listen(port, () => {
  console.log(`http://localhost:${port}`);
})