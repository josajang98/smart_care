import { useEffect, useState } from 'react'
import './sensor.css';
import axios from 'axios'

function Sensor() {
  const [sensorData, setSensorData] = useState([])

  useEffect(() => {
    axios.get('/data').then((res) => {
      console.log(res.data)
      setSensorData(res.data);
    }).catch((Error) => {
      console.log(Error);
    })
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
    if (key === '_id') continue
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
