"use client";
import { Filter, Package, Search } from "lucide-react";
import SelectComp from "../common/SelectComp";
import { use, useEffect, useState } from "react";
import { Button } from "../ui/button";
import PackageCard from "../common/PackageCard";

const countryOptions = [
  { value: "france", label: "France" },
  { value: "itlay", label: "Itlay" },
  { value: "Dubai", label: "Dubai" },
];

const HolidayPackagesComp = () => {
  const [countries, setCountries] = useState("");
  const [showFilters, setShowFilters] = useState(false);

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/json/packages.json");
      const result = await response.json();
      setData(result);
    };

    fetchData();
  }, []);

  return (
    <div>
      <div className="mt-5">
        <h2 className="text-2xl font-bold py-2">
          Dubai Trending Holiday Packages:
        </h2>
        <p className="text-sm">
          Explore Dubai with our trending holiday packages. We have tailor-made
          holiday packages for both small and large group clients. Whether you
          want a short break or a long trip we have complete holiday packages
          which fit our client’s requirements. Further if required these Holiday
          Packages can be customized as per our client’s request.
        </p>
      </div>

      <div className="bg-gray-100 rounded-lg p-3 flex justify-between items-center lg:pl-4 mt-3">
        <p className="text-sm">18 Packages</p>
        <div className="flex">
          <button
            type="button"
            className="p-2 flex items-center gap-1"
            onClick={() => setShowFilters((prev) => !prev)}
          >
            <Filter className="w-4 h-4" />
            <span className="text-sm">Filter</span>
          </button>
        </div>
      </div>

      {showFilters && (
        <div className="bg-gray-100 rounded-lg p-5 flex flex-wrap justify-between items-end gap-3 [&_select]:w-full [&>div]:flex-[0_1_calc(50%_-_10px)] lg:[&>div]:flex-1 [&_select]:mt-2">
          {/* country  */}
          <div className="relative flex flex-col gap-1">
            <p className="text-sm font-medium">Country</p>
            <SelectComp
              placeholder="Select Country"
              options={countryOptions}
              value={countries}
              onChange={setCountries}
              className="!w-full"
            />
          </div>

          {/* city  */}
          <div className="relative flex flex-col gap-1">
            <p className="text-sm font-medium">City</p>
            <SelectComp
              placeholder="Select Country"
              options={countryOptions}
              value={countries}
              onChange={setCountries}
              className="!w-full"
            />
          </div>

          {/* nights  */}
          <div className="relative flex flex-col gap-1">
            <p className="text-sm font-medium">No. of Nights</p>
            <SelectComp
              placeholder="Select Country"
              options={countryOptions}
              value={countries}
              onChange={setCountries}
              className="!w-full"
            />
          </div>

          {/* hotel  */}
          <div className="relative flex flex-col gap-1">
            <p className="text-sm font-medium">Which Star Hotel/Package</p>
            <SelectComp
              placeholder="Select Country"
              options={countryOptions}
              value={countries}
              onChange={setCountries}
              className="!w-full"
            />
          </div>

          {/* button  */}
          <div className="!flex-none mx-auto lg:mx-0 mt-3 lg:mt-0">
            <Button
              type="button"
              className="border-2 rounded-full font-semibold flex gap-1 items-center justify-center capitalize text-sm bg-primary border-primary text-white py-2 px-2  lg:px-5"
            >
              <Search className="w-4 h-4" />
              Search
            </Button>
          </div>
        </div>
      )}

      {/* cards grid  */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-2 lg:gap-3 mt-5">
        {data.map((pkg) => (
          <PackageCard
            key={pkg.id}
            title={pkg.title}
            image={pkg.image}
            country={pkg.country}
            nights={pkg.nights}
            days={pkg.days}
            price={pkg.price}
            original_price={pkg.original_price}
          />
        ))}
      </div>
    </div>
  );
};

export default HolidayPackagesComp;
