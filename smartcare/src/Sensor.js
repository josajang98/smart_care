import { useState } from 'react'
import './sensor.css';

function Sensor() {
  const [sensorData, setSensorData] = useState([
    {
      "irSensor1Value": 1,
      "irSensor2Value": 1,
      "irSensor3Value": 1,
      "flameSensorValue": 1,
      "mq135SensorValue": 1,
      "pirSensor1Value": 1,
      "pirSensor2Value": 0,
      "pirSensor3Value": 1,
      "hour": 20,
      "min": 28,
      "sec": 51
    },
    {
      "irSensor1Value": 1,
      "irSensor2Value": 1,
      "irSensor3Value": 1,
      "flameSensorValue": 1,
      "mq135SensorValue": 1,
      "pirSensor1Value": 1,
      "pirSensor2Value": 0,
      "pirSensor3Value": 1,
      "hour": 20,
      "min": 28,
      "sec": 51
    },
    {
      "irSensor1Value": 1,
      "irSensor2Value": 1,
      "irSensor3Value": 1,
      "flameSensorValue": 1,
      "mq135SensorValue": 1,
      "pirSensor1Value": 1,
      "pirSensor2Value": 0,
      "pirSensor3Value": 1,
      "hour": 20,
      "min": 28,
      "sec": 51
    },
    {
      "irSensor1Value": 1,
      "irSensor2Value": 1,
      "irSensor3Value": 1,
      "flameSensorValue": 1,
      "mq135SensorValue": 1,
      "pirSensor1Value": 1,
      "pirSensor2Value": 0,
      "pirSensor3Value": 1,
      "hour": 20,
      "min": 28,
      "sec": 51
    },
    {
      "irSensor1Value": 1,
      "irSensor2Value": 1,
      "irSensor3Value": 1,
      "flameSensorValue": 1,
      "mq135SensorValue": 1,
      "pirSensor1Value": 1,
      "pirSensor2Value": 0,
      "pirSensor3Value": 1,
      "hour": 20,
      "min": 28,
      "sec": 51
    },
    {
      "irSensor1Value": 1,
      "irSensor2Value": 1,
      "irSensor3Value": 1,
      "flameSensorValue": 1,
      "mq135SensorValue": 1,
      "pirSensor1Value": 1,
      "pirSensor2Value": 0,
      "pirSensor3Value": 1,
      "hour": 20,
      "min": 28,
      "sec": 51
    },
    {
      "irSensor1Value": 1,
      "irSensor2Value": 1,
      "irSensor3Value": 1,
      "flameSensorValue": 1,
      "mq135SensorValue": 1,
      "pirSensor1Value": 1,
      "pirSensor2Value": 0,
      "pirSensor3Value": 1,
      "hour": 20,
      "min": 28,
      "sec": 51
    },
    {
      "irSensor1Value": 1,
      "irSensor2Value": 1,
      "irSensor3Value": 1,
      "flameSensorValue": 1,
      "mq135SensorValue": 1,
      "pirSensor1Value": 1,
      "pirSensor2Value": 0,
      "pirSensor3Value": 1,
      "hour": 20,
      "min": 28,
      "sec": 51
    },
    {
      "irSensor1Value": 1,
      "irSensor2Value": 1,
      "irSensor3Value": 1,
      "flameSensorValue": 1,
      "mq135SensorValue": 1,
      "pirSensor1Value": 1,
      "pirSensor2Value": 0,
      "pirSensor3Value": 1,
      "hour": 20,
      "min": 28,
      "sec": 52
    }
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
    switch (key) {
      case "irSensor1Value":
        if (data[key] === 0) {
          result.push(
            <div className='message' >
              <h5>적외선 센서 거실 감지</h5>
              <h6>{`${h}:${m}:${s}`}</h6>
            </div>
          )
        }
        break;
      case "irSensor2Value":
        if (data[key] === 0) {
          result.push(
            <div className='message' >
              <h5>적외선 센서 방 감지</h5>
              <h6>{`${h}:${m}:${s}`}</h6>
            </div>
          )
        }
        break;
      case "irSensor3Value":
        if (data[key] === 0) {
          result.push(
            <div className='message' >
              <h5>적외선 센서 화장실 감지</h5>
              <h6>{`${h}:${m}:${s}`}</h6>
            </div>
          )
        }
        break;
      case "pirSensor1Value":
        if (data[key] === 0) {
          result.push(
            <div className='message' >
              <h5>인체감지 센서 거실 감지</h5>
              <h6>{`${h}:${m}:${s}`}</h6>
            </div>
          )
        }
        break;
      case "pirSensor2Value":
        if (data[key] === 0) {
          result.push(
            <div className='message' >
              <h5>인체감지 센서 방 감지</h5>
              <h6>{`${h}:${m}:${s}`}</h6>
            </div>
          )
        }
        break;
      case "pirSensor3Value":
        if (data[key] === 0) {
          result.push(
            <div className='message' >
              <h5>인체감지 센서 화장실 감지</h5>
              <h6>{`${h}:${m}:${s}`}</h6>
            </div>
          )
        }
        break;
      case "flameSensorValue":
        if (data[key] === 0) {
          result.push(
            <div className='message' >
              <h5>불꽃감지 센서 감지</h5>
              <h6>{`${h}:${m}:${s}`}</h6>
            </div>
          )
        }
        break;
      case "mq135SensorValue":
        if (data[key] === 0) {
          result.push(
            <div className='message' >
              <h5>가스감지 센서 감지</h5>
              <h6>{`${h}:${m}:${s}`}</h6>
            </div>
          )
        }
        break;
    }
  }
  return result;
}
export default Sensor;
