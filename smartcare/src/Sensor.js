import { useEffect, useState } from 'react'
import './sensor.css';
import axios from 'axios'

function Sensor({ times, setTimes }) {
  const [sensorData, setSensorData] = useState([])
  const token = '2043330414:AAFWFT1PQ6P0kAmh5331WuuiDRHzXEslsgg';
  const id = '1992525601';
  const message = '안녕'


  useEffect(() => {
    axios.get('/data').then((res) => {

      setSensorData(res.data);
    }).catch((Error) => {
      console.log(Error);
    })
  }, [sensorData])

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
        <button onClick={() => { axios.get(`https://api.telegram.org/bot${token}/sendmessage?chat_id=${id}&text=${message}`) }}>asdf</button>
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
    if (key === '_id' || key === 'hour' || key === 'min' || key === 'sec' || key === 'display') continue
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
