const express = require('express');
const path = require('path')

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(express.static(path.join(__dirname + '/public')))

require('./routes/api-routes')(app)


app.listen(PORT, () => {
  console.log(`App now listening on ${PORT}`)
})