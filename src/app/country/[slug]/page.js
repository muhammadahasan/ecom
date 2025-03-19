"use client";
import CountryFilter from "@/components/country/CountryFilter";
import CountrySection from "@/components/country/CountrySection";
import Image from "next/image";
import { useEffect, useState } from "react";
import {
  activitiesAtom,
  countryNameAtom,
  fetchActivitiesLoadableAtom,
} from "../../../../store/atoms/activities/ActivitiesAtom";
import { useParams, usePathname } from "next/navigation";
import { useAtom } from "jotai";

const CountryPage = () => {
  const params = useParams(); // Unwrapping the promise-based params
  const pathname = usePathname();

  const [country, setCountry] = useState("");
  const [_, setCountryName] = useAtom(countryNameAtom);
  const [fetchActivitiesLoadable] = useAtom(fetchActivitiesLoadableAtom);
  const [activities, setActivities] = useAtom(activitiesAtom);

  useEffect(() => {
    if (params?.slug) {
      const countryName =
        params.slug.charAt(0).toUpperCase() + params.slug.slice(1);
      setCountry(countryName);
      setCountryName(countryName);
    }

    return () => {
      setCountryName("");
    };
  }, [params, pathname, setCountryName]);

  useEffect(() => {
    if (fetchActivitiesLoadable.state === "hasData") {
      setActivities(fetchActivitiesLoadable.data.data);
    }
  }, [
    fetchActivitiesLoadable.state,
    fetchActivitiesLoadable.data,
    setActivities,
  ]);

  console.log("Activities:", activities);
  console.log("Fetch Activities Loadable:", fetchActivitiesLoadable);

  return (
    <div className="pb-20">
      <div className="bg-cover bg-center">
        <div className="relative overflow-hidden text-white py-14 text-center bg-black/40 lg:min-h-[450px] flex flex-col items-center justify-center">
          <Image
            src="/images/activity-bg.jpg"
            alt="Activities"
            fill
            className="absolute top-0 left-0 right-0 z-[-1] w-full h-full"
          />
          <h1 className="font-bold text-1xl lg:text-5xl page-title mb-2 px-5 before:h-[1px] after:h-[1px] after:bg-white/50 after:inline-block after:relative after:align-middle after:w-[6%] before:bg-white/50 before:inline-block before:relative before:align-middle before:w-[6%] before:right-4 after:left-4 capitalize w-[100%]">
            Things to Do in {country}
          </h1>
          <p className="text-white">Explore the best of {country}!</p>
        </div>
      </div>

      <div className="container mx-auto px-4 w-full xl:w-[90%] mt-4 lg:mt-9 flex flex-col items-start lg:flex-row lg:gap-5">
        <CountryFilter />
        <CountrySection
          activities={activities}
          fetchActivitiesLoadable={fetchActivitiesLoadable}
        />
      </div>
    </div>
  );
};

export default CountryPage;
