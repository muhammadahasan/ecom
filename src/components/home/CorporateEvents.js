"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

const CorporateEvents = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/json/corporateEvents.json");
      const result = await response.json();
      setEvents(result);
    };

    fetchData();
  }, []);

  return (
    <section className="py-10 w-full">
      <div className="mx-auto w-full px-4 container">
        <h2 className="text-3xl font-semibold">Corporate Events</h2>

        <div className="relative mt-5">
          {/* <Carousel className="w-full "> */}
          {/* <CarouselContent className="-ml-1 w-full"> */}
          <div className="flex justify-between gap-2 w-full">
            {events.map((event, index) => (
              // <CarouselItem
              //   key={event.id}
              //   className="pl-1 min-w-[187px] max-w-[187px] flex flex-col lg:flex-row items-start gap-3"
              // >
              <div className=" !overflow-visible min-w-[187px] max-w-[187px]">
                <div className="relative flex flex-col py-7 items-center text-center gap-2 w-full">
                  <div className="w-24 h-24 md:w-32 md:h-32">
                    <Image
                      src={event.image}
                      alt={event.name}
                      // layout="fill"
                      width={112}
                      height={112}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <span className="max-w-[130px] px-1">{event.name}</span>
                  {index !== events.length - 1 && (
                    <div className="absolute w-[25%] md:w-[20%] h-1 bg-gray-300 ltr:-end-[10%] rtl:-start-[10%] -right-8 top-[4.6rem] md:top-[5.5rem]"></div>
                  )}
                </div>
              </div>
              // </CarouselItem>
            ))}
          </div>
          {/* </CarouselContent> */}
          {/* </Carousel> */}
        </div>
      </div>
    </section>
  );
};

export default CorporateEvents;
