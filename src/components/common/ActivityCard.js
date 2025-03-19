// ActivityCard.js
import { ArrowRight, MapPin, Megaphone, Star } from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { MegaphoneIcon } from "@/utils/CustomIcons";

const ActivityCard = ({ name, image, discount, reviews, price, oldPrice }) => {
  return (
    // <div className="flex flex-col rounded-lg overflow-hidden border border-gray-200 gap-2 hover-card shadow-md mb-3 md:mb-0 cursor-pointer hover:transition-all hover:-translate-y-1 hover:shadow-md">
    //   <div className="h-72 lg:h-52 relative">
    //     <Image
    //       src={image}
    //       fill
    //       className="object-cover w-full h-full"
    //       alt={name}
    //     />
    //     {location && (
    //       <div className="text-white rounded-full font-medium text-[12px] px-2 flex items-center gap-1 absolute top-2 end-2 bg-primary p-1">
    //         <MapPin className="w-4 h-4" />
    //         Malacca
    //       </div>
    //     )}

    //     <div className="text-white  rounded-full font-medium text-[12px] px-2 flex items-center gap-1 absolute left-2 top-2 bg-red-600 p-1">
    //       {discount}
    //     </div>
    //   </div>
    //   <div className="p-3">
    //     <h3 className="font-medium line-clamp-2 min-h-[3rem]">{name}</h3>
    //     <div className="flex flex-row gap-1 items-center">
    //       <div className="flex items-center text-sm">
    //         <Star className="text-[#ffb504] fill-[#ffb504] w-4 h-4" />
    //         <div className="text-xs"> ({reviews} Reviews) </div>
    //       </div>
    //     </div>
    //     <p className="font-semibold text-accent text-xs lg:text-sm flex justify-between items-center">
    //       From<span className="pl-1 text-xs lg:text-sm">$ {price}</span>
    //       <span className="text-muted line-through font-normal text-xs lg:text-sm pl-1">
    //         $ {oldPrice}
    //       </span>
    //       <Button
    //         variant="default"
    //         className="border-2 pl-1 rounded-full font-semibold flex gap-1 items-center justify-center capitalize text-sm ml-auto px-3 py-2 lg:py-1 cursor-pointer bg-transparent border-primary text-primary"
    //       >
    //         Book Now
    //       </Button>
    //     </p>
    //   </div>
    // </div>

    <Card className="relative w-full max-w-md overflow-hidden rounded-xl">
      {/* Background Image */}
      {image?.length > 0 ? (
        <div className="h-[300px] w-full relative">
          <Image
            src={image[0]}
            alt={name}
            fill
            className="object-cover w-full h-full"
            loading="lazy"
          />
        </div>
      ) : (
        <p>No Image Available</p>
      )}

      {/* Price Banner */}
      <div className="absolute top-4 left-0 bg-gradient-to-l from-[#C4C2C7] via-[#7285B3] to-[#274690] backdrop-blur-sm px-4 py-2 rounded-tr-full rounded-br-full flex items-center gap-2">
        <MegaphoneIcon className="w-5 h-5 text-yellow-500" />
        <span className="text-sm font-medium">
          From ${price}
          <span className="text-red-500 line-through font-normal text-xs lg:text-sm pl-1">
            $ {oldPrice}
          </span>
        </span>
      </div>

      {/* Content Overlay */}
      <div className="absolute bottom-2 left-2 right-2 bg-gradient-to-l from-[#C4C2C7] via-[#7285B3] to-[#274690] backdrop-blur-sm p-2 rounded-md">
        <div className="flex flex-col items-start justify-between gap-1">
          <h3 className="text-[13px] font-semibold text-white line-clamp-1">
            {name}
          </h3>
          <div className="flex items-center justify-between gap-1 w-full">
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />

              <span className="text-white/80 text-[10px]">
                ({reviews} Reviews)
              </span>
            </div>
            <button className="bg-transparent text-white text-[11px] flex items-center">
              Book Now
              <ArrowRight className="w-4 h-4 ml-2" />
            </button>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default ActivityCard;
