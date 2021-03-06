import { useEffect, useState } from 'react'
import './sensor.css';
import axios from 'axios'
import io from 'socket.io-client';
const socket = io.connect('https://smartcare.loca.lt')


function Sensor() {

  const [sensorData, setSensorData] = useState([])
  const map = new Map();
  const transform = {
    '현관문 움직임 감지': '거실 적외선 센서',
    '방문 움직임 감지': '방 적외선 센서',
    '화장실문 움직임 감지': '화장실 적외선 센서',
    '거실 인체 감지': '거실 인체감지 센서',
    '방 인체 감지': '방 인체감지 센서',
    '화장실 인체 감지': '화장실 인체감지 센서',
  }

  useEffect(() => {

    socket.emit("roomjoin", 'sensor');
    socket.on('data', () => {

      axios.get('/data').then(async (res) => {
        const lastData = res.data[res.data.length - 1];


        for (const key in lastData) {

          if (key === '_id' || key === 'hour' || key === 'min' || key === 'sec') continue;
          if (map.get(key) !== undefined) {
            clearTimeout(map.get(key));
          }
          const transKey = transform[key];

          const times = await axios.get('/alarm')

          const token = await axios.get('/profile');

          const id = await axios.get(`https://api.telegram.org/bot${token.data[0]['token']}/getUpdates`);

          const timeoutID = setTimeout(() => {

            const message = key;
            const reqAPI = `https://api.telegram.org/bot${token.data[0]['token']}/sendmessage?chat_id=${id['data']['result'][0]['message']['chat']['id']}&text=${message}`
            axios.get(reqAPI)
          }, times.data[0][transKey] * 60000);
          map.set(key, timeoutID);

        }
        setSensorData(res.data);
      }).catch((Error) => {
        console.log(Error);
      })
    });
  }, [])






  return (
    <div className='sensor'>
      <section className='title'>
        <h4>Sensor Log</h4>
      </section>
      <section className='logs'>
        {
          sensorData.map((data, idx) => {
            return (
              <Message key={idx} data={data} />
            )
          })
        }
      </section>
    </div>

  )
}
function Message({ data }) {
  const result = [];
  const h = data.hour;
  const m = data.min;
  const s = data.sec;
  for (const key in data) {
    if (key === '_id' || key === 'hour' || key === 'min' || key === 'sec') continue
    if (data[key] === 0) {
      result.push(
        <div className='message' >
          <h5>{key}</h5>
          <h6>{`${h}:${m}:${s}`}</h6>
        </div>
      )
    }
  }
  return result;
}
export default Sensor;
