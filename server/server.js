const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

let db;
const MongoClient = require('mongodb').MongoClient
MongoClient.connect('mongodb+srv://na0173:k6744835**.@cluster0.tyn0c.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', (err, client) => {
  if (err) return console.log(err);
  db = client.db('smartcare');

  app.listen(8080, () => {
    console.log('listening on 8080');
  });
})


app.get('/:id', (req, res) => {
  db.collection(req.params.id).find().toArray((err, result) => {
    res.send(result)
  });
})

app.put('/:id', (req, res) => {
  db.collection(req.params.id).updateOne({ _id: 0 }, { $set: req.body }, (err, result) => {
    res.json(req.body)
  })
})

app.post('/:id', (req, res) => {
  res.send(req.body)
  // db.collection(req.params.id).insertOne(req.body, (err, result) => {
  //   res.send(result)
  // })
})

const token = '2043330414:AAFWFT1PQ6P0kAmh5331WuuiDRHzXEslsgg';
const id = '1992525601';
const message = '안녕'
app.get(`https://api.telegram.org/bot${token}/sendmessage?chat_id=${id}&text=${message}`)





// alarm = {
//   "거실 적외선 센서": 240,
//   "방 적외선 센서": 200,
//   "화장실 적외선 센서": 120,
//   "거실 인체감지 센서": 100,
//   "방 인체감지 센서": 60,
//   "화장실 인체감지 센서": 70
// }

// th={
//   time: "11:01",
//   humidity: 60,
//   temperature: 26.2
// }

// sensorValue= {
//   "현관문 움직임 감지": 1,
//   "방문 움직임 감지": 0,
//   "화장문 움직임 감지": 0,
//   "거실 인체 감지": 1,
//   "방 인체 감지": 1,
//   "화장실 인체 감지": 1,
//   "hour": 20,
//   "min": 28,
//   "sec": 54
// }