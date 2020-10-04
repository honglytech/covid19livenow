import React, { useEffect, useState } from "react";
import axios from "axios";
import "../App.css";
import ReactApexChart from "react-apexcharts";

function Graph() {
  const [cases, setcases] = useState([]);
  const [recovered, setrecovered] = useState([]);
  const [deaths, setdeaths] = useState([]);

  useEffect(() => {
    axios
      .all([
        axios.get("https://corona.lmao.ninja/v2/historical/all?lastdays=1095"),
      ])
      .then((responseArr) => {
        setcases(responseArr[0].data.cases);
        setrecovered(responseArr[0].data.recovered);
        setdeaths(responseArr[0].data.deaths);
      })
      .catch((error) => {
        return error;
      });
  }, []);

  var Cases = Object.entries(cases).map(([key,value]) => {
    return({x: key, y: value})
  });
  var Recovered = Object.entries(recovered).map(([key,value]) => {
    return({x: key, y: value})
  });
  var Deaths = Object.entries(deaths).map(([key,value]) => {
    return({x: key, y: value})
  });

  const series = [
    {
      name: "Cases",
      data: Cases,
    },
    {
      name: "Recovered",
      data: Recovered
    },
    {
      name: "Deaths",
      data: Deaths
    },
  ];

  const options = {
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
    xaxis: {
      type: "datetime",
      categories: [],
    },
    tooltip: {
      x: {
        format: "dd/MM/yy",
      },
    },
  };

  return (
    <div
      style={{
        backgroundColor: "white",
        textAlign: "center",
      }}
    >
      <br />
      <h2>COVID-19 Global Graphs</h2>
      <br />
      <ReactApexChart
        options={options}
        series={series}
        type="area"
        height={350}
      />
      <br />
      <ReactApexChart
        options={options}
        series={series}
        type="bar"
        height={350}
      />
    </div>
  );
}

export default Graph;
