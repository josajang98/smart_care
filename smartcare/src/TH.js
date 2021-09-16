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


const data = [
  {
    time: "10:55",
    humidity: 50.0,
    temperature: 25
  },
  {
    time: "10:56",
    humidity: 55.0,
    temperature: 26.2
  },
  {
    time: "10:57",
    humidity: 58.0,
    temperature: 27.2
  },
  {
    time: "10:58",
    humidity: 68.0,
    temperature: 23.2
  },
  {
    time: "10:59",
    humidity: 68.0,
    temperature: 23.2
  },
  {
    time: "11:00",
    humidity: 77.0,
    temperature: 21.2
  },
  {
    time: "11:01",
    humidity: 60,
    temperature: 26.2
  }, {
    time: "10:55",
    humidity: 50.0,
    temperature: 25
  },
  {
    time: "10:56",
    humidity: 55.0,
    temperature: 26.2
  },
  {
    time: "10:57",
    humidity: 58.0,
    temperature: 27.2
  },
  {
    time: "10:58",
    humidity: 68.0,
    temperature: 23.2
  },
  {
    time: "10:59",
    humidity: 56.0,
    temperature: 22.2
  },
  {
    time: "11:00",
    humidity: 77.0,
    temperature: 21.2
  },
  {
    time: "11:01",
    humidity: 60,
    temperature: 26.2
  },
];

export default function TH({ title, data1 }) {
  return (
    <div className='TH'>
      <section className='title'>
        <h4>{title}</h4>
      </section>
      <section className="chart">
        <LineChart
          width={window.outerWidth - 40}
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

