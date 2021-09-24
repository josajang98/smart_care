import './TH.css'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function TH({ title, data1 }) {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get('/th1').then((res) => {
      setData(res.data);
    }).catch((Error) => {
      console.log(Error);
    })
  }, [])

  return (
    <div className='TH'>
      <section className='title'>
        <h4>{title}</h4>
      </section>
      <section className="chart">

        <LineChart
          width={window.outerWidth > 769 ? 500 : window.outerWidth - 40}
          height={300}
          data={data}
          margin={{
            top: 5,

            bottom: 5
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="time" />
          <YAxis yAxisId="left" type="number" domain={[40, 80]} />
          <YAxis yAxisId="right" orientation="right" type="number" domain={[20, 35]} />
          <Tooltip />
          <Legend />
          <Line
            yAxisId="left"
            type="monotone"
            dataKey="humidity"
            stroke="#8884d8"
            activeDot={{ r: 2 }}
          />
          <Line yAxisId="right" type="monotone" dataKey="temperature" stroke="#82ca9d" />
        </LineChart>
      </section>

    </div>

  );
}

