"use client";

import { useEffect, useState } from "react";
import PlaceCard from "../common/PlaceCard";
import Link from "next/link";
import {
  citiesAtom,
  fetchCitiesLoadableAtom,
} from "../../../store/atoms/cities/CitiesAtom";
import { useAtom } from "jotai";

const BestPlaces = () => {
  const [places, setPlaces] = useState([]);

  const [fetchCitiesLoadable] = useAtom(fetchCitiesLoadableAtom);
  const [cities, setCities] = useAtom(citiesAtom);

  useEffect(() => {
    if (fetchCitiesLoadable.state === "hasData") {
      setCities(fetchCitiesLoadable.data);
    }
  }, [fetchCitiesLoadable.state, fetchCitiesLoadable.data, setCities]);

  console.log("cities", cities);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/json/placeData.json");
      const result = await response.json();
      setPlaces(result);
    };

    fetchData();
  }, []);

  return (
    <section className="py-10 bg-[#f2f2f2]">
      <div className="mx-auto w-full px-4 container">
        <h3 className="text-3xl font-semibold">
          Best places to visit worldwide
        </h3>

        {/* places grid  */}
        <div className="grid grid-cols-1 gap-3 md:grid-cols-3 md:grid-rows-3 md:gap-4 mt-7">
          {cities.slice(1, 7).map((place, index) => (
            <div
              key={place._id}
              className={
                index === 0
                  ? "md:col-span-2 md:row-span-2 h-[184px] md:h-[390px]"
                  : "h-[184px]"
              }
            >
              <PlaceCard
                name={place.name}
                image={place.image}
                tours={place.activities}
              />
            </div>
          ))}
        </div>

        {/* <div className="flex justify-center">
          <Link
            href=""
            className="border-2 rounded-full font-semibold gap-1 items-center text-sm justify-center capitalize block mx-auto border-gray-800 px-12 py-3 mt-11"
          >
            See More
          </Link>
        </div> */}
      </div>
    </section>
  );
};

export default BestPlaces;
