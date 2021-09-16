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
    name: "10:55",
    h1: 50.0,
    t1: 25
  },
  {
    name: "10:56",
    h1: 55.0,
    t1: 26.2
  },
  {
    name: "10:57",
    h1: 58.0,
    t1: 27.2
  },
  {
    name: "10:58",
    h1: 68.0,
    t1: 23.2
  },
  {
    name: "10:59",
    h1: 56.0,
    t1: 22.2
  },
  {
    name: "11:00",
    h1: 77.0,
    t1: 21.2
  },
  {
    name: "11:01",
    h1: 60,
    t1: 26.2
  }, {
    name: "10:55",
    h1: 50.0,
    t1: 25
  },
  {
    name: "10:56",
    h1: 55.0,
    t1: 26.2
  },
  {
    name: "10:57",
    h1: 58.0,
    t1: 27.2
  },
  {
    name: "10:58",
    h1: 68.0,
    t1: 23.2
  },
  {
    name: "10:59",
    h1: 56.0,
    t1: 22.2
  },
  {
    name: "11:00",
    h1: 77.0,
    t1: 21.2
  },
  {
    name: "11:01",
    h1: 60,
    t1: 26.2
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
          <XAxis dataKey="name" />
          <YAxis yAxisId="left" type="number" domain={[40, 80]} />
          <YAxis yAxisId="right" orientation="right" type="number" domain={[20, 35]} />
          <Tooltip />
          <Legend />
          <Line
            yAxisId="left"
            type="monotone"
            dataKey="h1"
            stroke="#8884d8"
            activeDot={{ r: 2 }}
          />
          <Line yAxisId="right" type="monotone" dataKey="t1" stroke="#82ca9d" />
        </LineChart>
      </section>

    </div>

  );
}

