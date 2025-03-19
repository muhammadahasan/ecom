import Image from "next/image";
import { featuresData } from "@/utils/data";

const Featured = () => {
  return (
    <div className="py-20 bg-gray-100 mt-11">
      <div className="container px-4 mx-auto w-full">
        <h2 className="font-bold text-4xl">Why JTR Holidays</h2>
        <p className="mt-5">
          We empower travelers with a hassle-free booking platform to book on
          the go & get instant confirmation/E-Tickets to enter the attractions.
          No matter where and when you want to travel,{" "}
          <span className="text-primary">jtrholidays.com</span> has got you
          covered. From Holiday/Honeymoon Packages and hotels to attraction
          tickets, airport transfers to best guided tours all in one place.
        </p>
        <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {featuresData.map((feature) => (
            <div
              key={feature.id}
              className="rounded-lg bg-white border-gray-200 border border-b-4 p-3 py-7 text-center"
            >
              <Image
                src={feature.icon}
                alt=""
                width={50}
                height={50}
                className="w-12 h-12 mx-auto"
              />
              <h3 className="font-bold text-lg mt-4">{feature.heading}</h3>
              <p className="mt-2">{feature.paragraph}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Featured;
