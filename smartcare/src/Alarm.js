import { useState } from 'react'
import { Button } from 'react-bootstrap'
import './Alarm.css'
function Alarm() {
  const [times, setTimes] = useState({
    "거실 적외선 센서": 240,
    "방 적외선 센서": 200,
    "화장실 적외선 센서": 120,
    "거실 인체감지 센서": 100,
    "방 인체감지 센서": 60,
    "화장실 인체감지 센서": 70,
  })

  function display(times) {
    const result = [];
    for (const key in times) {
      result.push(
        <Obj name={key} times={times} h={Math.floor(times[key] / 60).toString().padStart(2, '0')} m={(times[key] % 60).toString().padStart(2, '0')} setTimes={setTimes} />
      )
    }
    return result;
  }

  return (
    <div className='alarm'>
      <section className='title'>
        <h4>Alarm setting</h4>
      </section>

      <section className='sensor-value-settings'>
        {display(times)}
      </section>
      <Button className='save-btn' variant="primary">Primary</Button>{' '}
    </div>

  )
}

function Obj({ name, h, m, setTimes, times }) {
  function setHourMin(name, value, setTimes) {
    const copy = { ...times };
    switch (value) {
      case 'hp':
        copy[name] += 60;
        setTimes(copy);
        break;
      case 'hm':
        if (copy[name] < 60) copy[name] = 0
        else copy[name] -= 60;
        setTimes(copy);
        break;
      case 'mp':
        copy[name] += 10;
        setTimes(copy);
        break;
      case 'mm':
        if (copy[name] < 10) copy[name] = 0
        else copy[name] -= 10;
        setTimes(copy);
        break;
    }

  }
  return (
    <article className='obj'>
      <div className='info'>
        <h6>{name}</h6>
      </div>
      <div className='time-btn'>
        <div className='time'>
          <h4>{h}:{m}</h4>
        </div>
        <div className='btn-group'>
          <div className='btns'>
            <Button onClick={() => { setHourMin(name, 'hp', setTimes) }} variant="outline-primary">+</Button>
            <Button onClick={() => { setHourMin(name, 'hm', setTimes) }} variant="outline-primary">-</Button>
          </div>
          <div className='btns'>
            <Button onClick={() => { setHourMin(name, 'mp', setTimes) }} variant="outline-success">+</Button>
            <Button onClick={() => { setHourMin(name, 'mm', setTimes) }} variant="outline-success">-</Button>
          </div>
        </div>
      </div>

    </article>
  )
}
export default Alarm;
