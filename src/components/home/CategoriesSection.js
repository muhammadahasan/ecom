"use client";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { Binoculars, Compass, Loader, Map, Ship, Sparkles } from "lucide-react";
import { Card, CardContent } from "../ui/card";
import { activitiesAtom } from "../../../store/atoms/activities/ActivitiesAtom";
import { useAtom } from "jotai";
import { useEffect, useState } from "react";

// const travelData = [
//   {
//     icon: <Compass className="w-5 h-5" />,
//     title: "Hiking & Trekking",
//     items: [
//       {
//         name: "Nepal",
//         image: "/icons/home/cate.svg",
//       },
//       {
//         name: "Everest Base Camp",
//         image: "/icons/home/cate2.svg",
//       },
//       {
//         name: "Machu Picchu",
//         image: "/icons/home/cate.svg",
//       },
//       {
//         name: "Kilimanjaro",
//         image: "/icons/home/cate2.svg",
//       },
//       {
//         name: "Spain",
//         image: "/icons/home/cate.svg",
//       },
//       {
//         name: "Spain",
//         image: "/icons/home/cate.svg",
//       },
//       {
//         name: "Spain",
//         image: "/icons/home/cate.svg",
//       },
//     ],
//   },
//   {
//     icon: <Ship className="w-5 h-5" />,
//     title: "River Cruises",
//     items: [
//       {
//         name: "Nile",
//         image: "/icons/home/cate.svg",
//       },
//       {
//         name: "Danube",
//         image: "/icons/home/cate2.svg",
//       },
//       {
//         name: "Rhine",
//         image: "/icons/home/cate.svg",
//       },
//       {
//         name: "Main",
//         image: "/icons/home/cate2.svg",
//       },
//       {
//         name: "Mekong",
//         image: "/icons/home/cate.svg",
//       },
//     ],
//   },
//   {
//     icon: <Binoculars className="w-5 h-5" />,
//     title: "Safari",
//     items: [
//       {
//         name: "Africa",
//         image: "/icons/home/cate2.svg",
//       },
//       {
//         name: "Tanzania",
//         image: "/icons/home/cate.svg",
//       },
//       {
//         name: "Kenya",
//         image: "/icons/home/cate2.svg",
//       },
//       {
//         name: "South Africa",
//         image: "/icons/home/cate.svg",
//       },
//       {
//         name: "Botswana",
//         image: "/icons/home/cate2.svg",
//       },
//     ],
//   },
//   {
//     icon: <Map className="w-5 h-5" />,
//     title: "Explore Europe",
//     items: [
//       {
//         name: "Train & Rail",
//         image: "/icons/home/cate.svg",
//       },
//       {
//         name: "River Cruise",
//         image: "/icons/home/cate2.svg",
//       },
//       {
//         name: "Bicycle",
//         image: "/icons/home/cate.svg",
//       },
//       {
//         name: "Budget",
//         image: "/icons/home/cate2.svg",
//       },
//       {
//         name: "Family",
//         image: "/icons/home/cate.svg",
//       },
//     ],
//   },
//   {
//     icon: <Sparkles className="w-5 h-5" />,
//     title: "Popular Adventure Styles",
//     items: [
//       {
//         name: "Sailing",
//         image: "/icons/home/cate2.svg",
//       },
//       {
//         name: "Festivals & Events",
//         image: "/icons/home/cate.svg",
//       },
//       {
//         name: "Food & Culinary",
//         image: "/icons/home/cate2.svg",
//       },
//       {
//         name: "Cultural",
//         image: "/icons/home/cate.svg",
//       },
//       {
//         name: "Bicycle",
//         image: "/icons/home/cate2.svg",
//       },
//     ],
//   },
// ];

export default function CategoriesSection() {
  const [activities, setActivities] = useAtom(activitiesAtom);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Adjust the delay as needed

    return () => clearTimeout(timer);
  }, [activities]);

  console.log("Activities!!!!", activities);

  // Filter and sort activities based on category
  const filteredActivities = {
    hikingTrekking: activities.filter(
      (activity) => activity.category === "indoor activities"
    ),
    riverCruises: activities.filter(
      (activity) => activity.category === "dhow cruise"
    ),
    safari: activities.filter(
      (activity) => activity.category === "desert safari"
    ),
    exploreEurope: activities.filter(
      (activity) => activity?.city?.country?.continent?.name === "Europe"
    ),
    popularAdventure: activities
      .sort((a, b) => b.rating - a.rating)
      .slice(0, 8), // Top 5 rated activities
  };

  const travelData = [
    {
      icon: <Compass className="w-5 h-5" />,
      title: "Hiking & Trekking",
      items: filteredActivities.hikingTrekking.map((activity) => ({
        name: activity.name,
        image: activity.images || "/placeholder.svg",
      })),
    },
    {
      icon: <Ship className="w-5 h-5" />,
      title: "River Cruises",
      items: filteredActivities.riverCruises.map((activity) => ({
        name: activity.name,
        image: activity.images || "/placeholder.svg",
      })),
    },
    {
      icon: <Binoculars className="w-5 h-5" />,
      title: "Safari",
      items: filteredActivities.safari.map((activity) => ({
        name: activity.name,
        image: activity.images || "/placeholder.svg",
      })),
    },
    {
      icon: <Map className="w-5 h-5" />,
      title: "Explore Europe",
      items: filteredActivities.exploreEurope.map((activity) => ({
        name: activity.name,
        image: activity.images || "/placeholder.svg",
      })),
    },
    {
      icon: <Sparkles className="w-5 h-5" />,
      title: "Popular Adventure Styles",
      items: filteredActivities.popularAdventure.map((activity) => ({
        name: activity.name,
        image: activity.images || "/placeholder.svg",
      })),
    },
  ];

  return (
    <section className="py-10 ">
      <div className="mx-auto w-full px-4 container">
        <header className="w-full flex justify-between">
          <h2 className="text-3xl font-semibold">Travel The World Your Way</h2>
        </header>

        {/* content  */}

        <div className="space-y-8 mt-6">
          {travelData.map((category, index) => (
            <div key={index}>
              <div className="flex items-center gap-2">
                {category.icon}
                <h2 className="text-base md:text-xl font-semibold">
                  {category.title}
                </h2>
              </div>

              {loading ? (
                <div className="flex justify-center items-center h-32">
                  <Loader className="w-8 h-8 animate-spin" />{" "}
                  {/* Your Spinner component */}
                </div>
              ) : category.items.length === 0 ? (
                <div className="flex justify-center items-center h-32">
                  <p className="text-gray-500">No activity available</p>
                </div>
              ) : (
                <Carousel
                  opts={{
                    align: "start",
                    loop: false,
                  }}
                  className="w-full "
                >
                  <CarouselContent>
                    {category.items.slice(0, 8).map((item, itemIndex) => (
                      <CarouselItem
                        key={itemIndex}
                        className=" sm:basis-1/2 md:basis-1/3 lg:basis-1/5 p-4"
                      >
                        <Card className="border-none shadow-md">
                          <CardContent className="p-2 flex items-center gap-2 ">
                            {item.image?.length > 0 ? (
                              <div className="relative aspect-[4/3] w-[60px] h-[60px] overflow-hidden rounded-lg">
                                <Image
                                  src={item.image[0] || "/placeholder.svg"}
                                  alt={item.name}
                                  fill
                                  className=" w-full h-full object-cover transition-transform hover:scale-105"
                                />
                              </div>
                            ) : (
                              <p>No Image Available</p>
                            )}
                            <h3 className="text-xs ">{item.name}</h3>
                          </CardContent>
                        </Card>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="hidden md:flex" />
                  <CarouselNext className="hidden md:flex" />
                </Carousel>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
