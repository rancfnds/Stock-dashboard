import React from "react";
import ChartOverview from "./chartOverview"; // Importing ChartOverview component
import { useFetchTopGainersLosers } from "../Api/api"; // Importing custom hook for fetching data

const MarketList = () => {
  const { gainersLosers } = useFetchTopGainersLosers(); // Using custom hook to fetch top gainers and losers data

  // Slice the data to include only the first 10 items
  const slicedData = gainersLosers.slice(0, 10); // Slicing the fetched data to show only the first 10 items

  return (
    <div className="text-white bg-neutral-950 pb-5 p-3 rounded-lg w-full sm:pl-10 pr-10 pt-8 lg:flex gap-7 ">
      {/* Left Section */}
      <section className="flex-none w-full pb-5 lg:w-5/12 ">
        <div className="rounded-lg flex pb-2">
          <div>
            {/* Checking if slicedData has items */}
            {slicedData.length > 0 ? (
              // Mapping over each item in slicedData
              slicedData.map((item, index) => (
                <div
                  key={index}
                  className="grid grid-cols-4 gap-4  text-sm mb-2 p-1 text-white hover:bg-slate-900	 required:ounded"
                >
                  {/* Company Name */}
                  <div className="pr-4">
                    <h1 className="font-semibold rounded">{item.company}</h1>
                  </div>
                  {/* Price */}
                  <h1 className="col-span-1 ">{item.price}</h1>
                  {/* Change Amount */}
                  <h1 className="col-span-1 text-green-700 ">{item.change_amount}</h1>
                  {/* Change Percentage */}
                  <h1
                    className={`col-span-1 rounded-sm px-1 text-green-700 text-center  ${
                      item.change_percentage >= 0 ? "bg-green-90 0 " : "bg-green-900"
                    }`}
                  >
                    {parseFloat(item.change_percentage).toFixed(1)}%
                  </h1>
                </div>
              ))
            ) : (
              // Display message if no data is available
              <p>No data available</p>
            )}
          </div>
        </div>
      </section>

      {/* Right Section */}
      <section className="w-full">
        <ChartOverview /> {/* Rendering ChartOverview component */}
      </section>
    </div>
  );
};

export default MarketList;
