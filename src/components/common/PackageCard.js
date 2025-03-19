import { FerrisWheel, MapPin, Sun } from "lucide-react";
import Image from "next/image";
import { IoMdMoon } from "react-icons/io";
import { FaBed, FaCar } from "react-icons/fa6";
import { Button } from "../ui/button";

const PackageCard = ({
  title,
  image,
  country,
  nights,
  days,
  price,
  original_price,
}) => {
  return (
    <div className="flex flex-col rounded-lg overflow-hidden border border-gray-200 gap-2 cursor-pointer hover:transition-all hover:-translate-y-1 hover:shadow-md">
      <div className="h-72 lg:h-52 relative">
        <Image
          src={image || "/images/Inside-Burj.webp"}
          alt={title}
          loading="lazy"
          fill
          className="object-cover w-full h-full"
        />
        <div className="text-white text-sm rounded-full font-medium text-[12px] px-2 flex items-center gap-1 absolute top-2 end-2 bg-primary p-1">
          <MapPin className="w-4 h-4" />
          {country}
        </div>
      </div>
      <div className="p-3 grid grid-rows-2">
        <h4 className="font-medium line-clamp-2">{title}</h4>
        <div className="flex justify-between items-center py-1">
          <div>
            <div className="flex gap-3 items-center">
              <IoMdMoon className="w-3 h-3" />
              <span>{nights} Nights</span>
            </div>
            <div className="flex gap-3 items-center">
              <Sun className="w-3 h-3 text-[#FF6600] fill-[#FF6600]" />
              <span>{days} Days</span>
            </div>
          </div>

          <div className="flex gap-2">
            <div className="bg-gray-100 border border-gray-500 text-[#6b7280] rounded-full w-9 h-9 flex justify-center items-center">
              <FaCar className="w-5 h-5" />
            </div>
            <div className="bg-gray-100 border border-gray-500 text-[#6b7280] rounded-full w-9 h-9 flex justify-center items-center">
              <FaBed className="w-5 h-5" />
            </div>
            <div className="bg-gray-100 border border-gray-500 text-[#6b7280] rounded-full w-9 h-9 flex justify-center items-center">
              <FerrisWheel className="w-5 h-5" />
            </div>
          </div>
        </div>

        <hr className="mb-1 border-stone-200" />
        <div className="flex justify-between items-center py-1">
          <p className="font-bold text-accent">
            From
            <span className="pr-1">$ {price}</span>
            <span className="text-gray-300 line-through font-normal">
              $ {original_price}
            </span>
          </p>
          <div className="flex gap-2">
            <Button
              type="button"
              className="rounded-full font-semibold flex gap-1 items-center justify-center capitalize text-sm ml-auto px-3 py-2 lg:py-1 cursor-pointer border border-primary bg-white text-primary"
            >
              View Details
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackageCard;
