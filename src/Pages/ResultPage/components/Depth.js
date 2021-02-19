import React from "react";

const Depth = () => {
  return (
    <div>
      <div className="grid md:grid-cols-5">
        <div className="col-span-2 border-r border-gray-300 p-8 text-center text-xs">
          <div className="grid grid-cols-5">
            <div className="col-span-1">
              <div className="p-3">Flooding likelihood</div>
              <div className="p-3">Lavel of risk</div>
            </div>
            <div className="col-span-4 grid grid-cols-4 bg-gray-100 items-center">
              <div>
                <div className="p-3">0.1%</div>
                <div className="p-3">Very Low</div>
              </div>
              <div>
                <div className="p-3">0.1%</div>
                <div className="p-3">Low</div>
              </div>
              <div>
                <div className="p-3">1%</div>
                <div className="p-3">medium</div>
              </div>
              <div>
                <div className="p-3">3.3%</div>
                <div className="p-3">High</div>
              </div>
            </div>
          </div>
        </div>
        <div className="p-8 col-span-3">
          <h3 className="text-xl font-black">Depth of water</h3>
          <p className="py-6">
            The deeper the water the more risk.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Depth;
