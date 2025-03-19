"use client";

import { ArrowRight } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";

export default function DestinationCard({ title, image, destinations = [] }) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <div
            className={`relative overflow-hidden rounded-2xl mb-4 cursor-pointer `}
          >
            <div className="relative h-28 group">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${image})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />
              <div className="absolute inset-0 p-6 flex items-center justify-between">
                <h2 className="text-xl lg:text-3xl font-bold text-white">
                  {title}
                </h2>
                <div className="flex items-center gap-4">
                  <button className="px-4 py-2 rounded-full border border-white/30 bg-white/10 backdrop-blur-sm text-white text-xs lg:text-sm hover:bg-white/20 transition-colors">
                    All Adventures
                  </button>
                  {/* <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white">
                    <ArrowRight size={20} />
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </TooltipTrigger>

        {destinations.length > 0 && (
          <TooltipContent
            side="bottom"
            sideOffset={0}
            className="w-[490px] xl:w-[620px] hidden lg:block p-0 bg-gradient-to-l from-[#C4C2C7] via-[#7285B3] to-[#274690] backdrop-blur-sm border-none shadow-xl rounded-2xl"
          >
            <div className="p-8 grid grid-cols-3 gap-x-4 gap-y-3">
              {destinations.map((des) => (
                <div key={des._id} className="space-y-3">
                  <Link
                    href={`/country/${des.name.toLowerCase()}`}
                    key={des._id}
                    className="text-white hover:text-white/80 transition-colors text-left w-full"
                  >
                    {des.name}
                  </Link>
                </div>
              ))}
            </div>
          </TooltipContent>
        )}
      </Tooltip>
    </TooltipProvider>
  );
}
