import express from  'express'
import cronData from './src/controller/cron.js'
import { getItem, getListItem } from './src/modal/crud.js'
const app = express()
const port = 3000

cronData()

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/api/v1/giaoduc/:id', async (req, res) => {
  getItem(req.params.id,"giaoducs")
  .then(function(result) {
    if(result[0] == null){
      res.statusCode = 404
    } else {
      res.send(result[0])
    }
    
   
 })
})

app.get('/api/v1/tretho/:id',async (req, res) => {
  getItem(req.params.id,"trethos")
  .then(function(result) {
    if(result[0] == null){
      res.statusCode = 404
    } else {
      res.send(result[0])
    }
 })
})

app.get('/api/v1/findByType',async (req, res) => {
  
  getListItem(req.query,"trethos")
  .then(function(results) {
    res.send(results[0])
 })
})

app.listen(port, (error) => {
  if (error) console.log(error);
  console.log(`App listening on port ${port}`)
})