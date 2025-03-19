"use client";
import { useEffect, useState } from "react";
import ActivityCard from "../common/ActivityCard";
import Link from "next/link";
import { useAtom } from "jotai";
import {
  activitiesAtom,
  fetchActivitiesLoadableAtom,
} from "../../../store/atoms/activities/ActivitiesAtom";
import ActivitiesSection from "../activities/ActivitiesSection";
import ActivitiesSkeleton from "../skeletons/ActivitiesSkeleton";

const PopularActivities = () => {
  const [fetchActivitiesLoadable] = useAtom(fetchActivitiesLoadableAtom);
  const [activities, setActivities] = useAtom(activitiesAtom);

  useEffect(() => {
    if (fetchActivitiesLoadable.state === "hasData") {
      setActivities(fetchActivitiesLoadable.data.data);
    }
  }, [
    fetchActivitiesLoadable.state,
    fetchActivitiesLoadable.data,
    setActivities,
  ]);

  if (fetchActivitiesLoadable.state === "hasError") {
    return (
      <div className="text-red-500">
        Error: {fetchActivitiesLoadable.error.message}
      </div>
    );
  }

  return (
    <section className="pb-10">
      <div className="mx-auto w-full px-4 container">
        <h2 className="text-3xl font-semibold">Popular Activities</h2>

        {fetchActivitiesLoadable.state === "loading" ? (
          <ActivitiesSkeleton className="grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4" />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-5">
            {activities.slice(0, 12).map((activity, index) => (
              <ActivityCard
                key={activity._id}
                name={activity.name}
                image={activity.images}
                discount={activity.discount}
                reviews={activity.reviewCount}
                price={activity.discountPrice}
                oldPrice={activity.originalPrice}
              />
            ))}
          </div>
        )}

        <div className="flex justify-center">
          <Link
            href="/activities"
            className="border-2 rounded-full font-semibold gap-1 items-center text-sm justify-center capitalize block mx-auto border-gray-800 px-12 py-3 mt-11"
          >
            See More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PopularActivities;
