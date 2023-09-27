import React, { useEffect, useState } from "react";
import { Chart } from "react-google-charts";
import json from "../data.json";
export default function Statistic() {
  const [myDonation, setMyDonation] = useState(0);

  const calculationOfTotal = json
    .map((data) => Number(data.price.slice(1)))
    .reduce((acc, value) => {
      return acc + value;
    }, 0);

  useEffect(() => {
    const storedData = window.localStorage.getItem("data");
    if (storedData !== null) {
      const data = JSON.parse(storedData);
      const finalCalculation = data
        .map((data) => Number(data.price.slice(1)))
        .reduce((acc, value) => {
          return acc + value;
        }, 0);

      setMyDonation(finalCalculation);
    }
  }, []);

  const data = [
    ["Donation", "Total"],
    ["Total Donation", calculationOfTotal],
    ["Your Donation", myDonation],
  ];

  const options = {
    legend: "none",
    title: "",
    pieStartAngle: 100,
    slices: [{ color: "#FF444A" }, { color: "#00C49F" }],
  };
  return (
    <>
      <div className="mt-[6rem] w-full flex justify-center items-center">
        <div>
          {/* pie chart */}
          <Chart
            chartType="PieChart"
            data={data}
            options={options}
            width={"100%"}
            height={"400px"}
          />

          <div className="flex sm:flex-col md:flex-row sm:gap-y-8 items-center">
            <p>Your Donation</p>
            <div className="sm:ml-0 md:ml-4 w-[6.25rem] h-[0.75rem] bg-[#00C49F]"></div>
            <p className="sm:ml-0 md:ml-8">Total Donation</p>
            <div className="sm:ml-0 md:ml-4 w-[6.25rem] h-[0.75rem] bg-[#FF444A]"></div>
          </div>
        </div>
      </div>
    </>
  );
}
