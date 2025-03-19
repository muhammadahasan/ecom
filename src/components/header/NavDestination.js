"use client";

import { useEffect, useState } from "react";

const regions = [
  "Top Destinations",
  "South Asia / Middle East",
  "Europe / Africa",
  "Asia",
  "Oceania",
  "North America",
];

const NavDestinations = () => {
  const [activeRegion, setActiveRegion] = useState("Asia");
  const [hoveredCountry, setHoveredCountry] = useState("");
  const [destinations, setDestinations] = useState({}); // State to hold fetched destinations

  console.log("Active Region:", activeRegion);
  console.log("Hovered Country:", hoveredCountry);
  console.log("Destinations:", destinations);

  // Fetch destinations data from the JSON file
  useEffect(() => {
    const fetchDestinations = async () => {
      try {
        const response = await fetch("/json/destinations.json"); // Path to the static JSON file
        const data = await response.json();
        setDestinations(data); // Set the fetched data to state
      } catch (error) {
        console.error("Error fetching destinations:", error);
      }
    };

    fetchDestinations();
  }, []);

  return (
    <div className="flex gap-5 p-3">
      {/* Sidebar Navigation */}
      <div className="min-w-[250px]">
        <ul>
          {regions.map((region) => (
            <li
              key={region}
              className={`py-3 px-5 transition-colors rounded cursor-pointer ${
                activeRegion === region
                  ? "bg-primary text-white"
                  : "hover:bg-primary hover:text-white"
              }`}
              onMouseEnter={() => setActiveRegion(region)}
            >
              {region}
            </li>
          ))}
        </ul>
      </div>

      {/* Main Content Area */}
      <div className="grid grid-cols-4 content-start w-[600px] min-h-[400px] gap-5 overflow-y-auto h-[77vh]">
        {activeRegion &&
          destinations[activeRegion]?.map((country) => (
            <div
              key={country.name}
              className="col-span-4 grid grid-cols-4 auto-rows-max"
            >
              <h2 className="hover:bg-primary hover:text-white h-min rounded-md px-2 py-1 cursor-pointer">
                {country.name}
              </h2>
              <div className="col-span-3 flex flex-wrap gap-3">
                {country.cities.map((city) => (
                  <div
                    key={city.name}
                    className="rounded-md bg-cover font-medium bg-center text-white aspect-square flex justify-center items-end  overflow-hidden cursor-pointer"
                    style={{
                      backgroundImage: `url(${
                        city.image || "/placeholder.svg"
                      })`,
                      width: "132px",
                      height: "74px",
                    }}
                  >
                    <div className="text-xs font-semibold bg-gradient-to-b from-transparent via-[#02bbbbb3] to-[#02bbbbe6]  flex pt-4 pb-1 text-center justify-center w-full">
                      {city.name}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default NavDestinations;
