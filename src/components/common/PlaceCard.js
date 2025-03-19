import { MapPin } from "lucide-react";
import Image from "next/image";

const PlaceCard = ({ name, image, tours }) => {
  return (
    <div className="h-full rounded-lg cursor-pointer">
      <div className=" relative group overflow-hidden rounded-2xl h-full ">
        <div className="w-full h-full flex items-center justify-center">
          <Image
            src={image}
            alt={name}
            fill
            className="w-full h-full  object-cover"
          />
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-[#274690] to-transparent md:translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <div className="flex items-center gap-2 text-white">
            <MapPin className="w-4 h-4 md:w-5 md:h-5" />
            <span className="font-semibold  text-sm md:text-base">{name}</span>
          </div>
          <p className="text-white/90 text-xs md:text-sm mt-1">
            {tours.length} tours & activities
          </p>
        </div>
      </div>
    </div>
  );
};

export default PlaceCard;
