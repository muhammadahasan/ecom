"use client";
import Image from "next/image";
import { Input } from "../ui/Input";
import { GiBanknote } from "react-icons/gi";
import Link from "next/link";
import { Menu, Search, X } from "lucide-react";
import { useState } from "react";

const LogoHeader = () => {
  const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false);

  const toggleMobileSearch = () => {
    setIsMobileSearchOpen((prev) => !prev);
  };

  return (
    <div className="py-1 md:py-2 lg:py-3 w-full">
      <div className="mx-auto w-full px-4 container flex gap-2 items-center lg:justify-between">
        {/* logo  */}
        <Link href="/" className="w-28 lg:w-20">
          <Image
            src="/icons/logo2.svg"
            alt="logo"
            width={160}
            height={24}
            loading="lazy"
            className="w-full h-14"
          />
        </Link>

        {/* search  */}
        <div className="w-full relative bg-white z-50 rounded-full hidden lg:block  lg:w-[450px] focus-within:ring-1 ring-accent">
          <div className="flex items-center text-sm pl-2 pr-3 md:px-3 gap-1 rounded-full [&>svg]:focus-within:!text-accent bg-gray-100/70">
            <Search className="text-[#9ca3af] relative  max-lg:!hidden " />
            <Input
              type="text"
              placeholder="Search for destination, activity or attraction"
              className="w-full text-xs placeholder:text-xs placeholder:text-[#9ca3af] rounded-full ps-0 border-none focus:ring-0 focus-visible:ring-0 focus:outline-none bg-transparent lg:py-2 "
            />
          </div>
        </div>

        {/* cart  */}
        <div className="flex items-center max-lg:ms-auto">
          <div className="gap-3 ms-auto lg:ms-0 font-medium text-sm flex items-center">
            <div className="lg:hidden">
              <div className="relative">
                <div className="cursor-pointer" onClick={toggleMobileSearch}>
                  <Search className="w-4 h-4" />
                </div>
              </div>
            </div>
            <div className="focus:outline-0 cursor-pointer">
              <div className="flex items-center gap-1 pr-2">
                <GiBanknote className="w-4 h-4" />
                <h3 className="text-[8px] lg:text-base font-normal">USD</h3>
              </div>
            </div>
          </div>

          <div
            style={{
              position: "fixed",
              top: "1px",
              left: "1px",
              width: "1px",
              height: "0px",
              padding: "0",
              margin: "-1px",
              overflow: "hidden",
              clipPath: "inset(0px)",
              whiteSpace: "nowrap",
              borderWidth: "0",
              display: "none",
            }}
          ></div>

          <Link href="#" className="max-lg:ms-auto h-5">
            <div className="relative inline-block mx-2 w-4 lg:w-6 ">
              <Image
                src="/icons/shopping-cart.svg"
                alt="cart"
                width={24}
                height={24}
                className="w-full h-full"
              />
            </div>
          </Link>
        </div>

        {/* menu  */}
        <div className="text-primary ms-3 lg:hidden">
          <Menu className="w-6 h-6" />
        </div>
      </div>

      {/* search bar for mobile  */}
      {isMobileSearchOpen && (
        <div className="bg-white z-50 absolute w-[100%]">
          <div className="lg:hidden bg-black py-1 px-3 bg-opacity-5">
            <div className="mx-auto border border-gray-100/40 rounded-full text-sm">
              <div className="bg-white flex p-1 text-gray-800 rounded-full items-center">
                <div className="rounded-full py-2 pl-4 uppercase text-primary">
                  <span className="lg:hidden">
                    <Search className="w4 h-4" />
                  </span>
                </div>
                <div className="w-full relative">
                  <div className="flex items-center text-sm pl-2 pr-3 md:px-3 gap-1 rounded-full [&>svg]:focus-within:!text-accent">
                    <Input
                      type="text"
                      placeholder="Search for destination, activity or attraction"
                      className="w-full text-xs placeholder:text-xs  rounded-full pl-2 border-none focus:ring-0 focus-visible:ring-0 shadow-none focus:outline-none bg-transparent max-lg:py-1"
                    />
                  </div>

                  {/* search result  */}
                  <div className="overscroll-contain start-0 bg-white md:rounded-lg sm:absolute shadow-md fixed max-sm:end-0 top-[92px] xs:top-[92px] sm:top-10">
                    <div
                      className="absolute top-3 end-3 z-50 cursor-pointer"
                      onClick={toggleMobileSearch}
                    >
                      <X className="w-7 h-7" />
                    </div>
                    <div className="overflow-auto p-5 w-full max-sm:min-w-[calc(100vw-28px)] h-[calc(100*var(--vh,1vh)-90px)] xs:h-[calc(100*var(--vh,1vh)-100px)] sm:w-[600px] sm:h-[350px]">
                      <section className="">
                        <h2 className="text-lg font-semibold">
                          {" "}
                          Trending Searches
                        </h2>
                        <div className="flex flex-wrap gap-2 text-sm mt-2">
                          <div className="font-medium rounded-md bg-gray-100 cursor-pointer p-2">
                            Dubai
                          </div>
                        </div>
                      </section>
                      <section className="mt-5">
                        <h2 className="text-lg font-semibold">
                          Popular Activities
                        </h2>
                        <div className="flex flex-wrap gap-2 text-sm mt-2">
                          <div className="font-medium flex items-center gap-3 rounded-md bg-gray-100 cursor-pointer p-2">
                            <div className="w-6 h-6 rounded overflow-hidden">
                              <Image
                                src="/images/singapore.jpg"
                                alt=""
                                width={100}
                                height={100}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div>Disney Land</div>
                          </div>
                        </div>
                      </section>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button
            type="button"
            onClick={toggleMobileSearch}
            className="lg:hidden bg-primary rounded-full py-3 px-3 shadow-lg absolute left-1/2 -translate-x-1/2 text-white font-thin flex justify-center items-center text-5xl"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      )}
    </div>
  );
};

export default LogoHeader;
