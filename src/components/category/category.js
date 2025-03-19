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
import CommonFilter from "../common/Filter";

const Category = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/json/activitydata.json");
      const result = await response.json();
      setData(result);
    };

    fetchData();
  }, []);

  return (
    <div className="container mx-auto px-4 w-full xl:w-[90%] mt-4 lg:mt-9 flex flex-col items-start lg:flex-row lg:gap-5">
      <CommonFilter />

      <section className="w-full">
        <div className="bg-gray-100 rounded-lg p-3 flex justify-between items-center">
          <p className="text-sm">617 Activities</p>
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
          <section className="grid grid-cols-1 sm:grid-cols-2 gap-2 lg:gap-4 mt-7 lg:grid-cols-3">
            {data.map((activity, index) => (
              <ActivityCard
                key={index}
                name={activity.name}
                image={activity.image}
                discount={activity.discount}
                reviews={activity.reviews}
                price={activity.price}
                oldPrice={activity.oldPrice}
              />
            ))}
          </section>
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
    </div>
  );
};

export default Category;
