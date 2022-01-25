import React, { Component } from "react";
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
        style={{ height: "100%", backgroundColor: "#2f3136", padding: "16px" }}
      >
        <ResponsiveContainer>
          <AreaChart
            data={this.getMovingAverage(
              [
                {
                  blockHeight: "2546009",
                  time: "2022-01-27T00:26:15.193Z",
                  rate: "0",
                },
                {
                  blockHeight: "2546008",
                  time: "2022-01-27T00:24:34.935Z",
                  rate: "0",
                },
                {
                  blockHeight: "2546007",
                  time: "2022-01-27T00:24:33.031Z",
                  rate: "0",
                },
                {
                  blockHeight: "2546006",
                  time: "2022-01-27T00:24:01.101Z",
                  rate: "0",
                },
                {
                  blockHeight: "2546005",
                  time: "2022-01-27T00:23:06.921Z",
                  rate: "0",
                },
                {
                  blockHeight: "2546004",
                  time: "2022-01-27T00:20:20.932Z",
                  rate: "0",
                },
                {
                  blockHeight: "2546003",
                  time: "2022-01-27T00:19:52.958Z",
                  rate: "0",
                },
                {
                  blockHeight: "2546002",
                  time: "2022-01-27T00:19:45.504Z",
                  rate: "0",
                },
                {
                  blockHeight: "2546001",
                  time: "2022-01-27T00:14:39.123Z",
                  rate: "0",
                },
                {
                  blockHeight: "2546000",
                  time: "2022-01-27T00:14:23.154Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545999",
                  time: "2022-01-27T00:12:40.950Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545998",
                  time: "2022-01-27T00:12:01.201Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545997",
                  time: "2022-01-27T00:06:38.896Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545996",
                  time: "2022-01-27T00:06:18.848Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545995",
                  time: "2022-01-27T00:03:27.064Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545994",
                  time: "2022-01-27T00:01:57.035Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545993",
                  time: "2022-01-27T00:01:29.127Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545992",
                  time: "2022-01-26T23:57:12.774Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545991",
                  time: "2022-01-26T23:56:44.717Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545990",
                  time: "2022-01-26T23:54:25.250Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545989",
                  time: "2022-01-26T23:51:32.801Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545988",
                  time: "2022-01-26T23:51:22.778Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545987",
                  time: "2022-01-26T23:50:48.859Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545986",
                  time: "2022-01-26T23:48:24.129Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545985",
                  time: "2022-01-26T23:46:58.678Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545984",
                  time: "2022-01-26T23:44:26.808Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545983",
                  time: "2022-01-26T23:43:19.175Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545982",
                  time: "2022-01-26T23:38:53.328Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545981",
                  time: "2022-01-26T23:36:04.809Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545980",
                  time: "2022-01-26T23:33:59.020Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545979",
                  time: "2022-01-26T23:32:02.809Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545978",
                  time: "2022-01-26T23:30:05.230Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545977",
                  time: "2022-01-26T23:24:48.624Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545976",
                  time: "2022-01-26T23:21:32.615Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545975",
                  time: "2022-01-26T23:21:03.249Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545974",
                  time: "2022-01-26T23:18:42.642Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545973",
                  time: "2022-01-26T23:18:26.629Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545972",
                  time: "2022-01-26T23:15:26.603Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545971",
                  time: "2022-01-26T23:12:50.586Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545970",
                  time: "2022-01-26T23:08:56.675Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545969",
                  time: "2022-01-26T23:07:36.612Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545968",
                  time: "2022-01-26T23:03:04.508Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545967",
                  time: "2022-01-26T23:02:32.787Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545966",
                  time: "2022-01-26T23:00:51.187Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545965",
                  time: "2022-01-26T22:59:24.591Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545964",
                  time: "2022-01-26T22:58:24.420Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545963",
                  time: "2022-01-26T22:58:16.534Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545962",
                  time: "2022-01-26T22:57:42.500Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545961",
                  time: "2022-01-26T22:53:48.405Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545960",
                  time: "2022-01-26T22:53:10.512Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545959",
                  time: "2022-01-26T22:47:52.842Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545958",
                  time: "2022-01-26T22:43:52.689Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545957",
                  time: "2022-01-26T22:42:24.592Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545956",
                  time: "2022-01-26T22:39:44.445Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545955",
                  time: "2022-01-26T22:35:20.353Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545954",
                  time: "2022-01-26T22:33:38.592Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545953",
                  time: "2022-01-26T22:30:22.213Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545952",
                  time: "2022-01-26T22:27:16.307Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545951",
                  time: "2022-01-26T22:26:40.286Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545950",
                  time: "2022-01-26T22:21:48.330Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545949",
                  time: "2022-01-26T22:20:52.217Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545948",
                  time: "2022-01-26T22:19:50.235Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545947",
                  time: "2022-01-26T22:19:26.387Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545946",
                  time: "2022-01-26T22:17:58.364Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545945",
                  time: "2022-01-26T22:15:38.715Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545944",
                  time: "2022-01-26T22:12:32.119Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545943",
                  time: "2022-01-26T22:12:22.129Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545942",
                  time: "2022-01-26T22:12:04.076Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545941",
                  time: "2022-01-26T22:11:50.074Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545940",
                  time: "2022-01-26T22:10:44.255Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545939",
                  time: "2022-01-26T22:08:52.021Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545938",
                  time: "2022-01-26T22:08:42.563Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545937",
                  time: "2022-01-26T22:07:32.543Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545936",
                  time: "2022-01-26T22:03:36.043Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545935",
                  time: "2022-01-26T22:03:18.119Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545934",
                  time: "2022-01-26T22:03:10.312Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545933",
                  time: "2022-01-26T22:01:40.282Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545932",
                  time: "2022-01-26T21:59:47.988Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545931",
                  time: "2022-01-26T21:59:45.978Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545930",
                  time: "2022-01-26T21:59:29.987Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545929",
                  time: "2022-01-26T21:59:28.176Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545928",
                  time: "2022-01-26T21:58:20.670Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545927",
                  time: "2022-01-26T21:54:22.163Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545926",
                  time: "2022-01-26T21:53:24.013Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545925",
                  time: "2022-01-26T21:52:50.054Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545924",
                  time: "2022-01-26T21:51:10.063Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545923",
                  time: "2022-01-26T21:49:33.940Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545922",
                  time: "2022-01-26T21:49:18.031Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545921",
                  time: "2022-01-26T21:48:50.100Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545920",
                  time: "2022-01-26T21:45:40.664Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545919",
                  time: "2022-01-26T21:45:07.961Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545918",
                  time: "2022-01-26T21:44:21.937Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545917",
                  time: "2022-01-26T21:43:57.978Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545916",
                  time: "2022-01-26T21:42:57.952Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545915",
                  time: "2022-01-26T21:36:13.835Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545914",
                  time: "2022-01-26T21:36:11.893Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545913",
                  time: "2022-01-26T21:35:49.901Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545912",
                  time: "2022-01-26T21:35:34.239Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545911",
                  time: "2022-01-26T21:27:48.541Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545910",
                  time: "2022-01-26T21:21:55.935Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545909",
                  time: "2022-01-26T21:20:59.827Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545908",
                  time: "2022-01-26T21:18:05.994Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545907",
                  time: "2022-01-26T21:15:12.191Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545906",
                  time: "2022-01-26T21:14:33.825Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545905",
                  time: "2022-01-26T21:12:47.730Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545904",
                  time: "2022-01-26T21:09:49.771Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545903",
                  time: "2022-01-26T21:08:31.714Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545902",
                  time: "2022-01-26T21:07:59.790Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545901",
                  time: "2022-01-26T21:06:10.294Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545900",
                  time: "2022-01-26T21:02:20.158Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545899",
                  time: "2022-01-26T20:56:37.585Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545898",
                  time: "2022-01-26T20:56:32.029Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545897",
                  time: "2022-01-26T20:50:40.388Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545896",
                  time: "2022-01-26T20:46:01.013Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545895",
                  time: "2022-01-26T20:45:40.853Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545894",
                  time: "2022-01-26T20:44:58.191Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545893",
                  time: "2022-01-26T20:44:11.529Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545892",
                  time: "2022-01-26T20:43:43.935Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545891",
                  time: "2022-01-26T20:43:13.428Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545890",
                  time: "2022-01-26T20:43:11.555Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545889",
                  time: "2022-01-26T20:42:41.566Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545888",
                  time: "2022-01-26T20:41:03.398Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545887",
                  time: "2022-01-26T20:40:53.449Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545886",
                  time: "2022-01-26T20:39:39.426Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545885",
                  time: "2022-01-26T20:39:37.501Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545884",
                  time: "2022-01-26T20:38:51.553Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545883",
                  time: "2022-01-26T20:37:34.746Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545882",
                  time: "2022-01-26T20:36:23.362Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545881",
                  time: "2022-01-26T20:36:17.622Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545880",
                  time: "2022-01-26T20:35:31.938Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545879",
                  time: "2022-01-26T20:35:07.456Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545878",
                  time: "2022-01-26T20:34:19.623Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545877",
                  time: "2022-01-26T20:33:10.669Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545876",
                  time: "2022-01-26T20:30:22.091Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545875",
                  time: "2022-01-26T20:27:21.366Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545874",
                  time: "2022-01-26T20:25:09.430Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545873",
                  time: "2022-01-26T20:24:25.408Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545872",
                  time: "2022-01-26T20:21:45.348Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545871",
                  time: "2022-01-26T20:21:17.307Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545870",
                  time: "2022-01-26T20:21:13.259Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545869",
                  time: "2022-01-26T20:21:09.262Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545868",
                  time: "2022-01-26T20:20:59.403Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545867",
                  time: "2022-01-26T20:17:03.370Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545866",
                  time: "2022-01-26T20:15:29.238Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545865",
                  time: "2022-01-26T20:15:27.340Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545864",
                  time: "2022-01-26T20:14:25.452Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545863",
                  time: "2022-01-26T20:11:59.478Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545862",
                  time: "2022-01-26T20:08:31.336Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545861",
                  time: "2022-01-26T20:06:57.347Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545860",
                  time: "2022-01-26T19:59:31.515Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545859",
                  time: "2022-01-26T19:56:21.468Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545858",
                  time: "2022-01-26T19:54:19.609Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545857",
                  time: "2022-01-26T19:53:27.530Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545856",
                  time: "2022-01-26T19:49:33.203Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545855",
                  time: "2022-01-26T19:48:39.161Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545854",
                  time: "2022-01-26T19:45:25.095Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545852",
                  time: "2022-01-26T19:44:39.205Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545851",
                  time: "2022-01-26T19:39:15.041Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545850",
                  time: "2022-01-26T19:38:57.161Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545849",
                  time: "2022-01-26T19:38:29.321Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545848",
                  time: "2022-01-26T19:36:03.018Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545847",
                  time: "2022-01-26T19:33:53.125Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545846",
                  time: "2022-01-26T19:33:19.418Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545845",
                  time: "2022-01-26T19:32:39.183Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545844",
                  time: "2022-01-26T19:30:34.906Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545843",
                  time: "2022-01-26T19:29:37.023Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545842",
                  time: "2022-01-26T19:28:44.970Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545841",
                  time: "2022-01-26T19:28:32.977Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545840",
                  time: "2022-01-26T19:28:13.083Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545839",
                  time: "2022-01-26T19:27:37.372Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545838",
                  time: "2022-01-26T19:24:40.996Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545837",
                  time: "2022-01-26T19:23:45.541Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545836",
                  time: "2022-01-26T19:22:15.649Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545835",
                  time: "2022-01-26T19:18:15.174Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545834",
                  time: "2022-01-26T19:17:15.137Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545833",
                  time: "2022-01-26T19:15:27.163Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545832",
                  time: "2022-01-26T19:13:45.001Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545831",
                  time: "2022-01-26T19:13:20.979Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545830",
                  time: "2022-01-26T19:12:57.162Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545829",
                  time: "2022-01-26T19:11:12.952Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545828",
                  time: "2022-01-26T19:08:57.054Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545827",
                  time: "2022-01-26T19:07:05.466Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545826",
                  time: "2022-01-26T19:04:04.873Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545825",
                  time: "2022-01-26T19:03:40.957Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545824",
                  time: "2022-01-26T19:03:05.723Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545823",
                  time: "2022-01-26T19:01:32.854Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545822",
                  time: "2022-01-26T19:00:43.062Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545821",
                  time: "2022-01-26T18:58:59.152Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545820",
                  time: "2022-01-26T18:58:38.981Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545819",
                  time: "2022-01-26T18:57:10.786Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545818",
                  time: "2022-01-26T18:57:08.839Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545817",
                  time: "2022-01-26T18:56:39.206Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545816",
                  time: "2022-01-26T18:53:24.912Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545815",
                  time: "2022-01-26T18:51:57.087Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545814",
                  time: "2022-01-26T18:49:46.849Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545813",
                  time: "2022-01-26T18:46:42.248Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545812",
                  time: "2022-01-26T18:42:47.526Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545811",
                  time: "2022-01-26T18:37:06.757Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545810",
                  time: "2022-01-26T18:36:36.775Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545809",
                  time: "2022-01-26T18:35:24.745Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545808",
                  time: "2022-01-26T18:32:02.873Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545807",
                  time: "2022-01-26T18:30:42.632Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545806",
                  time: "2022-01-26T18:30:30.642Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545805",
                  time: "2022-01-26T18:27:21.202Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545804",
                  time: "2022-01-26T18:24:07.620Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545803",
                  time: "2022-01-26T18:17:43.015Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545802",
                  time: "2022-01-26T18:15:44.715Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545801",
                  time: "2022-01-26T18:13:42.594Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545800",
                  time: "2022-01-26T18:12:28.779Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545799",
                  time: "2022-01-26T18:10:56.486Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545798",
                  time: "2022-01-26T18:10:38.951Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545797",
                  time: "2022-01-26T18:09:20.459Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545796",
                  time: "2022-01-26T18:09:10.503Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545795",
                  time: "2022-01-26T18:08:54.529Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545794",
                  time: "2022-01-26T18:06:16.516Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545793",
                  time: "2022-01-26T18:01:51.444Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545792",
                  time: "2022-01-26T18:00:48.901Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545791",
                  time: "2022-01-26T17:54:34.756Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545790",
                  time: "2022-01-26T17:43:19.017Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545789",
                  time: "2022-01-26T17:36:58.343Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545788",
                  time: "2022-01-26T17:36:16.485Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545787",
                  time: "2022-01-26T17:35:06.337Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545786",
                  time: "2022-01-26T17:34:30.340Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545785",
                  time: "2022-01-26T17:34:08.526Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545784",
                  time: "2022-01-26T17:31:24.612Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545783",
                  time: "2022-01-26T17:30:07.164Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545782",
                  time: "2022-01-26T17:19:14.948Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545781",
                  time: "2022-01-26T17:13:54.223Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545780",
                  time: "2022-01-26T17:11:16.401Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545779",
                  time: "2022-01-26T17:09:56.334Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545778",
                  time: "2022-01-26T17:09:32.810Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545777",
                  time: "2022-01-26T17:03:52.204Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545776",
                  time: "2022-01-26T17:00:16.284Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545775",
                  time: "2022-01-26T16:57:08.153Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545774",
                  time: "2022-01-26T16:56:12.036Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545773",
                  time: "2022-01-26T16:56:00.062Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545772",
                  time: "2022-01-26T16:53:50.111Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545771",
                  time: "2022-01-26T16:53:10.123Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545770",
                  time: "2022-01-26T16:52:48.149Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545769",
                  time: "2022-01-26T16:51:58.128Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545768",
                  time: "2022-01-26T16:48:38.092Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545767",
                  time: "2022-01-26T16:47:54.158Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545766",
                  time: "2022-01-26T16:46:22.229Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545765",
                  time: "2022-01-26T16:44:58.007Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545764",
                  time: "2022-01-26T16:43:18.015Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545763",
                  time: "2022-01-26T16:43:02.126Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545762",
                  time: "2022-01-26T16:42:01.983Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545761",
                  time: "2022-01-26T16:41:54.266Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545760",
                  time: "2022-01-26T16:40:47.391Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545759",
                  time: "2022-01-26T16:32:08.094Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545758",
                  time: "2022-01-26T16:31:06.363Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545757",
                  time: "2022-01-26T16:30:16.178Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545756",
                  time: "2022-01-26T16:28:36.637Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545755",
                  time: "2022-01-26T16:22:49.889Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545754",
                  time: "2022-01-26T16:21:52.078Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545753",
                  time: "2022-01-26T16:20:19.878Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545752",
                  time: "2022-01-26T16:17:41.850Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545751",
                  time: "2022-01-26T16:17:13.850Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545750",
                  time: "2022-01-26T16:16:58.254Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545749",
                  time: "2022-01-26T16:14:36.297Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545748",
                  time: "2022-01-26T16:13:22.614Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545747",
                  time: "2022-01-26T16:04:20.355Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545746",
                  time: "2022-01-26T16:00:48.226Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545745",
                  time: "2022-01-26T15:56:18.112Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545744",
                  time: "2022-01-26T15:52:29.858Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545743",
                  time: "2022-01-26T15:48:41.984Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545742",
                  time: "2022-01-26T15:48:23.905Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545741",
                  time: "2022-01-26T15:47:10.013Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545740",
                  time: "2022-01-26T15:42:20.055Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545739",
                  time: "2022-01-26T15:37:15.832Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545738",
                  time: "2022-01-26T15:35:29.618Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545737",
                  time: "2022-01-26T15:34:13.553Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545736",
                  time: "2022-01-26T15:33:41.806Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545735",
                  time: "2022-01-26T15:29:30.187Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545734",
                  time: "2022-01-26T15:25:39.734Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545733",
                  time: "2022-01-26T15:24:03.785Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545732",
                  time: "2022-01-26T15:22:07.793Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545731",
                  time: "2022-01-26T15:20:27.618Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545730",
                  time: "2022-01-26T15:17:37.510Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545729",
                  time: "2022-01-26T15:16:50.420Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545728",
                  time: "2022-01-26T15:15:24.540Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545727",
                  time: "2022-01-26T15:06:25.369Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545726",
                  time: "2022-01-26T15:05:13.623Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545725",
                  time: "2022-01-26T15:03:35.426Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545724",
                  time: "2022-01-26T15:00:45.671Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545723",
                  time: "2022-01-26T14:59:25.443Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545722",
                  time: "2022-01-26T14:58:09.092Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545721",
                  time: "2022-01-26T14:55:51.382Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545720",
                  time: "2022-01-26T14:54:59.923Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545719",
                  time: "2022-01-26T14:53:42.192Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545718",
                  time: "2022-01-26T14:41:39.888Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545717",
                  time: "2022-01-26T14:35:59.254Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545715",
                  time: "2022-01-26T14:34:49.159Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545714",
                  time: "2022-01-26T14:32:21.231Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545713",
                  time: "2022-01-26T14:29:37.684Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545712",
                  time: "2022-01-26T14:27:09.451Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545711",
                  time: "2022-01-26T14:23:57.218Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545710",
                  time: "2022-01-26T14:23:21.171Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545709",
                  time: "2022-01-26T14:22:35.625Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545708",
                  time: "2022-01-26T14:20:39.598Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545707",
                  time: "2022-01-26T14:18:51.412Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545706",
                  time: "2022-01-26T14:17:07.622Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545705",
                  time: "2022-01-26T14:11:11.057Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545704",
                  time: "2022-01-26T14:10:51.059Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545703",
                  time: "2022-01-26T14:10:39.100Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545702",
                  time: "2022-01-26T14:08:15.620Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545701",
                  time: "2022-01-26T14:06:15.075Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545700",
                  time: "2022-01-26T13:59:10.957Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545699",
                  time: "2022-01-26T13:58:47.298Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545698",
                  time: "2022-01-26T13:55:20.953Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545697",
                  time: "2022-01-26T13:54:00.943Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545696",
                  time: "2022-01-26T13:50:59.488Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545695",
                  time: "2022-01-26T13:44:44.992Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545694",
                  time: "2022-01-26T13:41:06.809Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545693",
                  time: "2022-01-26T13:38:58.978Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545692",
                  time: "2022-01-26T13:37:52.789Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545691",
                  time: "2022-01-26T13:37:51.196Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545690",
                  time: "2022-01-26T13:35:20.776Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545689",
                  time: "2022-01-26T13:33:16.847Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545688",
                  time: "2022-01-26T13:32:50.773Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545687",
                  time: "2022-01-26T13:32:30.901Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545686",
                  time: "2022-01-26T13:30:42.880Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545685",
                  time: "2022-01-26T13:30:10.837Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545684",
                  time: "2022-01-26T13:29:20.790Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545683",
                  time: "2022-01-26T13:27:48.776Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545682",
                  time: "2022-01-26T13:26:17.218Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545681",
                  time: "2022-01-26T13:22:48.825Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545680",
                  time: "2022-01-26T13:21:38.758Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545679",
                  time: "2022-01-26T13:20:50.765Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545678",
                  time: "2022-01-26T13:18:16.720Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545677",
                  time: "2022-01-26T13:17:48.680Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545676",
                  time: "2022-01-26T13:17:29.843Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545675",
                  time: "2022-01-26T13:11:36.866Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545674",
                  time: "2022-01-26T13:08:56.704Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545673",
                  time: "2022-01-26T13:07:54.807Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545672",
                  time: "2022-01-26T13:06:32.611Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545671",
                  time: "2022-01-26T13:03:39.197Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545670",
                  time: "2022-01-26T12:56:04.630Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545669",
                  time: "2022-01-26T12:47:16.489Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545668",
                  time: "2022-01-26T12:47:10.726Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545667",
                  time: "2022-01-26T12:44:12.848Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545666",
                  time: "2022-01-26T12:39:04.421Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545665",
                  time: "2022-01-26T12:38:56.480Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545664",
                  time: "2022-01-26T12:35:48.020Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545663",
                  time: "2022-01-26T12:32:07.305Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545662",
                  time: "2022-01-26T12:31:09.371Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545661",
                  time: "2022-01-26T12:27:34.497Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545660",
                  time: "2022-01-26T12:26:16.390Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545659",
                  time: "2022-01-26T12:24:10.452Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545658",
                  time: "2022-01-26T12:23:00.392Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545657",
                  time: "2022-01-26T12:22:14.435Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545656",
                  time: "2022-01-26T12:21:44.501Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545655",
                  time: "2022-01-26T12:20:40.684Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545654",
                  time: "2022-01-26T12:19:04.380Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545653",
                  time: "2022-01-26T12:18:32.493Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545652",
                  time: "2022-01-26T12:17:04.312Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545651",
                  time: "2022-01-26T12:14:56.351Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545650",
                  time: "2022-01-26T12:14:38.461Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545649",
                  time: "2022-01-26T12:13:36.383Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545648",
                  time: "2022-01-26T12:11:28.938Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545647",
                  time: "2022-01-26T12:09:12.369Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545646",
                  time: "2022-01-26T12:08:30.287Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545645",
                  time: "2022-01-26T12:07:54.542Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545644",
                  time: "2022-01-26T11:59:28.247Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545643",
                  time: "2022-01-26T11:59:10.326Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545642",
                  time: "2022-01-26T11:58:40.488Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545641",
                  time: "2022-01-26T11:57:30.252Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545640",
                  time: "2022-01-26T11:57:03.437Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545639",
                  time: "2022-01-26T11:50:44.503Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545638",
                  time: "2022-01-26T11:50:38.482Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545637",
                  time: "2022-01-26T11:48:32.239Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545636",
                  time: "2022-01-26T11:47:44.273Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545635",
                  time: "2022-01-26T11:46:52.833Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545634",
                  time: "2022-01-26T11:41:10.276Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545633",
                  time: "2022-01-26T11:40:12.353Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545632",
                  time: "2022-01-26T11:36:16.148Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545631",
                  time: "2022-01-26T11:35:59.492Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545630",
                  time: "2022-01-26T11:31:54.335Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545629",
                  time: "2022-01-26T11:30:08.315Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545628",
                  time: "2022-01-26T11:29:49.490Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545627",
                  time: "2022-01-26T11:21:26.041Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545626",
                  time: "2022-01-26T11:20:56.024Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545625",
                  time: "2022-01-26T11:20:40.478Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545624",
                  time: "2022-01-26T11:11:25.928Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545623",
                  time: "2022-01-26T11:09:06.065Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545622",
                  time: "2022-01-26T11:08:09.892Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545621",
                  time: "2022-01-26T11:08:04.028Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545620",
                  time: "2022-01-26T11:07:30.524Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545619",
                  time: "2022-01-26T11:00:54.109Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545618",
                  time: "2022-01-26T10:59:49.932Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545617",
                  time: "2022-01-26T10:59:18.055Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545616",
                  time: "2022-01-26T10:55:42.025Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545615",
                  time: "2022-01-26T10:54:34.081Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545614",
                  time: "2022-01-26T10:52:08.134Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545613",
                  time: "2022-01-26T10:48:07.832Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545612",
                  time: "2022-01-26T10:47:53.968Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545611",
                  time: "2022-01-26T10:45:17.833Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545610",
                  time: "2022-01-26T10:45:02.004Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545609",
                  time: "2022-01-26T10:44:00.157Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545608",
                  time: "2022-01-26T10:42:41.982Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545607",
                  time: "2022-01-26T10:41:13.942Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545606",
                  time: "2022-01-26T10:38:49.872Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545605",
                  time: "2022-01-26T10:37:57.815Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545604",
                  time: "2022-01-26T10:35:39.765Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545603",
                  time: "2022-01-26T10:35:13.718Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545602",
                  time: "2022-01-26T10:35:11.886Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545601",
                  time: "2022-01-26T10:34:15.904Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545600",
                  time: "2022-01-26T10:31:07.787Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545599",
                  time: "2022-01-26T10:29:29.874Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545598",
                  time: "2022-01-26T10:28:29.733Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545597",
                  time: "2022-01-26T10:27:51.733Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545596",
                  time: "2022-01-26T10:27:27.920Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545595",
                  time: "2022-01-26T10:25:47.870Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545594",
                  time: "2022-01-26T10:24:31.994Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545593",
                  time: "2022-01-26T10:22:12.641Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545592",
                  time: "2022-01-26T10:12:21.782Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545591",
                  time: "2022-01-26T10:09:55.836Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545590",
                  time: "2022-01-26T10:09:27.961Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545589",
                  time: "2022-01-26T10:05:45.682Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545588",
                  time: "2022-01-26T10:04:29.644Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545587",
                  time: "2022-01-26T10:00:11.560Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545586",
                  time: "2022-01-26T09:57:05.671Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545585",
                  time: "2022-01-26T09:56:01.602Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545584",
                  time: "2022-01-26T09:55:27.682Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545583",
                  time: "2022-01-26T09:52:45.657Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545582",
                  time: "2022-01-26T09:51:21.475Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545581",
                  time: "2022-01-26T09:51:19.596Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545580",
                  time: "2022-01-26T09:50:51.562Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545579",
                  time: "2022-01-26T09:50:09.518Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545578",
                  time: "2022-01-26T09:47:55.591Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545577",
                  time: "2022-01-26T09:46:39.527Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545576",
                  time: "2022-01-26T09:46:03.537Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545575",
                  time: "2022-01-26T09:43:35.578Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545574",
                  time: "2022-01-26T09:37:29.563Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545573",
                  time: "2022-01-26T09:36:07.635Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545572",
                  time: "2022-01-26T09:34:01.440Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545571",
                  time: "2022-01-26T09:33:55.472Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545570",
                  time: "2022-01-26T09:33:19.437Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545569",
                  time: "2022-01-26T09:32:03.440Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545568",
                  time: "2022-01-26T09:30:33.982Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545567",
                  time: "2022-01-26T09:28:59.437Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545566",
                  time: "2022-01-26T09:28:17.531Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545565",
                  time: "2022-01-26T09:27:23.704Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545564",
                  time: "2022-01-26T09:23:36.409Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545563",
                  time: "2022-01-26T09:14:05.404Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545562",
                  time: "2022-01-26T09:12:45.364Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545561",
                  time: "2022-01-26T09:09:15.276Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545560",
                  time: "2022-01-26T09:06:51.335Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545559",
                  time: "2022-01-26T09:06:15.281Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545558",
                  time: "2022-01-26T09:05:53.272Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545557",
                  time: "2022-01-26T09:04:47.951Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545556",
                  time: "2022-01-26T09:03:19.737Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545555",
                  time: "2022-01-26T08:58:07.276Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545554",
                  time: "2022-01-26T08:56:57.348Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545553",
                  time: "2022-01-26T08:55:19.935Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545552",
                  time: "2022-01-26T08:51:09.358Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545551",
                  time: "2022-01-26T08:48:53.202Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545550",
                  time: "2022-01-26T08:48:07.237Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545549",
                  time: "2022-01-26T08:46:39.186Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545548",
                  time: "2022-01-26T08:46:25.157Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545547",
                  time: "2022-01-26T08:45:53.157Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545546",
                  time: "2022-01-26T08:45:35.147Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545545",
                  time: "2022-01-26T08:45:27.475Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545544",
                  time: "2022-01-26T08:41:45.149Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545543",
                  time: "2022-01-26T08:41:05.352Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545542",
                  time: "2022-01-26T08:37:21.525Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545541",
                  time: "2022-01-26T08:36:05.230Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545540",
                  time: "2022-01-26T08:34:07.077Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545539",
                  time: "2022-01-26T08:34:04.183Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545538",
                  time: "2022-01-26T08:30:57.122Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545537",
                  time: "2022-01-26T08:28:49.082Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545536",
                  time: "2022-01-26T08:27:19.304Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545535",
                  time: "2022-01-26T08:24:33.079Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545534",
                  time: "2022-01-26T08:22:01.039Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545533",
                  time: "2022-01-26T08:21:43.849Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545532",
                  time: "2022-01-26T08:20:35.434Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545531",
                  time: "2022-01-26T08:17:45.011Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545530",
                  time: "2022-01-26T08:11:43.199Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545529",
                  time: "2022-01-26T08:11:32.980Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545528",
                  time: "2022-01-26T08:11:29.177Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545527",
                  time: "2022-01-26T08:09:21.210Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545526",
                  time: "2022-01-26T08:05:39.015Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545525",
                  time: "2022-01-26T08:04:31.463Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545524",
                  time: "2022-01-26T08:03:05.057Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545523",
                  time: "2022-01-26T08:00:43.443Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545522",
                  time: "2022-01-26T07:56:46.886Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545521",
                  time: "2022-01-26T07:56:31.144Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545520",
                  time: "2022-01-26T07:46:33.015Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545519",
                  time: "2022-01-26T07:43:17.305Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545518",
                  time: "2022-01-26T07:38:52.775Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545517",
                  time: "2022-01-26T07:38:38.971Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545516",
                  time: "2022-01-26T07:37:08.739Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545515",
                  time: "2022-01-26T07:37:00.848Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545514",
                  time: "2022-01-26T07:34:04.272Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545513",
                  time: "2022-01-26T07:31:46.735Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545512",
                  time: "2022-01-26T07:31:42.761Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545511",
                  time: "2022-01-26T07:26:24.829Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545510",
                  time: "2022-01-26T07:24:10.695Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545509",
                  time: "2022-01-26T07:23:34.772Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545508",
                  time: "2022-01-26T07:19:34.741Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545507",
                  time: "2022-01-26T07:16:12.802Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545506",
                  time: "2022-01-26T07:13:12.680Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545505",
                  time: "2022-01-26T07:10:34.713Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545504",
                  time: "2022-01-26T07:09:04.997Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545503",
                  time: "2022-01-26T07:05:34.651Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545502",
                  time: "2022-01-26T07:04:36.641Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545501",
                  time: "2022-01-26T07:04:30.584Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545500",
                  time: "2022-01-26T07:04:18.750Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545499",
                  time: "2022-01-26T07:03:00.672Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545498",
                  time: "2022-01-26T06:59:14.690Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545497",
                  time: "2022-01-26T06:57:24.596Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545496",
                  time: "2022-01-26T06:57:04.572Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545495",
                  time: "2022-01-26T06:56:04.778Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545494",
                  time: "2022-01-26T06:54:17.368Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545493",
                  time: "2022-01-26T06:49:42.494Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545492",
                  time: "2022-01-26T06:49:25.458Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545491",
                  time: "2022-01-26T06:49:16.459Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545490",
                  time: "2022-01-26T06:47:08.518Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545489",
                  time: "2022-01-26T06:46:46.660Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545488",
                  time: "2022-01-26T06:45:52.580Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545487",
                  time: "2022-01-26T06:44:22.633Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545486",
                  time: "2022-01-26T06:41:18.519Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545485",
                  time: "2022-01-26T06:40:18.571Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545484",
                  time: "2022-01-26T06:38:30.528Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545483",
                  time: "2022-01-26T06:36:56.396Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545482",
                  time: "2022-01-26T06:33:34.816Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545481",
                  time: "2022-01-26T06:32:35.877Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545480",
                  time: "2022-01-26T06:26:13.626Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545479",
                  time: "2022-01-26T06:19:56.502Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545478",
                  time: "2022-01-26T06:18:36.452Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545477",
                  time: "2022-01-26T06:14:42.630Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545476",
                  time: "2022-01-26T06:12:53.648Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545475",
                  time: "2022-01-26T06:12:04.308Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545474",
                  time: "2022-01-26T06:10:34.250Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545473",
                  time: "2022-01-26T06:00:56.229Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545472",
                  time: "2022-01-26T05:58:24.233Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545471",
                  time: "2022-01-26T05:58:00.198Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545470",
                  time: "2022-01-26T05:54:52.129Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545469",
                  time: "2022-01-26T05:54:48.398Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545468",
                  time: "2022-01-26T05:54:30.349Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545467",
                  time: "2022-01-26T05:52:04.577Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545466",
                  time: "2022-01-26T05:39:08.401Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545465",
                  time: "2022-01-26T05:30:34.090Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545464",
                  time: "2022-01-26T05:29:47.990Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545463",
                  time: "2022-01-26T05:29:44.072Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545462",
                  time: "2022-01-26T05:28:48.065Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545461",
                  time: "2022-01-26T05:27:40.054Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545460",
                  time: "2022-01-26T05:27:22.140Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545459",
                  time: "2022-01-26T05:26:26.353Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545458",
                  time: "2022-01-26T05:24:36.064Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545457",
                  time: "2022-01-26T05:22:34.099Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545456",
                  time: "2022-01-26T05:22:22.515Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545455",
                  time: "2022-01-26T05:17:28.018Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545454",
                  time: "2022-01-26T05:10:25.887Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545453",
                  time: "2022-01-26T05:10:21.965Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545452",
                  time: "2022-01-26T05:09:42.087Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545451",
                  time: "2022-01-26T05:09:00.136Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545450",
                  time: "2022-01-26T05:07:58.009Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545449",
                  time: "2022-01-26T05:04:37.937Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545448",
                  time: "2022-01-26T05:04:20.033Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545447",
                  time: "2022-01-26T05:01:41.134Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545446",
                  time: "2022-01-26T04:59:18.010Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545445",
                  time: "2022-01-26T04:57:31.924Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545444",
                  time: "2022-01-26T04:56:24.020Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545443",
                  time: "2022-01-26T04:55:03.905Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545442",
                  time: "2022-01-26T04:49:07.813Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545441",
                  time: "2022-01-26T04:46:31.814Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545440",
                  time: "2022-01-26T04:46:17.841Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545439",
                  time: "2022-01-26T04:45:33.789Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545438",
                  time: "2022-01-26T04:45:21.960Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545437",
                  time: "2022-01-26T04:41:48.660Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545436",
                  time: "2022-01-26T04:29:23.806Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545435",
                  time: "2022-01-26T04:28:09.972Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545434",
                  time: "2022-01-26T04:26:09.731Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545433",
                  time: "2022-01-26T04:23:31.712Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545432",
                  time: "2022-01-26T04:23:25.695Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545431",
                  time: "2022-01-26T04:20:13.707Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545430",
                  time: "2022-01-26T04:19:33.707Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545429",
                  time: "2022-01-26T04:18:55.711Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545428",
                  time: "2022-01-26T04:17:50.239Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545427",
                  time: "2022-01-26T04:17:16.234Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545426",
                  time: "2022-01-26T04:11:05.657Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545425",
                  time: "2022-01-26T04:10:45.749Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545424",
                  time: "2022-01-26T04:09:13.987Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545423",
                  time: "2022-01-26T04:05:47.743Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545422",
                  time: "2022-01-26T04:04:53.828Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545421",
                  time: "2022-01-26T04:01:35.640Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545420",
                  time: "2022-01-26T04:01:22.032Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545419",
                  time: "2022-01-26T03:59:34.058Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545418",
                  time: "2022-01-26T03:54:35.658Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545417",
                  time: "2022-01-26T03:53:31.745Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545416",
                  time: "2022-01-26T03:52:39.797Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545415",
                  time: "2022-01-26T03:52:07.802Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545414",
                  time: "2022-01-26T03:50:19.653Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545413",
                  time: "2022-01-26T03:47:17.625Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545412",
                  time: "2022-01-26T03:45:39.578Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545411",
                  time: "2022-01-26T03:44:15.674Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545410",
                  time: "2022-01-26T03:43:07.573Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545409",
                  time: "2022-01-26T03:38:57.516Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545408",
                  time: "2022-01-26T03:38:41.499Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545407",
                  time: "2022-01-26T03:38:37.526Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545406",
                  time: "2022-01-26T03:35:59.716Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545405",
                  time: "2022-01-26T03:34:51.672Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545404",
                  time: "2022-01-26T03:33:11.913Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545403",
                  time: "2022-01-26T03:27:23.126Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545402",
                  time: "2022-01-26T03:25:25.496Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545401",
                  time: "2022-01-26T03:20:53.509Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545400",
                  time: "2022-01-26T03:17:45.555Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545399",
                  time: "2022-01-26T03:15:53.491Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545398",
                  time: "2022-01-26T03:14:05.652Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545397",
                  time: "2022-01-26T03:11:25.377Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545396",
                  time: "2022-01-26T03:09:25.635Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545395",
                  time: "2022-01-26T03:08:47.501Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545394",
                  time: "2022-01-26T03:07:13.401Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545393",
                  time: "2022-01-26T03:06:37.457Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545392",
                  time: "2022-01-26T03:03:15.637Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545391",
                  time: "2022-01-26T02:59:43.390Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545390",
                  time: "2022-01-26T02:58:11.418Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545389",
                  time: "2022-01-26T02:57:47.235Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545388",
                  time: "2022-01-26T02:57:42.559Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545387",
                  time: "2022-01-26T02:55:19.287Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545386",
                  time: "2022-01-26T02:54:53.274Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545385",
                  time: "2022-01-26T02:54:17.372Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545384",
                  time: "2022-01-26T02:51:51.265Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545383",
                  time: "2022-01-26T02:51:45.373Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545382",
                  time: "2022-01-26T02:50:27.297Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545381",
                  time: "2022-01-26T02:47:23.369Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545380",
                  time: "2022-01-26T02:45:37.263Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545379",
                  time: "2022-01-26T02:44:00.003Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545378",
                  time: "2022-01-26T02:34:11.889Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545377",
                  time: "2022-01-26T02:27:01.164Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545376",
                  time: "2022-01-26T02:26:37.150Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545375",
                  time: "2022-01-26T02:26:24.374Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545374",
                  time: "2022-01-26T02:22:13.314Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545373",
                  time: "2022-01-26T02:19:59.142Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545372",
                  time: "2022-01-26T02:19:47.457Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545371",
                  time: "2022-01-26T02:16:53.023Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545370",
                  time: "2022-01-26T02:16:41.181Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545369",
                  time: "2022-01-26T02:14:25.158Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545368",
                  time: "2022-01-26T02:03:15.065Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545367",
                  time: "2022-01-26T01:59:00.940Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545366",
                  time: "2022-01-26T01:58:46.908Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545364",
                  time: "2022-01-26T01:58:34.922Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545363",
                  time: "2022-01-26T01:55:28.907Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545362",
                  time: "2022-01-26T01:54:44.933Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545361",
                  time: "2022-01-26T01:52:40.927Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545360",
                  time: "2022-01-26T01:49:58.924Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545359",
                  time: "2022-01-26T01:46:32.838Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545358",
                  time: "2022-01-26T01:46:28.955Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545357",
                  time: "2022-01-26T01:43:54.933Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545356",
                  time: "2022-01-26T01:42:16.971Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545355",
                  time: "2022-01-26T01:42:04.996Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545354",
                  time: "2022-01-26T01:40:27.058Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545353",
                  time: "2022-01-26T01:38:58.967Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545352",
                  time: "2022-01-26T01:37:54.905Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545351",
                  time: "2022-01-26T01:36:46.825Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545350",
                  time: "2022-01-26T01:36:00.805Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545349",
                  time: "2022-01-26T01:35:51.015Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545348",
                  time: "2022-01-26T01:34:25.087Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545347",
                  time: "2022-01-26T01:32:16.886Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545346",
                  time: "2022-01-26T01:30:35.038Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545345",
                  time: "2022-01-26T01:27:38.750Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545344",
                  time: "2022-01-26T01:25:18.934Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545343",
                  time: "2022-01-26T01:23:35.542Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545342",
                  time: "2022-01-26T01:23:34.045Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545341",
                  time: "2022-01-26T01:17:36.750Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545340",
                  time: "2022-01-26T01:17:32.894Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545339",
                  time: "2022-01-26T01:16:04.917Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545338",
                  time: "2022-01-26T01:14:28.848Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545337",
                  time: "2022-01-26T01:13:02.522Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545336",
                  time: "2022-01-26T01:10:36.661Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545335",
                  time: "2022-01-26T01:10:25.664Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545334",
                  time: "2022-01-26T01:08:04.754Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545333",
                  time: "2022-01-26T01:06:48.653Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545332",
                  time: "2022-01-26T01:06:28.783Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545331",
                  time: "2022-01-26T01:04:43.065Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545330",
                  time: "2022-01-26T00:56:24.864Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545329",
                  time: "2022-01-26T00:54:30.712Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545328",
                  time: "2022-01-26T00:54:06.836Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545327",
                  time: "2022-01-26T00:52:35.835Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545326",
                  time: "2022-01-26T00:50:16.804Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545325",
                  time: "2022-01-26T00:47:14.612Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545324",
                  time: "2022-01-26T00:46:06.799Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545323",
                  time: "2022-01-26T00:44:08.522Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545322",
                  time: "2022-01-26T00:41:50.538Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545321",
                  time: "2022-01-26T00:41:20.510Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545320",
                  time: "2022-01-26T00:41:14.608Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545319",
                  time: "2022-01-26T00:40:08.718Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545318",
                  time: "2022-01-26T00:37:46.555Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545317",
                  time: "2022-01-26T00:37:12.596Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545316",
                  time: "2022-01-26T00:35:52.443Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545315",
                  time: "2022-01-26T00:35:38.606Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545314",
                  time: "2022-01-26T00:34:46.531Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545313",
                  time: "2022-01-26T00:33:36.584Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545312",
                  time: "2022-01-26T00:33:26.642Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545311",
                  time: "2022-01-26T00:31:26.415Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545310",
                  time: "2022-01-26T00:31:24.427Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545309",
                  time: "2022-01-26T00:30:54.632Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545308",
                  time: "2022-01-26T00:29:01.158Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545307",
                  time: "2022-01-26T00:21:46.506Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545306",
                  time: "2022-01-26T00:20:53.826Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545305",
                  time: "2022-01-26T00:19:50.594Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545304",
                  time: "2022-01-26T00:18:28.479Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545303",
                  time: "2022-01-26T00:18:08.944Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545302",
                  time: "2022-01-26T00:18:05.715Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545301",
                  time: "2022-01-26T00:13:12.353Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545300",
                  time: "2022-01-26T00:12:49.955Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545299",
                  time: "2022-01-26T00:10:32.574Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545298",
                  time: "2022-01-26T00:10:04.488Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545297",
                  time: "2022-01-26T00:07:46.386Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545296",
                  time: "2022-01-26T00:04:46.506Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545295",
                  time: "2022-01-26T00:01:16.549Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545294",
                  time: "2022-01-25T23:51:48.263Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545293",
                  time: "2022-01-25T23:51:10.340Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545292",
                  time: "2022-01-25T23:47:38.247Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545291",
                  time: "2022-01-25T23:44:36.195Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545290",
                  time: "2022-01-25T23:44:14.220Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545289",
                  time: "2022-01-25T23:44:00.209Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545288",
                  time: "2022-01-25T23:42:36.296Z",
                  rate: "0",
                },
                {
                  blockHeight: "2545287",
                  time: "2022-01-25T23:40:40.188Z",
                  rate: "0",
                },
              ],
              120
            )}
          >
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
