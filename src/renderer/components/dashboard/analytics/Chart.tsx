import { useContext, useState } from "react";
import {
  XAxis,
  YAxis,
  Tooltip,
  Label,
  ResponsiveContainer,
  AreaChart,
  Area,
} from "recharts";
import moment from "moment";
import MinerContext from "renderer/pages/Dashboard";
import { Paper, Typography } from "@mui/material";

const Chart = () => {
  const miner = useContext(MinerContext);
  const [done, setDone] = useState(false);
  const [hashrates, setHashrates] = useState([]);

  const getMovingAverage = (minerHashrates: any, range = 30) => {
    if (!done && minerHashrates.length != 0) {
      const clone = JSON.parse(JSON.stringify(minerHashrates));

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

      console.log(clone);

      setDone(true);
      setHashrates(clone);
      return clone;
    }

    return done ? hashrates : minerHashrates;
  };

  return (
    <Paper>
      <div
        style={{
          padding: "16px",
        }}
      >
        <Typography variant="h4">Historical Metrics</Typography>
        <Typography variant="body1">
          See how your hashrate changes over time.
        </Typography>
      </div>

      <div style={{ padding: "16px" }}>
        <ResponsiveContainer width="100%" height={400}>
          <AreaChart height={400} data={getMovingAverage(miner.hashrates, 120)}>
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
                  color: "white",
                }}
              />
            </YAxis>
            <Tooltip
              contentStyle={{
                border: "none",
                fontSize: 14,
                color: "black",
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
      </div>
    </Paper>
  );
};

export default Chart;
