import { Component } from "react";
import {
  XAxis,
  YAxis,
  Tooltip,
  Label,
  ResponsiveContainer,
  AreaChart,
  Area,
} from "recharts";
import _ from "lodash";
import moment from "moment";
import { Card } from "@mui/material";

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
      <Card
        elevation={0}
        style={{ height: "440px", width: "975px", backgroundColor: "#0F141F", backgroundImage: 'none', borderRadius: "7px" }}
      >
        <ResponsiveContainer>
          
          <AreaChart data={this.getMovingAverage([], 120)}>
            <XAxis
              dataKey="time"
              axisLine={false}
              tickLine={false}
              tick={{
                fontSize: 12,
                transform: "translate(0, 10)",
              }}
              domain={["auto", "auto"]}
              tickFormatter={(unixTime) => moment(unixTime).format("MMM D LT")}
              type="number"
              scale="time"
            />
            
            <YAxis
              dataKey="rate"
              axisLine={false}
              tickLine={false}
              allowDecimals={false}
              tick={{
                fontSize: 12,
              }}
              domain={[0, "auto"]}
            >
              <Label
                value="Hashrate (H/s)"
                position="insideLeft"
                angle={-90}
                style={{
                  textAnchor: "middle",
                  fontSize: 16,
                }}
              />
            </YAxis>
            <Tooltip
              contentStyle={{
                border: "none",
                fontSize: 14,
              }}
              itemStyle={{ color: "#f07c00" }}
              labelFormatter={(unixTime) => moment(unixTime).format("LLLL")}
            />
            <defs>
              <linearGradient id="colorUv" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="orange" />
                <stop offset="100%" stopColor="blue" />
              </linearGradient>
            </defs>
            <Area
              type="monotone"
              dataKey="rate"
              dot={false}
              strokeWidth={4}
              stroke="#4E69FF"
              fill="#BAC1FF"
            />
          </AreaChart>
        </ResponsiveContainer>
      </Card>
    );
  }
}

export default Chart;
