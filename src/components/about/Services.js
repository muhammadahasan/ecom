import Image from "next/image";
import { servicesData } from "@/utils/data";

const Services = () => {
  return (
    <div className="pt-20">
      <div className="container px-4 mx-auto w-full">
        <h2 className="font-bold text-4xl text-center">Our Services</h2>
        <div className="flex justify-center flex-wrap gap-x-5 gap-y-10 mt-16">
          {servicesData.map((service) => (
            <div
              key={service.id}
              className="bg-gray-100 rounded p-3 pb-5 flex-[0_0_100%] sm:flex-[0_0_calc(50%-20px)] lg:flex-[0_0_calc(20%-16px)] text-center"
            >
              <div className="mx-auto -mt-10 rounded-full w-20 h-20 flex items-center justify-center">
                <Image
                  src="/icons/about/ticket.svg"
                  width={70}
                  height={70}
                  alt="ticket"
                />
              </div>
              <h2 className="font-bold mt-3">{service.heading}</h2>
              <p className="mt-2 text-sm">{service.paragraph}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
