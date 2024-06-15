import ChartOverview from "./chartOverview";
const MarketList = () => {
  return (
    <div className="text-white bg-neutral-950 pb-5	 p-3 rounded-lg w-full   sm:pl-10 pr-10 pt-8 lg:flex gap-7 ">
      <div></div>
      <section className="flex-none w-fill pb-5 lg:w-5/12 ">
        <div className=" rounded-lg ">
          <div className="flex gap-2  pb-2 justify-between  ">
            <div >
              <h1 className="font-semibold text-sm pb-2  ">S&P 500</h1>
              <h1 className="font-semibold text-sm pb-2  ">S&P 500</h1>
              <h1 className="font-semibold text-sm pb-2  ">S&P 500</h1>
            </div>

            <div >
              <div className="flex gap-4 items-center  text-sm  pb-2">
                <h1>498.98%</h1>
                <h1>+4.76</h1>
                <h1 className="bg-green-900 rounded-lg px-2">+0.97%</h1>
              </div>
              <div className="flex gap-4 items-center  text-sm  pb-2">
                <h1>498.98%</h1>
                <h1>+4.76</h1>
                <h1 className="bg-green-900 rounded-lg px-2">+0.97%</h1>
              </div>
              <div className="flex gap-4 items-center  text-sm  pb-2">
                <h1>498.98%</h1>
                <h1>+4.76</h1>
                <h1 className="bg-green-900 rounded-lg px-2">+0.97%</h1>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="  w-full">
        <ChartOverview />
      </section>
    </div>
  );
};

export default MarketList;
