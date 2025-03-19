import ActivitiesSection from "@/components/activities/ActivitiesSection";
import Filter from "@/components/activities/Filter";
import Image from "next/image";

const ActivitiesPage = () => {
  return (
    <div className="pb-20">
      <div className="bg-cover bg-center">
        <div className="relative overflow-hidden text-white py-14 text-center bg-black/40 lg:min-h-[450px] flex flex-col items-center justify-center">
          <Image
            loading="lazy"
            src="/images/activity-bg.jpg"
            alt="Activities"
            fill
            className="absolute top-0 left-0 right-0 z-[-1] w-full h-full"
          />
          <h1 className="font-bold text-1xl lg:text-5xl page-title mb-2 px-5 before:h-[1px] after:h-[1px] after:bg-white/50 after:inline-block after:relative after:align-middle after:w-[6%] before:bg-white/50 before:inline-block before:relative before:align-middle before:w-[6%] before:right-4 after:left-4 capitalize w-[100%]">
            Explore Worldwide Activities
          </h1>
          <p className="text-white">Activities</p>
        </div>
      </div>

      <div className="container mx-auto px-4 w-full mt-4 lg:mt-9 flex flex-col items-start lg:flex-row lg:gap-5">
        <Filter />
        <ActivitiesSection />
      </div>
    </div>
  );
};

export default ActivitiesPage;
