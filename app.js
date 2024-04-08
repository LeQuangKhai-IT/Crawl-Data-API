import express from  'express'
import cronData from './src/controller/cron.js'
const app = express()
const port = 3000

cronData()

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/api/v1/giaoduc/:id', (req, res) => {
  console.log("/api/v1/giaoduc/" + req.params)
  res.json({
    id: 5,
    title: "5string",
    content: "5string",
    url: "5string",
    time: "52024-04-08T17:55:03.616Z"
  })
})

app.get('/api/v1/tretho/:id', (req, res) => {
  console.log("/api/v1/tretho/:")
  res.json({
    id: 6,
    title: "6string",
    content: "6string",
    url: "6string",
    time: "52024-04-08T17:55:03.616Z"
  })
})

app.get('/api/v1/findByType', (req, res) => {
 
  res.json({
    id:2,
    title:  req.query.type,
    content: "7string",
    url: "7string",
    time: "72024-04-08T17:55:03.616Z"
  })
})

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})