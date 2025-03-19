"use client";
import { useState } from "react";
import { Button } from "../ui/button";
import { Slider } from "../ui/slider";
import { Input } from "../ui/Input";

const CountryFilter = () => {
  const [range, setRange] = useState([0.44, 783.72]);
  const [minInput, setMinInput] = useState("2");
  const [maxInput, setMaxInput] = useState("3150");

  // Handle slider change
  const handleRangeChange = (newRange) => {
    setRange(newRange);
    setMinInput(newRange[0].toString());
    setMaxInput(newRange[1].toString());
  };

  // Handle min input change
  const handleMinChange = (e) => {
    const newMin = Number.parseFloat(e.target.value);
    if (!isNaN(newMin) && newMin <= range[1]) {
      setMinInput(e.target.value);
      setRange([newMin, range[1]]);
    }
  };

  // Handle max input change
  const handleMaxChange = (e) => {
    const newMax = Number.parseFloat(e.target.value);
    if (!isNaN(newMax) && newMax >= range[0]) {
      setMaxInput(e.target.value);
      setRange([range[0], newMax]);
    }
  };

  return (
    <aside className="min-w-[300px]">
      <div>
        <aside className="hidden lg:block min-w-[300px] rounded p-3 bg-gray-100 w-full lg:w-[initial]">
          {" "}
          {/* cities  */}
          <div className="bg-white rounded-md mb-2">
            <div className="p-3">
              <h1 className="font-semibold text-xl mb-3">Cities</h1>
              <ul>
                <li>
                  <button
                    className="flex items-center justify-between w-full"
                    type="button"
                  >
                    <label className="flex gap-3 cursor-pointer items-center py-2 text-left">
                      <input type="checkbox" className="p-2" />
                      Dubai
                    </label>
                  </button>
                </li>
                <li>
                  <button
                    className="flex items-center justify-between w-full"
                    type="button"
                  >
                    <label className="flex gap-3 cursor-pointer items-center py-2 text-left">
                      <input type="checkbox" className="p-2" />
                      Sharjah
                    </label>
                  </button>
                </li>
              </ul>
              <span className="text-primary underline cursor-pointer">
                Show more
              </span>
            </div>
          </div>
          {/* Categories  */}
          <div className="bg-white rounded-md mb-2">
            <div className="p-3">
              <h1 className="font-semibold text-xl mb-3">Categories</h1>
              <ul>
                <li>
                  <button
                    className="flex items-center justify-between w-full"
                    type="button"
                  >
                    <label className="flex gap-3 cursor-pointer items-center py-2 text-left">
                      <input type="checkbox" className="p-2" />
                      Desert Safari Tour
                    </label>
                  </button>
                </li>
                <li>
                  <button
                    className="flex items-center justify-between w-full"
                    type="button"
                  >
                    <label className="flex gap-3 cursor-pointer items-center py-2 text-left">
                      <input type="checkbox" className="p-2" />
                      City Tour
                    </label>
                  </button>
                </li>
                <li>
                  <button
                    className="flex items-center justify-between w-full"
                    type="button"
                  >
                    <label className="flex gap-3 cursor-pointer items-center py-2 text-left">
                      <input type="checkbox" className="p-2" />
                      City Tour
                    </label>
                  </button>
                </li>
                <li>
                  <button
                    className="flex items-center justify-between w-full"
                    type="button"
                  >
                    <label className="flex gap-3 cursor-pointer items-center py-2 text-left">
                      <input type="checkbox" className="p-2" />
                      City Tour
                    </label>
                  </button>
                </li>
              </ul>
              <span className="text-primary underline cursor-pointer">
                Show more
              </span>
            </div>
          </div>
          {/* price  */}
          <div className="bg-white rounded-md mb-2">
            <div className="p-3">
              <h1 className="font-semibold text-xl mb-3">Price Range</h1>
              <div className="flex justify-between text-sm font-medium text-gray-700 mt-4">
                <span>$ {range[0].toFixed(2)}</span>
                <span>$ {range[1].toFixed(2)}</span>
              </div>

              <Slider
                defaultValue={[0.44, 783.72]}
                max={3150}
                min={0}
                step={0.01}
                value={range}
                onValueChange={handleRangeChange}
                className="mt-4"
              />

              {/* Input fields */}
              <div className="flex justify-between gap-4 mt-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-900">
                    Min Price
                  </label>
                  <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
                    <Input
                      type="number"
                      value={minInput}
                      onChange={handleMinChange}
                      className="w-full px-2 py-1 border-r border-gray-300 text-right"
                      min={0}
                      max={range[1]}
                      step={0.01}
                    />
                    <span className="px-3  text-gray-700 text-sm font-medium">
                      USD
                    </span>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-900">
                    Max Price
                  </label>
                  <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
                    <Input
                      type="number"
                      value={maxInput}
                      onChange={handleMaxChange}
                      className="w-full px-2 py-1 border-r border-gray-300 text-right"
                      min={range[0]}
                      max={3150}
                      step={0.01}
                    />
                    <span className="px-3 text-gray-700 text-sm font-medium">
                      USD
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </aside>
  );
};

export default CountryFilter;
