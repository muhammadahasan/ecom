import { MdOutlineArrowDropDown } from "react-icons/md";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import { Button } from "../ui/button";
import NavDestinations from "./NavDestination";

const regions = [
  "Top Destinations",
  "South Asia / Middle East",
  "Europe / Africa",
  "Asia",
  "Oceania",
  "North America",
];

const NavBar = () => {
  return (
    <nav className="border-t border-gray-100 py-3 hidden lg:block bg-gradient-to-l from-[#7285B3] via-[#274690] to-[#7285B3] text-white">
      <div className="mx-auto w-full px-4 container flex items-center gap-4 justify-center">
        <div className="flex gap-5 font-medium">
          {/* <TooltipProvider>
            <Tooltip> */}
          {/* <TooltipTrigger asChild> */}
          <div className=" flex items-center hover:opacity-80 text-xs font-semibold cursor-pointer">
            <p>Destinations</p>
            {/* <MdOutlineArrowDropDown className="w-4 h-4" /> */}
          </div>
          {/* </TooltipTrigger>
              <TooltipContent className="bg-white ml-7">
                <NavDestinations />
              </TooltipContent>
            </Tooltip>
          </TooltipProvider> */}

          <div className="flex items-center hover:opacity-80 text-xs font-semibold cursor-pointer">
            <p>Holidays</p>
            <MdOutlineArrowDropDown className="w-4 h-4" />
          </div>
          <div className="hover:opacity-80 text-xs font-semibold cursor-pointer">
            Categories
          </div>
          <div className="flex items-center hover:opacity-80 text-xs font-semibold cursor-pointer">
            <p>Transport</p>
            <MdOutlineArrowDropDown className="w-4 h-4" />
          </div>
          <div className="flex items-center hover:opacity-80 text-xs font-semibold cursor-pointer">
            <p>Offers</p>
            <MdOutlineArrowDropDown className="w-4 h-4" />
          </div>
          <div className="hover:opacity-80 text-xs font-semibold cursor-pointer">
            Contact Us{" "}
          </div>
        </div>
        <div
          style={{
            position: "fixed",
            height: 0,
            padding: 0,
            overflow: "hidden",
            clip: "rect(0px, 0px, 0px, 0px)",
            whiteSpace: "nowrap",
            borderWidth: 0,
            display: "none",
          }}
        ></div>
      </div>
    </nav>
  );
};

export default NavBar;
