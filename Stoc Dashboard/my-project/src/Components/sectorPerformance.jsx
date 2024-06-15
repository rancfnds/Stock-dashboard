const SectorPerformance = () => {
  return (
    <div className="text-white w-full">
      <div className="bg-neutral-950 p-9 rounded-lg w-full sm:flex gap-3 justify-between md:gap-6">
        <div >
          <h1 className="font-bold">Sector performance</h1>
          <div className="flex gap-28 justify-between">
            <div>
              <h1 className="font-bold underline underline-offset-8 pb-2">
                All Sectors
              </h1>

              <h1>Industrial</h1>
              <h1>Industrial</h1>
              <h1>Industrial</h1>
              <h1>Industrial</h1>
            </div>
            <div>
              <h1 className="font-bold pb-2">+0.88%</h1>
              <h1>+1.66%</h1>
              <h1>+1.66%</h1> 
              <h1>+1.66%</h1> 
              <h1>+1.66%</h1>
            </div>
          </div>
        </div>

        <div className="pt-5 sm:pt-0 lg:pt:0 ">
          <h1 className="font-bold  ">%price change</h1>
          <div className="flex gap-28 justify-between">
            <div>
              <h1 className="gap-2">Health care</h1>
              <h1>Industrial</h1>
              <h1 className="gap-2">Health care</h1>
              <h1>Industrial</h1>
              <h1 className="gap-2">Health care</h1>
              <h1>Industrial</h1>
            </div>
            <div>
              <h1>+0.88%</h1>
              <h1>+1.66%</h1>
              <h1>+0.88%</h1>
              <h1>+1.66%</h1>
              <h1>+0.88%</h1>
              <h1>+1.66%</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectorPerformance;
