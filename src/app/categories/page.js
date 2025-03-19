"use client";
import CategoriesCard from "@/components/common/CategoriesCard";
import Image from "next/image";
import { useEffect, useState } from "react";

const CategoriesPage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/json/categories.json");
      const result = await response.json();
      setData(result);
    };

    fetchData();
  }, []);

  return (
    <div className="pb-20">
      <div className="bg-cover bg-center">
        <div className="relative overflow-hidden text-white py-14 text-center bg-black/40 lg:min-h-[450px] flex flex-col items-center justify-center">
          <Image
            src="/images/catagories.jpg"
            alt="Activities"
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, (max-width: 1280px) 100vw, 100vw"
            className="absolute top-0 left-0 right-0 z-[-1] w-full h-full"
          />
          <h1 className="font-bold text-1xl lg:text-5xl page-title mb-2 px-5 before:h-[1px] after:h-[1px] after:bg-white/50 after:inline-block after:relative after:align-middle after:w-[6%] before:bg-white/50 before:inline-block before:relative before:align-middle before:w-[6%] before:right-4 after:left-4 capitalize w-[100%]">
            Categories
          </h1>
          <p className="text-white">Discover Your Next Adventure</p>
        </div>
      </div>

      <div className="container mx-auto px-4 w-full xl:w-[80%] mt-4 lg:mt-9 flex flex-col  gap-3 items- lg:gap-5">
        <div className="text-sm text-wrap">
          Welcome to our Categories page, where you can embark on a journey
          through the diverse landscapes and cultures that our travel and
          tourism website has to offer. Whether you're seeking tranquil beaches,
          bustling cities, or breathtaking natural wonders, you'll find an array
          of enticing options to inspire your next getaway. Dive into our
          curated categories and let your wanderlust guide you to unforgettable
          experiences.
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-5 mt-12">
          {data.map((cat) => (
            <CategoriesCard key={cat.id} name={cat.name} image={cat.image} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoriesPage;
