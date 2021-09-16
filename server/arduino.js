//db연결
let db;
const MongoClient = require('mongodb').MongoClient
MongoClient.connect('mongodb+srv://na0173:k6744835**.@cluster0.tyn0c.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', (err, client) => {
  if (err) return console.log(err);
  db = client.db('smartcare');

})

const SerialPort = require('serialport')
const serialPort = new SerialPort('COM8', {
  baudRate: 9600
});

let count = 0;
let values = [];
const display = [true, true, true, true, true, true, true, true];
serialPort.on('data', function (data) {
  const datas = data.toString(); //데이터를 문자열로 변환

  for (let i = 0; i < datas.length; i++) {
    values.push(datas.substr(i, 1));
    if (datas[i] === ' ') count++;
    if (count === 5) {
      const today = new Date();

      const hours = today.getHours(); // 시
      const minutes = today.getMinutes();  // 분
      const seconds = today.getSeconds();  // 초

      //인체감지센서는 다른 센서와 기본 값이 다르기 때문에 맞춰줌
      for (let i = 5; i < 8; i++) {
        values[i] = parseInt(values[i]) ? 0 : 1;
      }

      const d = {
        irSensor1Value: values[0],
        irSensor2Value: values[1],
        irSensor3Value: values[2],
        flameSensorValue: values[3],
        mq135SensorValue: values[4],
        pirSensor1Value: values[5],
        pirSensor2Value: values[6],
        pirSensor3Value: values[7],
        h1: values.slice(9, 13).join(''),
        t1: values.slice(14, 18).join(''),
        h2: values.slice(19, 23).join(''),
        t2: values.slice(24, 28).join(''),
        hour: hours,
        min: minutes,
        sec: seconds,
        display: display

      }

      db.collection('sensor').insertOne(d, (err, result) => {
        for (let i = 0; i < 8; i++) {

          if (parseInt(values[i]) === 0 && display[i] === true) {

            mkFalse(display, i);
            setTimeout(() => {
              mkTrue(display, i)
            }, 60000)
          }
        }
        values = [];
        count = 0;
        console.log('저장완료');
      })
      //print(d);
    }
  }
});


const print = (data) => {
  console.log(`적외선 감지 1번 센서:${data.irSensor1Value} 적외선 감지 2번 센서:${data.irSensor2Value} 적외선 감지 3번 센서:${data.irSensor3Value}\n`);

  console.log(`불꽃 감지 센서:${data.flameSensorValue} 유해가스 감지 센서:${data.mq135SensorValue}\n`);

  console.log(`인체 감지 1번 센서:${data.pirSensor1Value} 인체 감지 2번 센서:${data.pirSensor2Value} 인체 감지 3번 센서:${data.pirSensor3Value}\n`);

  console.log(`1번 센서 습도:${data.h1} 1번 센서 온도:${data.t1}`);
  console.log(`2번 센서 습도:${data.h2} 2번 센서 온도:${data.t2}\n`);
  console.log(`현재시간 ${data.hour} ${data.min} ${data.sec}\n`)
  console.log(`display=${data.display}\n`)
  values = [];
  count = 0;
}

const mkTrue = (arr, idx) => {
  arr[idx] = true;

}

const mkFalse = (arr, idx) => {
  arr[idx] = false;

}