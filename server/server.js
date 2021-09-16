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

app.put('/profile', (req, res) => {

  db.collection('profile').updateOne({ _id: 0 }, { $set: req.body }, (err, result) => {
    res.json(req.body)
  })

})

app.post('/test', (req, res) => {
  db.collection('th').insertOne({
    "_id": 1,
    "time": "10:56",
    "humidity": 55.0,
    "temperature": 26.2
  }, (err, result) => {
    res.send('ㅇ');
  })
})





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