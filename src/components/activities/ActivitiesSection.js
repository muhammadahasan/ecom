"use client";
import { Filter } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { useEffect, useState } from "react";
import ActivityCard from "../common/ActivityCard";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "../ui/pagination";
import { useAtom } from "jotai";
import {
  activitiesAtom,
  fetchActivitiesLoadableAtom,
} from "../../../store/atoms/activities/ActivitiesAtom";
import ActivitiesSkeleton from "../skeletons/ActivitiesSkeleton";

const ActivitiesSection = () => {
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

  return (
    <section className="w-full">
      <div className="bg-gray-100 rounded-lg p-3 flex justify-between items-center">
        <p className="text-sm">
          {fetchActivitiesLoadable?.data?.count} Activities
        </p>
        <div className="hidden lg:flex gap-2 items-center">
          <span className="text-nowrap">Sort By:</span>
          <Select className="">
            <SelectTrigger className=" rounded-md border-0 !w-48 bg-white">
              <SelectValue placeholder="Lowest Price" />
            </SelectTrigger>
            <SelectContent className="bg-white">
              <SelectGroup>
                <SelectItem value="low">Lowest Price</SelectItem>
                <SelectItem value="high">Highest Price</SelectItem>
                <SelectItem value="popularity">Popularity</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        <div className="flex lg:hidden">
          <button type="button" className="p-2 flex items-center gap-1">
            <Filter className="w-4 h-4" />
            <span className="text-sm">Filter</span>
          </button>
        </div>
      </div>

      <div>
        {fetchActivitiesLoadable.state === "loading" ? (
          <ActivitiesSkeleton className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" />
        ) : (
          <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-4 mt-7 ">
            {activities.map((activity, index) => (
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
          </section>
        )}
        <div className="flex gap-2 mt-11">
          <Pagination className="justify-start">
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  href="#"
                  className="flex justify-center items-center p-[10px] border border-[#d1d5db] rounded-full hover:bg-[#f60] hover:text-white"
                />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink
                  href="#"
                  className="flex justify-center items-center p-[10px] border border-[#d1d5db] rounded-full hover:bg-[#f60] hover:text-white"
                >
                  1
                </PaginationLink>
              </PaginationItem>

              <PaginationItem>
                <PaginationNext
                  href="#"
                  className="flex justify-center items-center p-[10px] border border-[#d1d5db] rounded-full hover:bg-[#f60] hover:text-white"
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </div>
    </section>
  );
};

export default ActivitiesSection;
