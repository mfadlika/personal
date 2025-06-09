import Card from "@/components/Card";
import "chart.js/auto";
import { GetServerSideProps } from "next";
import { Line, Pie } from "react-chartjs-2";
import { getStat } from "../pages/api/server";

const backgroundColor = [
  "rgba(255, 99, 132, 0.2)",
  "rgba(54, 162, 235, 0.2)",
  "rgba(255, 206, 86, 0.2)",
  "rgba(75, 192, 192, 0.2)",
  "rgba(153, 102, 255, 0.2)",
  "rgba(255, 159, 64, 0.2)",
  "rgba(32, 133, 236, 0.2)",
  "rgba(132, 100, 160, 0.2)",
  "rgba(206, 169, 188, 0.2)",
  "rgba(10, 65, 122, 0.2)",
];

const borderColor = [
  "rgba(255, 99, 132, 1)",
  "rgba(54, 162, 235, 1)",
  "rgba(255, 206, 86, 1)",
  "rgba(75, 192, 192, 1)",
  "rgba(153, 102, 255, 1)",
  "rgba(255, 159, 64, 1)",
  "rgba(32, 133, 236, 1)",
  "rgba(132, 100, 160, 1)",
  "rgba(206, 169, 188, 1)",
  "rgba(10, 65, 122, 1)",
];

interface DataProps {
  city: string;
  country: string;
  the_date: number;
  count: number;
}

type DataArrayProps = DataProps[];

export default function Stats(props: any) {
  const graph: DataArrayProps = Array.isArray(props.graph) ? props.graph : [];
  const city: DataArrayProps = Array.isArray(props.city) ? props.city : [];
  const country: DataArrayProps = Array.isArray(props.country) ? props.country : [];
  const stats = props.stats || [
    { total_visitors: 0, unique_visitors: 0, today_visitors: 0, weekly_visitors: 0 },
  ];

  var labels: number[] = [];
  var cityLabels: string[] = [];
  var count: number[] = [];
  var cityCount: number[] = [];
  var cityTotal: number = 0;
  var countryLabels: string[] = [];
  var countryCount: number[] = [];
  var countryTotal: number = 0;

  for (var val of graph) {
    labels.push(val.the_date);
    count.push(val.count);
  }

  for (var val of city) {
    cityLabels.push(val.city);
    cityCount.push(val.count);
    cityTotal += val.count;
  }

  for (var val of country) {
    countryLabels.push(val.country);
    countryCount.push(val.count);
    countryTotal += val.count;
  }

  const chart = {
    labels: [...labels],
    datasets: [
      {
        label: "Visitors",
        data: [...count],
        fill: true,
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,192,192,1)",
      },
    ],
  };

  const pieChartCity = {
    labels: [...cityLabels, "Other Cities"],
    datasets: [
      {
        label: "Visitors",
        data: [...cityCount, (stats[0]?.total_visitors ?? 0) - cityTotal],
        fill: true,
        backgroundColor: backgroundColor,
        borderColor: borderColor,
        borderWidth: 1,
      },
    ],
  };

  const pieChartCountry = {
    labels: [...countryLabels, "Other Countries"],
    datasets: [
      {
        label: "Visitors",
        data: [
          ...countryCount,
          (stats[0]?.total_visitors ?? 0) - countryTotal,
        ],
        fill: true,
        backgroundColor: backgroundColor,
        borderColor: borderColor,
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="w-screen h-screen overflow-scroll p-4 dark:bg-gray-800">
      <div className="w-full mx-auto text-center text-6xl font-extrabold mb-8 text-gray-700 dark:text-gray-100">
        Statistic
      </div>
      <div className="grid grid-cols-1 gap-1 md:grid-cols-2 md:gap-2 lg:grid-cols-4 md:gap-4 px-8">
        <Card
          label="Total Visitors"
          className="text-rose-500"
          count={stats[0]?.total_visitors ?? 0}
        ></Card>
        <Card
          label="Unique Visitors"
          className="text-sky-500"
          count={stats[0]?.unique_visitors ?? 0}
        ></Card>
        <Card
          label="Visitors Today"
          className="text-fuchsia-500"
          count={stats[0]?.today_visitors ?? 0}
        ></Card>
        <Card
          label="Visitors This Week"
          className="text-indigo-500"
          count={stats[0]?.weekly_visitors ?? 0}
        ></Card>
      </div>

      <div className="mt-4 py-8 border shadow">
        <Line
          data={chart}
          height={400}
          options={{
            maintainAspectRatio: false,
            responsive: true,
          }}
        />
      </div>
      <div className="w-full grid grid-cols-1 gap-1 lg:grid-cols-2 lg:gap-2 py-8">
        <div className="border shadow pb-4">
          <Pie
            data={pieChartCity}
            height={400}
            options={{
              maintainAspectRatio: false,
              responsive: true,
            }}
          />
        </div>
        <div className="border shadow pb-4">
          <Pie
            data={pieChartCountry}
            height={400}
            options={{
              maintainAspectRatio: false,
              responsive: true,
            }}
          />
        </div>
      </div>
    </div>
  );
}
