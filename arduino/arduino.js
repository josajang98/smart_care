import axios from 'axios';
import io from 'socket.io-client';

import SerialPort from 'serialport'
const serialPort = new SerialPort('COM8', {
  baudRate: 9600
});

const socket = io.connect('https://smartcare.loca.lt')

let count = 0;
let values = [];
const delay = 60000;
const display = [true, true, true, true, true, true, true, true];

serialPort.on('data', function (data) {
  const datas = data.toString(); //데이터를 문자열로 변환

  for (let i = 0; i < datas.length; i++) {
    if (datas.substr(i, 1) === '.') values.push(datas.substr(i, 1));
    else values.push(parseInt(datas.substr(i, 1)));
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
        hour: hours,
        min: minutes,
        sec: seconds,
      }
      const arr = ['현관문 움직임 감지', '화장실문 움직임 감지', '방문 움직임 감지', '불꽃감지센서 감지', '연기감지센서 감지', '거실 인체 감지', '화장실 인체 감지', '방 인체 감지']
      const th1 = {
        humidity: values.slice(9, 13).join(''),
        temperature: values.slice(14, 18).join(''),
        time: `${hours}:${minutes}`
      }
      const th2 = {
        humidity: values.slice(19, 23).join(''),
        temperature: values.slice(24, 28).join(''),
        time: `${hours}:${minutes}`
      }
      let upload = false;
      for (let i = 0; i < 8; i++) {
        if (parseInt(values[i]) === 0 && display[i] === true) {
          mkFalse(display, i);
          setTimeout(() => {
            mkTrue(display, i)
          }, delay)
          d[arr[i]] = 0;
          upload = true;
        }
      }
      if (upload) {
        axios.post("http://localhost:8080/data", d)
          .then(res => {
            values = [];
            count = 0;
            socket.emit("data", 'sensor')
          })
      }

      if (seconds === 0) {
        axios.post('http://localhost:8080/th1', th1)
        axios.post('http://localhost:8080/th2', th2)
      }
      values = [];
      count = 0;
    }
  }
});





const mkTrue = (arr, idx) => {
  arr[idx] = true;

}

const mkFalse = (arr, idx) => {
  arr[idx] = false;

}