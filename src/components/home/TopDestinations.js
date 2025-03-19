"use client";
import { useEffect } from "react";
import Link from "next/link";
import DestinationCard from "./DestinationCard";
import {
  continentsAtom,
  fetchContinentsLoadableAtom,
} from "../../../store/atoms/continents/ContinentsAtom";
import { useAtom } from "jotai";
import DestinationsSkeleton from "../skeletons/DestinationSkeleton";

const continentToImageMap = {
  Asia: "/images/asia.jpg",
  Europe: "/images/europe.jpg",
  Africa: "/images/africa.jpg",
  "South America": "/images/latin-america.jpg",
  "North America": "/images/north-america.jpg",
  Australia: "/images/australia.jpg",
};

const TopDestinations = () => {
  const [fetchContinentsLoadable] = useAtom(fetchContinentsLoadableAtom);
  const [continents, setContinents] = useAtom(continentsAtom);

  useEffect(() => {
    if (fetchContinentsLoadable.state === "hasData") {
      setContinents(fetchContinentsLoadable.data);
    }
  }, [
    fetchContinentsLoadable.state,
    fetchContinentsLoadable.data,
    setContinents,
  ]);

  return (
    <section className="py-10 ">
      <div className="mx-auto w-full px-4 container">
        <header className="w-full flex justify-between">
          <h2 className="text-3xl font-semibold">Top Destinations</h2>
        </header>

        {fetchContinentsLoadable.state === "loading" ? (
          <DestinationsSkeleton />
        ) : (
          <div className="w-full grid grid-cols-1 md:grid-cols-2  gap-4 mt-5">
            {continents.map((continent, index) => (
              <DestinationCard
                key={continent._id}
                title={continent.name}
                image={continentToImageMap[continent.name]}
                destinations={continent.countries}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default TopDestinations;
