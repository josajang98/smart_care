const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const server = require('http').createServer(app);
const io = require('socket.io')(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"]
  }
});



let db;
const MongoClient = require('mongodb').MongoClient
MongoClient.connect('mongodb+srv://na0173:k6744835**.@cluster0.tyn0c.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', (err, client) => {
  if (err) return console.log(err);
  db = client.db('smartcare');

  server.listen(8080, () => {
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
  db.collection(req.params.id).insertOne(req.body, (err, result) => {
    res.send(result)
  })
})

io.on('connection', socket => {
  socket.on("roomjoin", (userid) => {
    socket.join(userid);
  });

  socket.on("data", (touserid) => {
    io.to(touserid).emit("data", true);
  });
})