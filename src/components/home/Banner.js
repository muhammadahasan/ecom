"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
// import { Calendar } from "../ui/calender";
import { Button } from "../ui/button";
import { Search } from "lucide-react";
import { format } from "date-fns";
// import { Input } from "../ui/input";
// import { Search } from "lucide-react";

const images = [
  "/images/maldives.jpg",
  "/images/riadh.jpg",
  "/images/taj.jpg",
  "/images/brighe.jpg",
];

const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [date, setDate] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 5 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <section className="relative block h-[75vh]">
      <Image
        src={images[currentIndex]}
        fill
        alt="banner"
        className="w-full h-full object-cover  transition-opacity duration-1000 ease-in-out"
      />

      <div className="flex items-center bg-gray-900/10 absolute h-full w-full inset-0 z-20">
        <div className="mx-auto w-full px-4 container flex flex-col items-center justify-center">
          <div className="text-white  relative z-10 hidden md:block">
            <h1 className="font-bold text-5xl">
              Amazing Tours & Holidays with NYF
            </h1>
            <p className="text-base mt-1 text-center">
              Plan better with 3000+ travel experiences.
            </p>
          </div>

          <div className="mt-6 w-[90vw] max-w-[40.65rem]">
            <div className="bg-white rounded-full p-2 flex flex-col md:flex-row items-center w-full max-w-3xl gap-2 md:gap-0">
              <div className="flex-1 w-full md:w-auto px-4 ">
                <label
                  htmlFor="location"
                  className="text-sm font-semibold text-gray-600"
                >
                  Where to?
                </label>
                <input
                  type="text"
                  id="location"
                  placeholder="Search for a place or activity"
                  className="w-full bg-transparent border-0 focus:outline-none text-xs placeholder:text-xs"
                />
              </div>
              <div className="w-px h-8 bg-gray-200 hidden md:block" />
              <div className="flex-1 w-full md:w-auto px-4">
                <label
                  htmlFor="date"
                  className="text-sm font-semibold text-gray-600"
                >
                  When?
                </label>
                <Popover>
                  <PopoverTrigger asChild>
                    <button
                      id="date"
                      className="w-full text-left bg-transparent border-0 focus:outline-none text-xs "
                    >
                      {date ? format(date, "PP") : "Select Date"}
                    </button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0 bg-white" align="start">
                    {/* <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      initialFocus
                    /> */}
                  </PopoverContent>
                </Popover>
              </div>
              <Button
                size="icon"
                className="rounded-full w-12 h-12 shrink-0 bg-blue-700 hover:bg-blue-800"
              >
                <Search className="h-5 w-5 text-white" />
                <span className="sr-only">Search</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
