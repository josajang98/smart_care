import { useState } from 'react'
import './sensor.css';

function Sensor() {
  const [sensorData, setSensorData] = useState([
    {
      "현관문 움직임 감지": 1,
      "방문 움직임 감지": 0,
      "화장문 움직임 감지": 1,
      "거실 인체 감지": 1,
      "방 인체 감지": 0,
      "화장실 인체 감지": 1,
      "hour": 20,
      "min": 28,
      "sec": 51
    },
    {
      "현관문 움직임 감지": 0,
      "방문 움직임 감지": 1,
      "화장문 움직임 감지": 1,
      "거실 인체 감지": 1,
      "방 인체 감지": 1,
      "화장실 인체 감지": 0,
      "hour": 20,
      "min": 28,
      "sec": 52
    },
    {
      "현관문 움직임 감지": 1,
      "방문 움직임 감지": 0,
      "화장문 움직임 감지": 1,
      "거실 인체 감지": 0,
      "방 인체 감지": 1,
      "화장실 인체 감지": 1,
      "hour": 20,
      "min": 28,
      "sec": 53
    },
    {
      "현관문 움직임 감지": 1,
      "방문 움직임 감지": 0,
      "화장문 움직임 감지": 0,
      "거실 인체 감지": 1,
      "방 인체 감지": 1,
      "화장실 인체 감지": 1,
      "hour": 20,
      "min": 28,
      "sec": 54
    },

  ])
  return (
    <div className='sensor'>
      <section className='title'>
        <h4>Sensor Log</h4>
      </section>
      <section className='logs'>
        {
          sensorData.map(data => {
            return (
              <Message data={data} />
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
