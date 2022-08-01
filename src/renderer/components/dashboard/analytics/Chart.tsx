import { Component } from "react";
import {
  XAxis,
  YAxis,
  Tooltip,
  Label,
  ResponsiveContainer,
  AreaChart,
  Area,
  LineChart,
  Line,
} from "recharts";
import moment from "moment";
import { Card } from "@mui/material";

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

class Chart extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      done: false,
      hashrates: [],
    };
  }

  getMovingAverage(hashrates: any, range = 30) {
    if (!this.state.done && hashrates.length != 0) {
      const clone = JSON.parse(JSON.stringify(hashrates));

      let sum = 0;
      const arr = [];
      for (let i = 0; i < clone.length; i++) {
        const num = parseInt(clone[i].rate);

        if (i < range) {
          arr.push(num);
        } else {
          sum -= arr[i % range];
          arr[i % range] = num;
        }

        sum += num;

        clone[i].rate = Math.floor(sum / Math.min(i + 1, range));
      }

      this.setState({ done: true, hashrates: clone });
      return clone;
    }

    return this.state.done ? this.state.hashrates : hashrates;
  }

  render() {
    return (
      <ResponsiveContainer height="100%" width="100%">
        <AreaChart width={500} height={400} data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Area
            type="monotone"
            dataKey="uv"
            dot={false}
            strokeWidth={4}
            stroke="#4E69FF"
            fill="#BAC1FF"
          />
        </AreaChart>
      </ResponsiveContainer>
    );
  }
}

export default Chart;
