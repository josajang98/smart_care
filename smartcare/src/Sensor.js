import { useEffect, useState } from 'react'
import './sensor.css';
import axios from 'axios'

function Sensor({ times, setTimes }) {
  const [sensorData, setSensorData] = useState([])

  const map = new Map();

  axios.get('/data').then((res) => {
    console.log(res.data)
    const lastData = res.data[res.data.length - 1];


    for (const key in lastData) {
      if (key === '_id' || key === 'hour' || key === 'min' || key === 'sec') continue;
      if (map.get(key) !== undefined) {
        clearTimeout(map.get(key));
      }

      const timeoutID = setTimeout(() => {
        const token = '2043330414:AAFWFT1PQ6P0kAmh5331WuuiDRHzXEslsgg';
        const id = '1992525601';
        const message = key;
        const reqAPI = `https://api.telegram.org/bot${token}/sendmessage?chat_id=${id}&text=${message}`
        //axios.get(reqAPI)
      }, 10000);
      map.set(key, timeoutID);
    }


    if (JSON.stringify(sensorData) !== JSON.stringify(res.data))
      setSensorData(res.data);
  }).catch((Error) => {
    console.log(Error);
  })
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
