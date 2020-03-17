const express = require('express')
const app = express()
const port = 3000
const path = require('path')
app.use(express.static('public'))


app.listen(port, () => console.log(`Example app listening on port ${port}!`))

app.get('/catinfo', (req, res) => {
    const cat = {
      'name': 'Frank',
      'age': 6,
      'weight': 5,
    };
    res.json(cat);
  });