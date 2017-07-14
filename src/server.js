const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Fuck this World')
})

app.listen(port, () => {
  console.log('server active on port', port);
})
